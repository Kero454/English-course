import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { getDemoMode, isDemoPaid, DEMO_ENTITLEMENT } from '../lib/demoMode';

// LemonSqueezy License API — public endpoints (no API key required for activate/validate)
// Docs: https://docs.lemonsqueezy.com/api/license-api
const LS_API = 'https://api.lemonsqueezy.com/v1';

// Local cache key (so we don't have to hit Supabase on every page load)
const CACHE_KEY = 'english-course-entitlement';

/**
 * Activate a LemonSqueezy license key against their public API.
 * Returns the parsed JSON response on success, or throws on failure.
 */
async function activateLicenseKey(licenseKey, instanceName) {
  const res = await fetch(`${LS_API}/licenses/activate`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      license_key: licenseKey.trim(),
      instance_name: instanceName,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.activated === false || data.error) {
    throw new Error(data.error || 'License activation failed. Please check the key and try again.');
  }
  return data;
}

/**
 * Validate an existing license key + instance.
 * Returns true if the license is currently valid (active, not expired/disabled).
 */
async function validateLicenseKey(licenseKey, instanceId) {
  try {
    const res = await fetch(`${LS_API}/licenses/validate`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        license_key: licenseKey,
        instance_id: instanceId,
      }),
    });
    const data = await res.json().catch(() => ({}));
    return Boolean(data.valid);
  } catch {
    // If the API is unreachable, fall back to the cached entitlement (don't lock out paying users)
    return true;
  }
}

export function useEntitlement(userId) {
  const [entitlement, setEntitlement] = useState(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  });
  const [loaded, setLoaded] = useState(false);

  // Load entitlement from Supabase when user signs in
  useEffect(() => {
    // Demo mode short-circuit
    if (getDemoMode()) {
      setEntitlement(isDemoPaid() ? DEMO_ENTITLEMENT : null);
      setLoaded(true);
      return;
    }

    if (!userId) {
      setEntitlement(null);
      localStorage.removeItem(CACHE_KEY);
      setLoaded(true);
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase
          .from('entitlements')
          .select('*')
          .eq('user_id', userId)
          .maybeSingle();

        if (error && error.code !== 'PGRST116') {
          console.error('Failed to fetch entitlement:', error);
        }

        if (!cancelled) {
          if (data && data.status === 'active') {
            setEntitlement(data);
            localStorage.setItem(CACHE_KEY, JSON.stringify(data));
          } else {
            setEntitlement(null);
            localStorage.removeItem(CACHE_KEY);
          }
        }
      } catch (err) {
        console.error('Entitlement load error:', err);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();

    return () => { cancelled = true; };
  }, [userId]);

  /**
   * Redeem a license key. Activates it with LemonSqueezy, then stores the
   * resulting entitlement row in Supabase.
   */
  const redeemLicense = useCallback(async (licenseKey, userEmail) => {
    if (!userId) throw new Error('You must be signed in to redeem a license.');

    // 1. Activate the key with LemonSqueezy (public API, no server needed)
    const result = await activateLicenseKey(
      licenseKey,
      userEmail || `user-${userId.slice(0, 8)}`
    );

    if (!result.license_key || !result.instance) {
      throw new Error('License activation returned an unexpected response.');
    }

    // 2. Save the entitlement to Supabase (RLS ensures it can only be saved for current user)
    const row = {
      user_id: userId,
      license_key: result.license_key.key || licenseKey.trim(),
      license_instance_id: result.instance.id,
      product_variant: result.meta?.variant_name || null,
      customer_email: result.meta?.customer_email || userEmail || null,
      status: 'active',
      activated_at: new Date().toISOString(),
      validated_at: new Date().toISOString(),
      raw: result,
    };

    const { error } = await supabase
      .from('entitlements')
      .upsert(row, { onConflict: 'user_id' });

    if (error) throw new Error(`Could not save your license: ${error.message}`);

    setEntitlement(row);
    localStorage.setItem(CACHE_KEY, JSON.stringify(row));
    return row;
  }, [userId]);

  /**
   * Re-validate the stored license against LemonSqueezy. If invalid, clear it.
   * Call this on app load (or once a day) for safety.
   */
  const revalidate = useCallback(async () => {
    if (!entitlement) return false;
    const valid = await validateLicenseKey(entitlement.license_key, entitlement.license_instance_id);
    if (!valid) {
      // License was disabled (e.g., refunded). Mark inactive in Supabase.
      try {
        await supabase
          .from('entitlements')
          .update({ status: 'inactive', validated_at: new Date().toISOString() })
          .eq('user_id', userId);
      } catch {}
      setEntitlement(null);
      localStorage.removeItem(CACHE_KEY);
      return false;
    }
    return true;
  }, [entitlement, userId]);

  return {
    entitlement,
    isPaid: !!entitlement && entitlement.status === 'active',
    loaded,
    redeemLicense,
    revalidate,
  };
}
