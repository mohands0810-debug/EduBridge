/**
 * EduBridge Curriculum & Adaptation Knowledge Base
 */

export const CURRICULA = [
  { id: 'CBSE', name: 'CBSE (NCERT)', subtitle: 'Central Board of Secondary Education' },
  { id: 'ICSE', name: 'ICSE', subtitle: 'Indian Certificate of Secondary Education' },
  { id: 'State_Board', name: 'Karnataka State Board', subtitle: 'DSERT Curricular Framework' }
];

export const DISABILITY_PROFILES = [
  {
    id: 'ADHD',
    name: 'Attention Deficit (ADHD)',
    icon: 'fa-bolt',
    strategy: 'Divide concepts into 2–3 minute micro-tasks. Use high visual contrast, immediate interactive confirmation, and eliminate background clutter to sustain student focus.'
  },
  {
    id: 'ASD',
    name: 'Autism Spectrum (ASD)',
    icon: 'fa-puzzle-piece',
    strategy: 'Maintain structured, predictable steps. Use clear visual references without sudden acoustic transitions or distracting animations.'
  },
  {
    id: 'Dyslexia',
    name: 'Dyslexia & Reading Difficulties',
    icon: 'fa-book-open-reader',
    strategy: 'Provide increased character and line spacing, synchronous audio narration, and distinct visual token separation.'
  },
  {
    id: 'ID',
    name: 'Intellectual Disability (Mild / Moderate)',
    icon: 'fa-shapes',
    strategy: 'Teach using concrete real-world objects (fruits, coins, blocks). Use single-step instructions and repeated positive reinforcement.'
  },
  {
    id: 'General',
    name: 'Inclusive Classroom (Whole Cohort)',
    icon: 'fa-users',
    strategy: 'Combine visual projection, teacher-led verbal questioning, and whole-class participation exercises.'
  }
];

export const GRADES = [
  { id: 1, name: 'Grade 1', ageRange: 'Ages 6–7' },
  { id: 2, name: 'Grade 2', ageRange: 'Ages 7–8' },
  { id: 3, name: 'Grade 3', ageRange: 'Ages 8–9' },
  { id: 4, name: 'Grade 4', ageRange: 'Ages 9–10' },
  { id: 5, name: 'Grade 5', ageRange: 'Ages 10–11' }
];

