const placementQuestions = [
  // A1 Level Questions (1-10)
  {
    id: 1,
    level: 'A1',
    question: 'What ___ your name?',
    options: ['is', 'are', 'am', 'be'],
    correct: 0,
    skill: 'grammar'
  },
  {
    id: 2,
    level: 'A1',
    question: 'She ___ from Brazil.',
    options: ['are', 'is', 'am', 'be'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 3,
    level: 'A1',
    question: 'I ___ a student.',
    options: ['is', 'are', 'am', 'be'],
    correct: 2,
    skill: 'grammar'
  },
  {
    id: 4,
    level: 'A1',
    question: 'Where ___ you live?',
    options: ['does', 'do', 'is', 'are'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 5,
    level: 'A1',
    question: 'They ___ two children.',
    options: ['has', 'have', 'having', 'haves'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 6,
    level: 'A1',
    question: 'Choose the correct word: "This is ___ apple."',
    options: ['a', 'an', 'the', 'some'],
    correct: 1,
    skill: 'vocabulary'
  },
  {
    id: 7,
    level: 'A1',
    question: 'What is the opposite of "hot"?',
    options: ['warm', 'cold', 'cool', 'wet'],
    correct: 1,
    skill: 'vocabulary'
  },
  {
    id: 8,
    level: 'A1',
    question: 'I ___ to school every day.',
    options: ['goes', 'go', 'going', 'gone'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 9,
    level: 'A1',
    question: 'There ___ a book on the table.',
    options: ['is', 'are', 'am', 'be'],
    correct: 0,
    skill: 'grammar'
  },
  {
    id: 10,
    level: 'A1',
    question: 'She ___ like coffee.',
    options: ['don\'t', 'doesn\'t', 'isn\'t', 'aren\'t'],
    correct: 1,
    skill: 'grammar'
  },

  // A2 Level Questions (11-20)
  {
    id: 11,
    level: 'A2',
    question: 'I ___ to the cinema last night.',
    options: ['go', 'went', 'going', 'gone'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 12,
    level: 'A2',
    question: 'She is ___ than her sister.',
    options: ['tall', 'taller', 'tallest', 'more tall'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 13,
    level: 'A2',
    question: 'We ___ playing football when it started to rain.',
    options: ['was', 'were', 'are', 'is'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 14,
    level: 'A2',
    question: 'He has ___ finished his homework.',
    options: ['yet', 'already', 'still', 'never'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 15,
    level: 'A2',
    question: 'I\'m going ___ a holiday next week.',
    options: ['in', 'at', 'on', 'to'],
    correct: 2,
    skill: 'grammar'
  },
  {
    id: 16,
    level: 'A2',
    question: 'What does "purchase" mean?',
    options: ['to sell', 'to buy', 'to give', 'to take'],
    correct: 1,
    skill: 'vocabulary'
  },
  {
    id: 17,
    level: 'A2',
    question: 'You ___ see a doctor. You look ill.',
    options: ['should', 'would', 'could', 'might'],
    correct: 0,
    skill: 'grammar'
  },
  {
    id: 18,
    level: 'A2',
    question: 'The film was ___ boring that I fell asleep.',
    options: ['too', 'so', 'such', 'very'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 19,
    level: 'A2',
    question: 'I\'ve lived here ___ 2010.',
    options: ['for', 'since', 'from', 'during'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 20,
    level: 'A2',
    question: 'He asked me where I ___.',
    options: ['live', 'lived', 'living', 'lives'],
    correct: 1,
    skill: 'grammar'
  },

  // B1 Level Questions (21-30)
  {
    id: 21,
    level: 'B1',
    question: 'If I ___ rich, I would travel the world.',
    options: ['am', 'was', 'were', 'be'],
    correct: 2,
    skill: 'grammar'
  },
  {
    id: 22,
    level: 'B1',
    question: 'The book ___ by millions of people.',
    options: ['has read', 'has been read', 'has been reading', 'had read'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 23,
    level: 'B1',
    question: 'She said she ___ come to the party.',
    options: ['will', 'would', 'shall', 'can'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 24,
    level: 'B1',
    question: 'I wish I ___ speak French fluently.',
    options: ['can', 'could', 'would', 'should'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 25,
    level: 'B1',
    question: 'By the time we arrived, the film ___.',
    options: ['started', 'has started', 'had started', 'was starting'],
    correct: 2,
    skill: 'grammar'
  },
  {
    id: 26,
    level: 'B1',
    question: 'The word "reluctant" means:',
    options: ['eager', 'unwilling', 'happy', 'confused'],
    correct: 1,
    skill: 'vocabulary'
  },
  {
    id: 27,
    level: 'B1',
    question: 'Despite ___ hard, he failed the exam.',
    options: ['study', 'to study', 'studying', 'studied'],
    correct: 2,
    skill: 'grammar'
  },
  {
    id: 28,
    level: 'B1',
    question: 'I\'m not used ___ up so early.',
    options: ['to get', 'getting', 'to getting', 'get'],
    correct: 2,
    skill: 'grammar'
  },
  {
    id: 29,
    level: 'B1',
    question: 'He denied ___ the window.',
    options: ['to break', 'breaking', 'broke', 'break'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 30,
    level: 'B1',
    question: 'The meeting has been ___ until next Monday.',
    options: ['put off', 'put on', 'put up', 'put out'],
    correct: 0,
    skill: 'vocabulary'
  },

  // B2 Level Questions (31-40)
  {
    id: 31,
    level: 'B2',
    question: 'Not only ___ the exam, but she also got the highest mark.',
    options: ['she passed', 'did she pass', 'she did pass', 'passed she'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 32,
    level: 'B2',
    question: 'The project ___ by the end of next month.',
    options: ['will complete', 'will be completed', 'will have been completed', 'is completed'],
    correct: 2,
    skill: 'grammar'
  },
  {
    id: 33,
    level: 'B2',
    question: 'Had I known about the problem, I ___ differently.',
    options: ['would act', 'would have acted', 'will act', 'acted'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 34,
    level: 'B2',
    question: 'The manager, ___ office is on the top floor, wants to see you.',
    options: ['who', 'which', 'whose', 'whom'],
    correct: 2,
    skill: 'grammar'
  },
  {
    id: 35,
    level: 'B2',
    question: '"Ubiquitous" most closely means:',
    options: ['rare', 'found everywhere', 'dangerous', 'ancient'],
    correct: 1,
    skill: 'vocabulary'
  },
  {
    id: 36,
    level: 'B2',
    question: 'It\'s high time we ___ about climate change.',
    options: ['do something', 'did something', 'have done something', 'doing something'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 37,
    level: 'B2',
    question: 'She ___ have left already; her coat is gone.',
    options: ['must', 'can', 'should', 'would'],
    correct: 0,
    skill: 'grammar'
  },
  {
    id: 38,
    level: 'B2',
    question: 'The more you practise, ___ you will become.',
    options: ['the better', 'the best', 'better', 'best'],
    correct: 0,
    skill: 'grammar'
  },
  {
    id: 39,
    level: 'B2',
    question: 'He\'s the person to ___ I spoke yesterday.',
    options: ['who', 'whom', 'which', 'that'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 40,
    level: 'B2',
    question: 'The word "pragmatic" means:',
    options: ['idealistic', 'practical and realistic', 'emotional', 'theoretical'],
    correct: 1,
    skill: 'vocabulary'
  },

  // C1 Level Questions (41-50)
  {
    id: 41,
    level: 'C1',
    question: 'Hardly ___ the door when the phone rang.',
    options: ['I had closed', 'had I closed', 'I closed', 'did I close'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 42,
    level: 'C1',
    question: 'Were it not for his help, we ___ the deadline.',
    options: ['wouldn\'t meet', 'wouldn\'t have met', 'didn\'t meet', 'won\'t meet'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 43,
    level: 'C1',
    question: '"Ephemeral" most closely means:',
    options: ['lasting', 'short-lived', 'important', 'complex'],
    correct: 1,
    skill: 'vocabulary'
  },
  {
    id: 44,
    level: 'C1',
    question: 'The evidence ___ suggest that the theory is correct.',
    options: ['does', 'do', 'is', 'are'],
    correct: 0,
    skill: 'grammar'
  },
  {
    id: 45,
    level: 'C1',
    question: 'Much ___ I admire her work, I cannot agree with her conclusions.',
    options: ['as', 'though', 'despite', 'however'],
    correct: 0,
    skill: 'grammar'
  },
  {
    id: 46,
    level: 'C1',
    question: 'The decision was taken ___ of any political pressure.',
    options: ['irrespective', 'regardless', 'notwithstanding', 'despite'],
    correct: 0,
    skill: 'vocabulary'
  },
  {
    id: 47,
    level: 'C1',
    question: 'Not until the results were published ___ the full extent of the problem.',
    options: ['we realized', 'did we realize', 'we did realize', 'realized we'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 48,
    level: 'C1',
    question: '"Ameliorate" means to:',
    options: ['worsen', 'improve', 'delay', 'destroy'],
    correct: 1,
    skill: 'vocabulary'
  },
  {
    id: 49,
    level: 'C1',
    question: 'The proposal, controversial ___ it may be, deserves consideration.',
    options: ['as', 'though', 'however', 'despite'],
    correct: 0,
    skill: 'grammar'
  },
  {
    id: 50,
    level: 'C1',
    question: 'She came across ___ being rather arrogant, but she\'s actually shy.',
    options: ['as', 'like', 'for', 'with'],
    correct: 0,
    skill: 'grammar'
  },

  // C2 Level Questions (51-60)
  {
    id: 51,
    level: 'C2',
    question: 'The committee ___ yet to reach a consensus on the matter.',
    options: ['has', 'have', 'is', 'are'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 52,
    level: 'C2',
    question: '"Obfuscate" means to:',
    options: ['clarify', 'make unclear', 'celebrate', 'negotiate'],
    correct: 1,
    skill: 'vocabulary'
  },
  {
    id: 53,
    level: 'C2',
    question: 'The phenomenon, ___ it was first observed in 1987, remains poorly understood.',
    options: ['notwithstanding that', 'inasmuch as', 'insofar as', 'albeit'],
    correct: 3,
    skill: 'grammar'
  },
  {
    id: 54,
    level: 'C2',
    question: '"Sycophantic" behavior involves:',
    options: ['aggressive confrontation', 'excessive flattery', 'quiet withdrawal', 'constructive criticism'],
    correct: 1,
    skill: 'vocabulary'
  },
  {
    id: 55,
    level: 'C2',
    question: 'So ___ was the damage that the building had to be demolished.',
    options: ['extensive', 'extended', 'extending', 'extent'],
    correct: 0,
    skill: 'grammar'
  },
  {
    id: 56,
    level: 'C2',
    question: '"Perfunctory" most closely means:',
    options: ['thorough', 'done without care or effort', 'perfect', 'functional'],
    correct: 1,
    skill: 'vocabulary'
  },
  {
    id: 57,
    level: 'C2',
    question: 'Under no circumstances ___ to leave the building during the drill.',
    options: ['employees are', 'are employees', 'employees should', 'should employees'],
    correct: 1,
    skill: 'grammar'
  },
  {
    id: 58,
    level: 'C2',
    question: 'The report was ___ in its criticism of the government\'s policy.',
    options: ['trenchant', 'tremulous', 'tangential', 'truculent'],
    correct: 0,
    skill: 'vocabulary'
  },
  {
    id: 59,
    level: 'C2',
    question: '___ the financial constraints, the project was completed on time.',
    options: ['Notwithstanding', 'Nevertheless', 'Nonetheless', 'However'],
    correct: 0,
    skill: 'grammar'
  },
  {
    id: 60,
    level: 'C2',
    question: '"Verisimilitude" refers to:',
    options: ['exact truth', 'the appearance of being true', 'scientific proof', 'absolute certainty'],
    correct: 1,
    skill: 'vocabulary'
  }
];

export function calculateLevel(answers) {
  const levelScores = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
  const levelTotals = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };

  placementQuestions.forEach((q, idx) => {
    levelTotals[q.level]++;
    if (answers[idx] === q.correct) {
      levelScores[q.level]++;
    }
  });

  const levelPercentages = {};
  Object.keys(levelScores).forEach(level => {
    levelPercentages[level] = levelTotals[level] > 0
      ? (levelScores[level] / levelTotals[level]) * 100
      : 0;
  });

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  let determinedLevel = 'A1';

  for (let i = levels.length - 1; i >= 0; i--) {
    if (levelPercentages[levels[i]] >= 60) {
      determinedLevel = levels[i];
      break;
    }
  }

  const totalCorrect = Object.values(levelScores).reduce((a, b) => a + b, 0);
  const totalQuestions = placementQuestions.length;

  return {
    level: determinedLevel,
    totalCorrect,
    totalQuestions,
    percentage: Math.round((totalCorrect / totalQuestions) * 100),
    levelBreakdown: levelPercentages
  };
}

export default placementQuestions;
