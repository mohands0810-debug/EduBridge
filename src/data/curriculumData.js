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
  }
];