export const SUBJECTS = [
  {
    id: 'Math',
    name: 'Mathematics',
    icon: 'fa-calculator',
    topics: [
      {
        id: 'math_addition',
        title: 'Visual Addition (Sums to 10)',
        description: 'Counting tangible fruit items and calculating sums.',
        taskPrompt: 'Count the apples on the screen. How many are there in total?',
        taskItems: ['🍎', '🍎', '🍎', '🍎', '🍎'],
        options: ['3', '5', '7'],
        correctAnswer: '5',
        successMessage: 'Correct! There are exactly 5 apples.',
        gameChallenge: {
          title: 'Classroom Count Challenge',
          instruction: 'Compare the two groups. Teacher calls on Row A or Row B to identify the larger quantity.',
          left: '🍎 🍎 🍎 (3)',
          right: '🍎 🍎 🍎 🍎 🍎 (5)'
        },
        videoTitle: 'Visual Addition with Familiar Objects',
        videoSubtitle: 'Step-by-step counting with clear audio captions',
        clipSteps: [
          {
            duration: 4,
            caption: 'Step 1: First, we start with 2 red apples on the table.',
            visualHtml: '<div class="flex items-center gap-4 text-5xl animate-bounce"><span>🍎</span><span>🍎</span></div>'
          },
          {
            duration: 4,
            caption: 'Step 2: Now, let us add 3 more green apples beside them.',
            visualHtml: '<div class="flex items-center gap-3 text-5xl"><span>🍎</span><span>🍎</span><span class="text-3xl text-zinc-400 font-bold">+</span><span>🍏</span><span>🍏</span><span>🍏</span></div>'
          },
          {
            duration: 5,
            caption: 'Step 3: Let us count all of them together: one, two, three, four, five!',
            visualHtml: '<div class="flex flex-col items-center gap-2"><div class="flex gap-3 text-5xl"><span>🍎</span><span>🍎</span><span>🍏</span><span>🍏</span><span>🍏</span></div><div class="text-sm font-semibold text-zinc-500">1 ... 2 ... 3 ... 4 ... 5</div></div>'
          },
          {
            duration: 4,
            caption: 'Summary: Two plus three equals five apples in total!',
            visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black tracking-tight">2 + 3 = 5 ⭐</div>'
          }
        ]
      },
      {
        id: 'math_shapes',
        title: '2D Shapes Recognition',
        description: 'Identifying circles, squares, and triangles in everyday life.',
        taskPrompt: 'Which shape has 4 straight sides of equal length?',
        taskItems: ['Square', 'Circle', 'Triangle'],
        options: ['Square', 'Circle', 'Triangle'],
        correctAnswer: 'Square',
        successMessage: 'Correct! A square has 4 equal straight sides.',
        gameChallenge: {
          title: 'Classroom Shape Spotting',
          instruction: 'Teacher points to a shape. Students raise hands to match it with an object in the room.',
          left: 'Circle (Clock / Wheel)',
          right: 'Square (Tile / Box)'
        },
        videoTitle: 'Recognizing Geometric Shapes Around Us',
        videoSubtitle: 'Visual properties of circles, squares, and triangles',
        clipSteps: [
          {
            duration: 4,
            caption: 'Step 1: A Square has four straight sides of equal length and four corners.',
            visualHtml: '<div class="w-24 h-24 border-4 border-zinc-900 dark:border-zinc-100 flex items-center justify-center font-bold text-xs uppercase tracking-wider">Square</div>'
          },
          {
            duration: 4,
            caption: 'Step 2: A Circle is completely round with continuous curve and zero corners.',
            visualHtml: '<div class="w-24 h-24 rounded-full border-4 border-zinc-900 dark:border-zinc-100 flex items-center justify-center font-bold text-xs uppercase tracking-wider">Circle</div>'
          },
          {
            duration: 4,
            caption: 'Step 3: A Triangle has three straight sides and three sharp corners.',
            visualHtml: '<div class="text-6xl font-black">🔺</div>'
          },
          {
            duration: 4,
            caption: 'Summary: Look around the classroom to find these three basic shapes!',
            visualHtml: '<div class="flex items-center gap-6 text-4xl"><span>🟦</span><span>🔴</span><span>🔺</span></div>'
          }
        ]
      },
      {
        id: 'math_patterns',
        title: 'Color & Pattern Sequences',
        description: 'Logical pattern continuation using visual color markers.',
        taskPrompt: 'What comes next in the sequence: Red ➔ Blue ➔ Red ➔ ?',
        taskItems: ['🔴 Red', '🔵 Blue', '🔴 Red', '❓ Next'],
        options: ['Blue', 'Red', 'Green'],
        correctAnswer: 'Blue',
        successMessage: 'Great work! The sequence continues with Blue.',
        gameChallenge: {
          title: 'Pattern Clapping Game',
          instruction: 'Students clap on Red and tap desks on Blue as the teacher projects the rhythm.',
          left: 'Clap (Red)',
          right: 'Tap (Blue)'
        },
        videoTitle: 'Understanding Repeating Patterns',
        videoSubtitle: 'Identifying rhythmic and visual sequences',
        clipSteps: [
          {
            duration: 4,
            caption: 'Step 1: Let us start with a Red token on the left.',
            visualHtml: '<div class="text-6xl animate-pulse">🔴</div>'
          },
          {
            duration: 4,
            caption: 'Step 2: Following it comes a Blue token.',
            visualHtml: '<div class="flex gap-4 text-6xl"><span>🔴</span><span>🔵</span></div>'
          },
          {
            duration: 4,
            caption: 'Step 3: The pattern repeats: Red, then Blue, then Red again.',
            visualHtml: '<div class="flex gap-4 text-5xl"><span>🔴</span><span>🔵</span><span>🔴</span></div>'
          },
          {
            duration: 4,
            caption: 'Answer: To complete the pattern, the next token must be Blue!',
            visualHtml: '<div class="flex items-center gap-3 text-5xl"><span>🔴</span><span>🔵</span><span>🔴</span><span class="p-2 border-2 border-dashed border-zinc-400 rounded-xl">🔵</span></div>'
          }
        ]
      }
    ]
  },
  {
    id: 'EVS',
    name: 'Environmental Studies (EVS)',
    icon: 'fa-leaf',
    topics: [
      {
        id: 'evs_plants',
        title: 'Parts of a Plant',
        description: 'Structure and functions of roots, stem, leaves, and flowers.',
        taskPrompt: 'Which part of the plant anchors it underground and absorbs water?',
        taskItems: ['Roots (Underground)', 'Leaves (Green)', 'Flower (Bloom)'],
        options: ['Roots', 'Leaves', 'Flower'],
        correctAnswer: 'Roots',
        successMessage: 'Correct! Roots grow below the soil to absorb water and nutrients.',
        gameChallenge: {
          title: 'Plant Parts Relay',
          instruction: 'Row A identifies what absorbs sunlight; Row B identifies what absorbs water from soil.',
          left: 'Roots (Water & Soil)',
          right: 'Leaves (Sunlight & Air)'
        },
        videoTitle: 'The Life of a Plant: From Seed to Bloom',
        videoSubtitle: 'An illustrated guide to plant anatomy',
        clipSteps: [
          {
            duration: 4,
            caption: 'Step 1: Deep underground, the Roots drink water and anchor the plant.',
            visualHtml: '<div class="text-center"><div class="text-6xl">🌱</div><div class="text-xs font-bold text-zinc-500 mt-1">1. Roots (Underground)</div></div>'
          },
          {
            duration: 4,
            caption: 'Step 2: The Stem grows upwards to hold the plant strong.',
            visualHtml: '<div class="text-center"><div class="text-6xl">🌿</div><div class="text-xs font-bold text-zinc-500 mt-1">2. Stem & Branches</div></div>'
          },
          {
            duration: 4,
            caption: 'Step 3: Green Leaves absorb sunlight to prepare food for the plant.',
            visualHtml: '<div class="text-center"><div class="text-6xl">🍃</div><div class="text-xs font-bold text-zinc-500 mt-1">3. Leaves (Sunlight)</div></div>'
          },
          {
            duration: 4,
            caption: 'Step 4: Finally, bright Flowers bloom to produce seeds and fruits!',
            visualHtml: '<div class="text-center"><div class="text-6xl">🌸</div><div class="text-xs font-bold text-zinc-500 mt-1">4. Flower & Seeds</div></div>'
          }
        ]
      },
      {
        id: 'evs_animals',
        title: 'Domestic & Wild Animals',
        description: 'Classifying animals by their habitat, sound, and relation to humans.',
        taskPrompt: 'Which of these is a domestic animal that lives on farms?',
        taskItems: ['Cow (Farm)', 'Lion (Jungle)', 'Elephant (Forest)'],
        options: ['Cow', 'Lion', 'Elephant'],
        correctAnswer: 'Cow',
        successMessage: 'Correct! Cows are domestic farm animals.',
        gameChallenge: {
          title: 'Animal Habitat Categorization',
          instruction: 'Students identify whether the projected animal lives with humans or in the wild.',
          left: 'Domestic (Farm & Home)',
          right: 'Wild (Forest & Jungle)'
        },
        videoTitle: 'Animal Habitats and Living Patterns',
        videoSubtitle: 'Understanding wildlife and farm companions',
        clipSteps: [
          {
            duration: 4,
            caption: 'Step 1: Domestic animals live peacefully with humans on farms and at home.',
            visualHtml: '<div class="text-center"><div class="text-6xl">🐄</div><div class="text-xs font-bold text-zinc-500 mt-1">Domestic: Cow (Provides milk)</div></div>'
          },
          {
            duration: 4,
            caption: 'Step 2: Other domestic friends include sheep, horses, and dogs.',
            visualHtml: '<div class="flex items-center gap-6 text-5xl"><span>🐑</span><span>🐕</span><span>🐎</span></div>'
          },
          {
            duration: 4,
            caption: 'Step 3: Wild animals live independently in natural forests and jungles.',
            visualHtml: '<div class="flex items-center gap-6 text-5xl"><span>🦁</span><span>🐘</span><span>🐅</span></div>'
          },
          {
            duration: 4,
            caption: 'Summary: We care for farm animals, while respecting wildlife in nature.',
            visualHtml: '<div class="surface-card px-6 py-4 rounded-xl text-lg font-bold">Farm Friends & Wildlife Habitats</div>'
          }
        ]
      }
    ]
  },
  {
    id: 'English',
    name: 'English Language',
    icon: 'fa-spell-check',
    topics: [
      {
        id: 'eng_phonics',
        title: 'Phonic Word Sounds',
        description: 'Associating letter sounds with common words.',
        taskPrompt: 'Which word begins with the sound /b/ as in Ball?',
        taskItems: ['Ball', 'Cat', 'Apple'],
        options: ['Ball', 'Cat', 'Apple'],
        correctAnswer: 'Ball',
        successMessage: 'Spot on! Ball begins with the letter B.',
        gameChallenge: {
          title: 'Phonics Chorus Call',
          instruction: 'Teacher pronounces the starting phoneme; the entire class responds in unison.',
          left: '/b/ Sound (Ball, Bat)',
          right: '/c/ Sound (Cat, Cup)'
        },
        videoTitle: 'Phonics & Pronunciation Practice',
        videoSubtitle: 'Auditory and visual letter-sound association',
        clipSteps: [
          {
            duration: 4,
            caption: 'Step 1: Today we listen to the letter B sound: /b/.',
            visualHtml: '<div class="text-7xl font-black">Bb</div>'
          },
          {
            duration: 4,
            caption: 'Step 2: /b/ as in B-A-L-L... Ball!',
            visualHtml: '<div class="text-center"><div class="text-6xl">⚽</div><div class="text-xl font-bold mt-1">/b/ - Ball</div></div>'
          },
          {
            duration: 4,
            caption: 'Step 3: /b/ as in B-A-T... Bat!',
            visualHtml: '<div class="text-center"><div class="text-6xl">🏏</div><div class="text-xl font-bold mt-1">/b/ - Bat</div></div>'
          },
          {
            duration: 4,
            caption: 'Summary: B says /b/. Repeat after your teacher: /b/, /b/, Ball!',
            visualHtml: '<div class="surface-card px-6 py-3 rounded-xl text-2xl font-black">Bb ➔ /b/ ➔ ⚽ 🏏</div>'
          }
        ]
      },
      {
        id: 'eng_action_words',
        title: 'Action Words (Verbs)',
        description: 'Connecting everyday movement verbs with physical demonstrations.',
        taskPrompt: 'Which word describes pushing off the ground with your feet into the air?',
        taskItems: ['Jump', 'Sleep', 'Read'],
        options: ['Jump', 'Sleep', 'Read'],
        correctAnswer: 'Jump',
        successMessage: 'Correct! Jumping is an action verb.',
        gameChallenge: {
          title: 'Classroom Action Simon Says',
          instruction: 'Teacher projects the action word; students demonstrate the physical movement safely.',
          left: 'Clap Hands',
          right: 'Stand Up'
        },
        videoTitle: 'Verbs in Action: Learn Through Movement',
        videoSubtitle: 'Demonstrating common physical actions',
        clipSteps: [
          {
            duration: 4,
            caption: 'Step 1: Action verbs describe what our bodies do in motion.',
            visualHtml: '<div class="text-5xl font-extrabold">Action Verbs</div>'
          },
          {
            duration: 4,
            caption: 'Step 2: Jump means pushing off the floor with both feet!',
            visualHtml: '<div class="text-center"><div class="text-6xl animate-bounce">🦘</div><div class="text-lg font-bold mt-1">JUMP</div></div>'
          },
          {
            duration: 4,
            caption: 'Step 3: Clap means bringing your hands together with a sound!',
            visualHtml: '<div class="text-center"><div class="text-6xl">👏</div><div class="text-lg font-bold mt-1">CLAP</div></div>'
          },
          {
            duration: 4,
            caption: 'Summary: Words that show action are called Action Verbs!',
            visualHtml: '<div class="surface-card px-6 py-3 rounded-xl text-xl font-bold">Jump • Clap • Run • Smile</div>'
          }
        ]
      }
    ]
  },
  {
    id: 'Kannada',
    name: 'Kannada (ಕನ್ನಡ)',
    icon: 'fa-language',
    topics: [
      {
        id: 'kan_swaragalu',
        title: 'ಕನ್ನಡ ಸ್ವರಗಳು (Kannada Vowels)',
        description: 'ಅಕ್ಷರ ಕಲಿಕೆ: ಸ್ವರಗಳ ಉಚ್ಚಾರಣೆ ಮತ್ತು ಚಿತ್ರ ಗುರುತಿಸುವಿಕೆ (Learning vowels with visual phonics).',
        taskPrompt: "ಕೆಳಗಿನ ಅಕ್ಷರಗಳಲ್ಲಿ 'ಅ' (ಅರಸ / ಅಮ್ಮ) ಅಕ್ಷರವನ್ನು ಗುರುತಿಸಿ:",
        taskItems: ['ಅ', 'ಆ', 'ಇ', 'ಈ'],
        options: ['ಅ', 'ಆ', 'ಇ'],
        correctAnswer: 'ಅ',
        successMessage: 'ಸರಿಯಾದ ಉತ್ತರ! ಅ - ಅರಸ (ಅಮ್ಮ). ಭೇಷ್! Excellent!',
        gameChallenge: {
          title: 'ಸ್ವರ ಜೋಡಿ ಸವಾಲು (Vowel Match Challenge)',
          instruction: 'ಶಿಕ್ಷಕರು ತರಗತಿಯನ್ನು ತಂಡಗಳಾಗಿ ವಿಂಗಡಿಸಿ: ಪರದೆಯ ಮೇಲಿನ ಚಿತ್ರಕ್ಕೆ ಸರಿಯಾದ ಅಕ್ಷರವನ್ನು ಗುರುತಿಸಿ.',
          left: 'ಅ - ಅರಸ (King) 👑',
          right: 'ಆ - ಆನೆ (Elephant) 🐘'
        },
        videoTitle: "ಕನ್ನಡ ಸ್ವರಮಾಲೆ: 'ಅ' ಮತ್ತು 'ಆ'",
        videoSubtitle: 'ಚಿತ್ರ ಮತ್ತು ಉಚ್ಚಾರಣೆಯೊಂದಿಗೆ ಅಕ್ಷರ ಕಲಿಕೆ',
        clipSteps: [
          {
            duration: 4,
            caption: 'ಮೊದಲ ಸ್ವರ ಅ: ಅ ದಿಂದ ಅರಸ ಮತ್ತು ಅಮ್ಮ.',
            visualHtml: '<div class="text-center"><div class="text-7xl font-bold mb-2">ಅ</div><div class="text-2xl font-semibold">ಅ = ಅರಸ 👑</div></div>'
          },
          {
            duration: 4,
            caption: 'ಎರಡನೇ ಸ್ವರ ಆ: ದೀರ್ಘ ಸ್ವರ ಆ, ಆನೆಯಂತೆ ದೊಡ್ಡದಾದ ಆನೆ!',
            visualHtml: '<div class="text-center"><div class="text-7xl font-bold mb-2">ಆ</div><div class="text-2xl font-semibold">ಆ = ಆನೆ 🐘</div></div>'
          },
          {
            duration: 4,
            caption: 'ಮೂರನೇ ಸ್ವರ ಇ: ಇ ದಿಂದ ಮುದ್ದಾದ ಇಲಿ.',
            visualHtml: '<div class="text-center"><div class="text-7xl font-bold mb-2">ಇ</div><div class="text-2xl font-semibold">ಇ = ಇಲಿ 🐭</div></div>'
          },
          {
            duration: 5,
            caption: 'ನಾಲ್ಕನೇ ಸ್ವರ ಈ: ಈ ದಿಂದ ನೀರಿನಲ್ಲಿ ಆಡುವ ಈಜು!',
            visualHtml: '<div class="surface-card px-6 py-4 rounded-xl text-center"><div class="text-3xl font-bold">ಅ • ಆ • ಇ • ಈ</div><div class="text-sm text-zinc-500 mt-2">ಅರಸ • ಆನೆ • ಇಲಿ • ಈಜು 🌟</div></div>'
          }
        ]
      },
      {
        id: 'kan_ankigalu',
        title: 'ಕನ್ನಡ ಅಂಕಿಗಳು (Kannada Numbers ೧–೫)',
        description: '೧ ರಿಂದ ೫ ರವರೆಗೆ ವಸ್ತುಗಳ ಎಣಿಕೆ ಮತ್ತು ಕನ್ನಡ ಅಂಕಿಗಳ ಪರಿಚಯ (Counting with Kannada numerals).',
        taskPrompt: 'ಪರದೆಯ ಮೇಲಿರುವ ಮಾವಿನ ಹಣ್ಣುಗಳನ್ನು ಎಣಿಸಿ. ಒಟ್ಟು ಎಷ್ಟು ಹಣ್ಣುಗಳಿವೆ? (೧, ೨, ೩)',
        taskItems: ['🥭', '🥭', '🥭'],
        options: ['೨ (ಎರಡು)', '೩ (ಮೂರು)', '೪ (ನಾಲ್ಕು)'],
        correctAnswer: '೩ (ಮೂರು)',
        successMessage: 'ಉತ್ತಮ! ಒಟ್ಟು ೩ (ಮೂರು) ಮಾವಿನ ಹಣ್ಣುಗಳಿವೆ!',
        gameChallenge: {
          title: 'ಅಂಕಿಗಳ ಎಣಿಕೆ ಸ್ಪರ್ಧೆ (Number Count Rally)',
          instruction: 'ತಂಡ A ಮತ್ತು ತಂಡ B: ಪರದೆಯ ಮೇಲಿನ ವಸ್ತುಗಳನ್ನು ಎಣಿಸಿ ಸರಿಯಾದ ಕನ್ನಡ ಅಂಕಿಯನ್ನು ಜೋರಾಗಿ ಹೇಳಿ.',
          left: '🥭 🥭 (೨ - ಎರಡು)',
          right: '🥭 🥭 🥭 🥭 (೪ - ನಾಲ್ಕು)'
        },
        videoTitle: 'ಕನ್ನಡ ಅಂಕಿಗಳ ಪರಿಚಯ (೧, ೨, ೩)',
        videoSubtitle: 'ಹಣ್ಣುಗಳನ್ನು ಎಣಿಸುತ್ತಾ ಕನ್ನಡ ಅಂಕಿಗಳನ್ನು ಕಲಿಯೋಣ',
        clipSteps: [
          {
            duration: 4,
            caption: 'ಒಂದು: ಒಂದು ಸುಂದರವಾದ ಕೆಂಪು ಸೇಬು. ಅಂಕಿ ೧.',
            visualHtml: '<div class="text-center"><div class="text-7xl font-black mb-2">೧</div><div class="text-3xl">🍎 (ಒಂದು)</div></div>'
          },
          {
            duration: 4,
            caption: 'ಎರಡು: ಎರಡು ರುಚಿಯಾದ ಮಾವಿನ ಹಣ್ಣುಗಳು. ಅಂಕಿ ೨.',
            visualHtml: '<div class="text-center"><div class="text-7xl font-black mb-2">೨</div><div class="text-3xl">🥭 🥭 (ಎರಡು)</div></div>'
          },
          {
            duration: 4,
            caption: 'ಮೂರು: ಮೂರು ಸಿಹಿಯಾದ ಬಾಳೆಹಣ್ಣುಗಳು. ಅಂಕಿ ೩.',
            visualHtml: '<div class="text-center"><div class="text-7xl font-black mb-2">೩</div><div class="text-3xl">🍌 🍌 🍌 (ಮೂರು)</div></div>'
          },
          {
            duration: 4,
            caption: 'ಅಭ್ಯಾಸ: ೧ ಒಂದು, ೨ ಎರಡು, ೩ ಮೂರು! ಎಲ್ಲರೂ ಒಟ್ಟಿಗೆ ಹೇಳಿ.',
            visualHtml: '<div class="surface-card px-8 py-4 rounded-xl text-3xl font-bold">೧ • ೨ • ೩ • ೪ • ೫ 🎯</div>'
          }
        ]
      },
      {
        id: 'kan_saralapadagalu',
        title: 'ಸರಳ ಪದಗಳು (Everyday Words)',
        description: 'ಮನೆ, ಮರ, ಹೂವು — ದೈನಂದಿನ ಸರಳ ಕನ್ನಡ ಪದಗಳ ಪರಿಚಯ.',
        taskPrompt: 'ನಾವು ಕುಟುಂಬದೊಂದಿಗೆ ಪ್ರೀತಿಯಿಂದ ವಾಸಿಸುವ ಸುಂದರವಾದ ಸ್ಥಳ ಯಾವುದು?',
        taskItems: ['🏠', '🌳', '🌸'],
        options: ['ಮನೆ (Home)', 'ಮರ (Tree)', 'ಹೂವು (Flower)'],
        correctAnswer: 'ಮನೆ (Home)',
        successMessage: 'ಸರಿಯಾದ ಉತ್ತರ! ನಾವು ವಾಸಿಸುವ ಸ್ಥಳ ಮನೆ 🏠.',
        gameChallenge: {
          title: 'ಚಿತ್ರ ಮತ್ತು ಪದ ಜೋಡಣೆ (Word Match Game)',
          instruction: 'ಶಿಕ್ಷಕರು ಚಿತ್ರ ತೋರಿಸಿದಾಗ ವಿದ್ಯಾರ್ಥಿಗಳು ಕನ್ನಡ ಪದವನ್ನು ಗುರುತಿಸುತ್ತಾರೆ.',
          left: '🌳 ಮರ (Tree)',
          right: '🌸 ಹೂವು (Flower)'
        },
        videoTitle: 'ನಮ್ಮ ಸುತ್ತಮುತ್ತಲಿನ ಸರಳ ಕನ್ನಡ ಪದಗಳು',
        videoSubtitle: 'ಚಿತ್ರಗಳ ಮೂಲಕ ಪದಗಳನ್ನು ಕಲಿಯುವ ವಿಧಾನ',
        clipSteps: [
          {
            duration: 4,
            caption: 'ಮನೆ: ನಾವು ಕುಟುಂಬದೊಂದಿಗೆ ನೆಮ್ಮದಿಯಿಂದ ವಾಸಿಸುವ ಸ್ಥಳ.',
            visualHtml: '<div class="text-center"><div class="text-6xl mb-2">🏠</div><div class="text-2xl font-bold">ಮನೆ (Home)</div></div>'
          },
          {
            duration: 4,
            caption: 'ಮರ: ನಮಗೆ ತಂಪಾದ ನೆರಳು ಮತ್ತು ಶುದ್ಧ ಗಾಳಿ ನೀಡುವ ಹಸಿರು ಮರ.',
            visualHtml: '<div class="text-center"><div class="text-6xl mb-2">🌳</div><div class="text-2xl font-bold">ಮರ (Tree)</div></div>'
          },
          {
            duration: 4,
            caption: 'ಹೂವು: ಸುಂದರ ಪರಿಮಳ ಬೀರುವ ರಂಗುರಂಗಿನ ಹೂವು.',
            visualHtml: '<div class="text-center"><div class="text-6xl mb-2">🌸</div><div class="text-2xl font-bold">ಹೂವು (Flower)</div></div>'
          },
          {
            duration: 4,
            caption: 'ಸಾರಾಂಶ: ಮನೆ, ಮರ, ಹೂವು — ನಿಸರ್ಗ ಮತ್ತು ನಮ್ಮ ಬದುಕು.',
            visualHtml: '<div class="surface-card px-6 py-4 rounded-xl text-xl font-bold">🏠 ಮನೆ • 🌳 ಮರ • 🌸 ಹೂವು</div>'
          }
        ]
      }
    ]
  }
];
