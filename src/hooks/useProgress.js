import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { getDemoMode, DEMO_PROGRESS } from '../lib/demoMode';

const STORAGE_KEY = 'english-course-progress';

const defaultProgress = {
  studentName: '',
  level: null,
  placementCompleted: false,
  placementResult: null,
  completedLessons: [],
  lessonScores: {},
  assessmentScores: {},
  startDate: null,
};

export function useProgress(userId) {
  const demo = getDemoMode();
  const [progress, setProgress] = useState(() => {
    if (demo) return DEMO_PROGRESS;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });
  const [dbLoaded, setDbLoaded] = useState(!!demo);
  const saveTimeoutRef = useRef(null);

  // Load progress from Supabase when user is authenticated
  useEffect(() => {
    if (demo) { setDbLoaded(true); return; }
    if (!userId) {
      setDbLoaded(true);
      return;
    }

    const loadFromDb = async () => {
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('progress_data')
          .eq('user_id', userId)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error loading progress:', error);
        }

        if (data?.progress_data) {
          const dbProgress = data.progress_data;
          setProgress(dbProgress);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(dbProgress));
        }
      } catch (err) {
        console.error('Error loading progress from DB:', err);
      } finally {
        setDbLoaded(true);
      }
    };

    loadFromDb();
  }, [userId]);

  // Save progress to localStorage + Supabase (debounced)
  const saveToDb = useCallback(
    (newProgress) => {
      if (demo) return; // never persist in demo mode
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));

      if (!userId) return;

      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(async () => {
        try {
          await supabase.from('user_progress').upsert(
            {
              user_id: userId,
              progress_data: newProgress,
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'user_id' }
          );
        } catch (err) {
          console.error('Error saving progress to DB:', err);
        }
      }, 500);
    },
    [userId]
  );

  useEffect(() => {
    if (dbLoaded) {
      saveToDb(progress);
    }
  }, [progress, dbLoaded, saveToDb]);

  const setStudentName = (name) => {
    setProgress(prev => ({ ...prev, studentName: name }));
  };

  const setLevel = (level) => {
    setProgress(prev => ({ ...prev, level }));
  };

  const completePlacement = (result) => {
    setProgress(prev => ({
      ...prev,
      placementCompleted: true,
      placementResult: result,
      level: result.level,
      startDate: prev.startDate || new Date().toISOString(),
    }));
  };

  const completeLesson = (lessonId, score) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId],
      lessonScores: { ...prev.lessonScores, [lessonId]: score },
    }));
  };

  const completeAssessment = (level, score) => {
    setProgress(prev => ({
      ...prev,
      assessmentScores: { ...prev.assessmentScores, [level]: score },
    }));
  };

  const resetProgress = async () => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
    if (userId) {
      try {
        await supabase
          .from('user_progress')
          .update({ progress_data: defaultProgress, updated_at: new Date().toISOString() })
          .eq('user_id', userId);
      } catch (err) {
        console.error('Error resetting progress in DB:', err);
      }
    }
  };

  const isLessonCompleted = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  const getLessonScore = (lessonId) => {
    return progress.lessonScores[lessonId] || null;
  };

  const getAssessmentScore = (level) => {
    return progress.assessmentScores[level] || null;
  };

  return {
    progress,
    dbLoaded,
    setStudentName,
    setLevel,
    completePlacement,
    completeLesson,
    completeAssessment,
    resetProgress,
    isLessonCompleted,
    getLessonScore,
    getAssessmentScore,
  };
}
