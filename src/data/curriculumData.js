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
        promptHi: 'स्क्रीन पर सेबों को गिनें। कुल मिलाकर कितने सेब हैं?',
        promptKn: 'ಪರದೆಯ ಮೇಲಿರುವ ಸೇಬುಗಳನ್ನು ಎಣಿಸಿ. ಒಟ್ಟು ಎಷ್ಟು ಸೇಬುಗಳಿವೆ?',
        taskItems: ['🍎', '🍎', '🍎', '🍎', '🍎'],
        options: ['3', '5', '7'],
        correctAnswer: '5',
        successMessage: 'Correct! There are exactly 5 apples.',
        questions: [
          {
            taskPrompt: 'Count the apples on the screen. How many are there in total?',
            promptHi: 'स्क्रीन पर सेबों को गिनें। कुल मिलाकर कितने सेब हैं?',
            promptKn: 'ಪರದೆಯ ಮೇಲಿರುವ ಸೇಬುಗಳನ್ನು ಎಣಿಸಿ. ಒಟ್ಟು ಎಷ್ಟು ಸೇಬುಗಳಿವೆ?',
            taskItems: ['🍎', '🍎', '🍎', '🍎', '🍎'],
            options: ['3', '5', '7'],
            correctAnswer: '5',
            successMessage: 'Correct! There are exactly 5 apples.',
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
            taskPrompt: 'How many shiny stars are in the sky? Tap each one to count!',
            promptHi: 'आसमान में कितने चमकदार तारे हैं? गिनने के लिए टैप करें!',
            promptKn: 'ಆಕಾಶದಲ್ಲಿ ಎಷ್ಟು ಹೊಳೆಯುವ ನಕ್ಷತ್ರಗಳಿವೆ? ಎಣಿಸಲು ಟ್ಯಾಪ್ ಮಾಡಿ!',
            taskItems: ['⭐', '⭐', '⭐'],
            options: ['2', '3', '4'],
            correctAnswer: '3',
            successMessage: 'Awesome! There are 3 bright stars.',
            clipSteps: [
              {
                duration: 4,
                caption: 'Step 1: Look high up into the evening sky. Here is 1 shining star.',
                visualHtml: '<div class="text-6xl animate-pulse">⭐</div>'
              },
              {
                duration: 4,
                caption: 'Step 2: Now 2 more bright stars twinkle next to it!',
                visualHtml: '<div class="flex items-center gap-4 text-5xl"><span>⭐</span><span class="text-3xl text-zinc-400 font-bold">+</span><span>⭐</span><span>⭐</span></div>'
              },
              {
                duration: 4,
                caption: 'Step 3: Count them together: 1, 2, 3 twinkling stars in total!',
                visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black tracking-tight">⭐ ⭐ ⭐ = 3 Stars!</div>'
              }
            ]
          },
          {
            taskPrompt: 'Count the sweet strawberries on the table. How many do you see?',
            promptHi: 'मेज़ पर रखी मीठी स्ट्रॉबेरी को गिनें। कुल कितनी हैं?',
            promptKn: 'ಮೇಜಿನ ಮೇಲಿರುವ ಸ್ಟ್ರಾಬೆರಿಗಳನ್ನು ಎಣಿಸಿ. ಎಷ್ಟು ಹಣ್ಣುಗಳಿವೆ?',
            taskItems: ['🍓', '🍓', '🍓', '🍓', '🍓', '🍓'],
            options: ['4', '6', '8'],
            correctAnswer: '6',
            successMessage: 'Wonderful! Exactly 6 delicious strawberries.',
            clipSteps: [
              {
                duration: 4,
                caption: 'Step 1: Here are 3 sweet red strawberries in a row.',
                visualHtml: '<div class="flex items-center gap-3 text-5xl animate-bounce"><span>🍓</span><span>🍓</span><span>🍓</span></div>'
              },
              {
                duration: 4,
                caption: 'Step 2: Let us pick 3 more fresh strawberries from the garden.',
                visualHtml: '<div class="flex items-center gap-3 text-5xl"><span>🍓</span><span>🍓</span><span>🍓</span><span class="text-2xl text-zinc-400 font-bold">+</span><span>🍓</span><span>🍓</span><span>🍓</span></div>'
              },
              {
                duration: 5,
                caption: 'Step 3: Three plus three equals six sweet strawberries!',
                visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black tracking-tight">3 + 3 = 6 🍓</div>'
              }
            ]
          },
          {
            taskPrompt: 'Count the yellow bananas in the fruit bowl. How many are there?',
            promptHi: 'फलों के कटोरे में कितने पीले केले हैं?',
            promptKn: 'ಹಣ್ಣಿನ ಬುಟ್ಟಿಯಲ್ಲಿ ಎಷ್ಟು ಹಳದಿ ಬಾಳೆಹಣ್ಣುಗಳಿವೆ?',
            taskItems: ['🍌', '🍌', '🍌', '🍌'],
            options: ['3', '4', '5'],
            correctAnswer: '4',
            successMessage: 'Spot on! There are 4 bananas.',
            clipSteps: [
              {
                duration: 4,
                caption: 'Step 1: We place 2 ripe bananas into the bowl.',
                visualHtml: '<div class="flex items-center gap-3 text-5xl"><span>🍌</span><span>🍌</span></div>'
              },
              {
                duration: 4,
                caption: 'Step 2: We add 2 more ripe bananas beside them.',
                visualHtml: '<div class="flex items-center gap-3 text-5xl"><span>🍌</span><span>🍌</span><span class="text-2xl text-zinc-400 font-bold">+</span><span>🍌</span><span>🍌</span></div>'
              },
              {
                duration: 4,
                caption: 'Step 3: Two plus two equals four ripe bananas!',
                visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black tracking-tight">2 + 2 = 4 🍌</div>'
              }
            ]
          }
        ],
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
        promptHi: 'किस आकार की 4 समान सीधी भुजाएं होती हैं?',
        promptKn: 'ಯಾವ ಆಕಾರವು 4 ಸಮಾನ ನೇರ ಬದಿಗಳನ್ನು ಹೊಂದಿದೆ?',
        taskItems: ['Square', 'Circle', 'Triangle'],
        options: ['Square', 'Circle', 'Triangle'],
        correctAnswer: 'Square',
        successMessage: 'Correct! A square has 4 equal straight sides.',
        questions: [
          {
            taskPrompt: 'Which shape has 4 straight sides of equal length?',
            promptHi: 'किस आकार की 4 समान सीधी भुजाएं होती हैं?',
            promptKn: 'ಯಾವ ಆಕಾರವು 4 ಸಮಾನ ನೇರ ಬದಿಗಳನ್ನು ಹೊಂದಿದೆ?',
            taskItems: ['Square', 'Circle', 'Triangle'],
            options: ['Square', 'Circle', 'Triangle'],
            correctAnswer: 'Square',
            successMessage: 'Correct! A square has 4 equal straight sides.',
            clipSteps: [
              {
                duration: 4,
                caption: 'Step 1: Look at the four straight sides: top, right, bottom, and left.',
                visualHtml: '<div class="w-24 h-24 border-4 border-zinc-900 dark:border-zinc-100 flex items-center justify-center font-bold text-xs uppercase tracking-wider animate-pulse">4 Equal Sides</div>'
              },
              {
                duration: 4,
                caption: 'Step 2: When all four sides are identical, it is a Square!',
                visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black">Square 🟩</div>'
              }
            ]
          },
          {
            taskPrompt: 'Which shape is completely round with zero corners?',
            promptHi: 'कौन सा आकार पूरी तरह गोल होता है जिसमें कोई कोना नहीं होता?',
            promptKn: 'ಯಾವ ಆಕಾರವು ಸಂಪೂರ್ಣ ದುಂಡಾಗಿದ್ದು ಯಾವುದೇ ಮೂಲೆಗಳನ್ನು ಹೊಂದಿಲ್ಲ?',
            taskItems: ['Circle', 'Square', 'Triangle'],
            options: ['Circle', 'Square', 'Triangle'],
            correctAnswer: 'Circle',
            successMessage: 'Great! A circle is completely round like a clock or wheel.',
            clipSteps: [
              {
                duration: 4,
                caption: 'Step 1: Notice how this line curves all the way around with zero sharp corners.',
                visualHtml: '<div class="w-24 h-24 rounded-full border-4 border-zinc-900 dark:border-zinc-100 flex items-center justify-center font-bold text-xs uppercase tracking-wider animate-spin" style="animation-duration: 6s;">Circle</div>'
              },
              {
                duration: 4,
                caption: 'Step 2: A wheel, a coin, and a clock are all Circles!',
                visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black">Circle ⚪ 🪙 ⏰</div>'
              }
            ]
          },
          {
            taskPrompt: 'Which shape has exactly 3 straight sides and 3 sharp corners?',
            promptHi: 'किस आकार की 3 सीधी भुजाएं और 3 कोने होते हैं?',
            promptKn: 'ಯಾವ ಆಕಾರವು 3 ನೇರ ಬದಿಗಳು ಮತ್ತು 3 ಮೂಲೆಗಳನ್ನು ಹೊಂದಿದೆ?',
            taskItems: ['Triangle', 'Square', 'Circle'],
            options: ['Triangle', 'Square', 'Circle'],
            correctAnswer: 'Triangle',
            successMessage: 'Excellent! Triangles have 3 sides, like a slice of pizza.',
            clipSteps: [
              {
                duration: 4,
                caption: 'Step 1: Count the straight edges: one, two, three!',
                visualHtml: '<div class="text-7xl font-black animate-bounce">🔺</div>'
              },
              {
                duration: 4,
                caption: 'Step 2: Exactly 3 sides and 3 corners make a Triangle!',
                visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black">Triangle 🔺 🍕</div>'
              }
            ]
          }
        ],
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
        promptHi: 'इस क्रम में आगे क्या आएगा: लाल, नीला, लाल, अगला क्या?',
        promptKn: 'ಈ ಕ್ರಮದಲ್ಲಿ ಮುಂದಿನ ಬಣ್ಣ ಯಾವುದು: ಕೆಂಪು, ನೀಲಿ, ಕೆಂಪು, ನಂತರ ಯಾವುದು?',
        taskItems: ['🔴 Red', '🔵 Blue', '🔴 Red', '❓ Next'],
        options: ['Blue', 'Red', 'Green'],
        correctAnswer: 'Blue',
        successMessage: 'Great work! The sequence continues with Blue.',
        questions: [
          {
            taskPrompt: 'What comes next in the sequence: Red ➔ Blue ➔ Red ➔ ?',
            promptHi: 'इस क्रम में आगे क्या आएगा: लाल, नीला, लाल, अगला क्या?',
            promptKn: 'ಈ ಕ್ರಮದಲ್ಲಿ ಮುಂದಿನ ಬಣ್ಣ ಯಾವುದು: ಕೆಂಪು, ನೀಲಿ, ಕೆಂಪು, ನಂತರ ಯಾವುದು?',
            taskItems: ['🔴 Red', '🔵 Blue', '🔴 Red', '❓ Next'],
            options: ['Blue', 'Red', 'Green'],
            correctAnswer: 'Blue',
            successMessage: 'Great work! The sequence continues with Blue.'
          },
          {
            taskPrompt: 'Complete the celestial rhythm: Sun ➔ Moon ➔ Sun ➔ ?',
            promptHi: 'क्रम पूरा करें: सूरज, चाँद, सूरज, अगला क्या?',
            promptKn: 'ಕ್ರಮವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ: ಸೂರ್ಯ, ಚಂದ್ರ, ಸೂರ್ಯ, ನಂತರ ಯಾವುದು?',
            taskItems: ['☀️ Sun', '🌙 Moon', '☀️ Sun', '❓ Next'],
            options: ['Moon', 'Sun', 'Star'],
            correctAnswer: 'Moon',
            successMessage: 'Correct! Sun followed by Moon.'
          },
          {
            taskPrompt: 'What fruit comes next: Apple ➔ Banana ➔ Apple ➔ ?',
            promptHi: 'अगला फल कौन सा आएगा: सेब, केला, सेब, अगला क्या?',
            promptKn: 'ಮುಂದಿನ ಹಣ್ಣು ಯಾವುದು: ಸೇಬು, ಬಾಳೆಹಣ್ಣು, ಸೇಬು, ನಂತರ ಯಾವುದು?',
            taskItems: ['🍎 Apple', '🍌 Banana', '🍎 Apple', '❓ Next'],
            options: ['Banana', 'Apple', 'Orange'],
            correctAnswer: 'Banana',
            successMessage: 'Terrific! Apple and Banana repeat in harmony.'
          }
        ],
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
        promptHi: 'पौधे का कौन सा भाग मिट्टी के नीचे बढ़ता है और पानी सोखता है?',
        promptKn: 'ಸಸ್ಯದ ಯಾವ ಭಾಗವು ನೆಲದ ಕೆಳಗೆ ಬೆಳೆದು ನೀರನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತದೆ?',
        taskItems: ['Roots (Underground)', 'Leaves (Green)', 'Flower (Bloom)'],
        options: ['Roots', 'Leaves', 'Flower'],
        correctAnswer: 'Roots',
        successMessage: 'Correct! Roots grow below the soil to absorb water and nutrients.',
        questions: [
          {
            taskPrompt: 'Which part of the plant anchors it underground and absorbs water?',
            promptHi: 'पौधे का कौन सा भाग मिट्टी के नीचे बढ़ता है और पानी सोखता है?',
            promptKn: 'ಸಸ್ಯದ ಯಾವ ಭಾಗವು ನೆಲದ ಕೆಳಗೆ ಬೆಳೆದು ನೀರನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತದೆ?',
            taskItems: ['Roots (Underground)', 'Leaves (Green)', 'Flower (Bloom)'],
            options: ['Roots', 'Leaves', 'Flower'],
            correctAnswer: 'Roots',
            successMessage: 'Correct! Roots grow below the soil to absorb water and nutrients.'
          },
          {
            taskPrompt: 'Which green part of the plant catches sunlight to prepare food?',
            promptHi: 'पौधे की कौन सी हरी पत्तियां धूप से भोजन बनाती हैं?',
            promptKn: 'ಸಸ್ಯದ ಯಾವ ಹಸಿರು ಭಾಗವು ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ಆಹಾರ ತಯಾರಿಸುತ್ತದೆ?',
            taskItems: ['Leaves', 'Roots', 'Stem'],
            options: ['Leaves', 'Roots', 'Stem'],
            correctAnswer: 'Leaves',
            successMessage: 'Spot on! Leaves are the food factories of plants.'
          },
          {
            taskPrompt: 'Which colorful part of the plant blooms and produces seeds?',
            promptHi: 'पौधे का कौन सा सुंदर भाग खिलता है और बीज बनाता है?',
            promptKn: 'ಸಸ್ಯದ ಯಾವ ಸುಂದರ ಬಣ್ಣದ ಭಾಗವು ಅರಳಿ ಬೀಜಗಳನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ?',
            taskItems: ['Flower', 'Roots', 'Branches'],
            options: ['Flower', 'Roots', 'Branches'],
            correctAnswer: 'Flower',
            successMessage: 'Beautiful! Flowers attract butterflies and make seeds.'
          }
        ],
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
        promptHi: 'इनमें से कौन सा पालतू जानवर है जो खेतों या घरों में रहता है?',
        promptKn: 'ಇವುಗಳಲ್ಲಿ ತೋಟ ಅಥವಾ ಮನೆಗಳಲ್ಲಿ ವಾಸಿಸುವ ಸಾಕುಪ್ರಾಣಿ ಯಾವುದು?',
        taskItems: ['Cow (Farm)', 'Lion (Jungle)', 'Elephant (Forest)'],
        options: ['Cow', 'Lion', 'Elephant'],
        correctAnswer: 'Cow',
        successMessage: 'Correct! Cows are domestic farm animals.',
        questions: [
          {
            taskPrompt: 'Which of these is a domestic animal that lives on farms?',
            promptHi: 'इनमें से कौन सा पालतू जानवर है जो खेतों या घरों में रहता है?',
            promptKn: 'ಇವುಗಳಲ್ಲಿ ತೋಟ ಅಥವಾ ಮನೆಗಳಲ್ಲಿ ವಾಸಿಸುವ ಸಾಕುಪ್ರಾಣಿ ಯಾವುದು?',
            taskItems: ['Cow (Farm)', 'Lion (Jungle)', 'Elephant (Forest)'],
            options: ['Cow', 'Lion', 'Elephant'],
            correctAnswer: 'Cow',
            successMessage: 'Correct! Cows are domestic farm animals.'
          },
          {
            taskPrompt: 'Which powerful wild animal is known as the King of the Jungle?',
            promptHi: 'किस शक्तिशाली जंगली जानवर को जंगल का राजा कहा जाता है?',
            promptKn: 'ಯಾವ ಬಲಿಷ್ಠ ಕಾಡು ಪ್ರಾಣಿಯನ್ನು ಕಾಡಿನ ರಾಜ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ?',
            taskItems: ['Lion (Jungle)', 'Dog (Home)', 'Sheep (Farm)'],
            options: ['Lion', 'Dog', 'Sheep'],
            correctAnswer: 'Lion',
            successMessage: 'Roar! The lion is the majestic King of the Jungle.'
          },
          {
            taskPrompt: 'Which friendly domestic animal barks and guards our houses?',
            promptHi: 'कौन सा पालतू जानवर भौंकता है और हमारे घर की रखवाली करता है?',
            promptKn: 'ಯಾವ ಸ್ನೇಹಪರ ಸಾಕುಪ್ರಾಣಿಯು ಬೊಗಳಿ ನಮ್ಮ ಮನೆಯನ್ನು ಕಾಯುತ್ತದೆ?',
            taskItems: ['Dog', 'Tiger', 'Wolf'],
            options: ['Dog', 'Tiger', 'Wolf'],
            correctAnswer: 'Dog',
            successMessage: 'Good job! Dogs are loyal domestic companions.'
          }
        ],
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
        promptHi: 'कौन सा शब्द /ब/ ध्वनि से शुरू होता है जैसे बॉल या बैट?',
        promptKn: 'ಯಾವ ಪದವು /ಬ/ ಶಬ್ದದಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಉದಾಹರಣೆಗೆ ಬಾಲ್ ಅಥವಾ ಬ್ಯಾಟ್?',
        taskItems: ['Ball', 'Cat', 'Apple'],
        options: ['Ball', 'Cat', 'Apple'],
        correctAnswer: 'Ball',
        successMessage: 'Spot on! Ball begins with the letter B.',
        questions: [
          {
            taskPrompt: 'Which word begins with the sound /b/ as in Ball?',
            promptHi: 'कौन सा शब्द /ब/ ध्वनि से शुरू होता है जैसे बॉल या बैट?',
            promptKn: 'ಯಾವ ಪದವು /ಬ/ ಶಬ್ದದಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಉದಾಹರಣೆಗೆ ಬಾಲ್ ಅಥವಾ ಬ್ಯಾಟ್?',
            taskItems: ['Ball', 'Cat', 'Apple'],
            options: ['Ball', 'Cat', 'Apple'],
            correctAnswer: 'Ball',
            successMessage: 'Spot on! Ball begins with the letter B.'
          },
          {
            taskPrompt: 'Which word begins with the sound /k/ as in Cat or Cup?',
            promptHi: 'कौन सा शब्द /क/ ध्वनि से शुरू होता है जैसे कैट या कप?',
            promptKn: 'ಯಾವ ಪದವು /ಕ/ ಶಬ್ದದಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಉದಾಹರಣೆಗೆ ಕ್ಯಾಟ್ ಅಥವಾ ಕಪ್?',
            taskItems: ['Cat', 'Dog', 'Fish'],
            options: ['Cat', 'Dog', 'Fish'],
            correctAnswer: 'Cat',
            successMessage: 'Purr-fect! Cat starts with the /k/ sound.'
          },
          {
            taskPrompt: 'Which word begins with the sound /s/ as in Sun?',
            promptHi: 'कौन सा शब्द /स/ ध्वनि से शुरू होता है जैसे सन?',
            promptKn: 'ಯಾವ ಪದವು /ಸ/ ಶಬ್ದದಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಉದಾಹರಣೆಗೆ ಸನ್?',
            taskItems: ['Sun', 'Moon', 'Tree'],
            options: ['Sun', 'Moon', 'Tree'],
            correctAnswer: 'Sun',
            successMessage: 'Super! Sun starts with the sunny /s/ sound.'
          }
        ],
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
        promptHi: 'कौन सा शब्द जमीन से हवा में कूदने की क्रिया को दर्शाता है?',
        promptKn: 'ನೆಲದಿಂದ ಮೇಲಕ್ಕೆ ಹಾರುವ ಕ್ರಿಯೆಯನ್ನು ಯಾವ ಪದವು ಸೂಚಿಸುತ್ತದೆ?',
        taskItems: ['Jump', 'Sleep', 'Read'],
        options: ['Jump', 'Sleep', 'Read'],
        correctAnswer: 'Jump',
        successMessage: 'Correct! Jumping is an action verb.',
        questions: [
          {
            taskPrompt: 'Which word describes pushing off the ground with your feet into the air?',
            promptHi: 'कौन सा शब्द जमीन से हवा में कूदने की क्रिया को दर्शाता है?',
            promptKn: 'ನೆಲದಿಂದ ಮೇಲಕ್ಕೆ ಹಾರುವ ಕ್ರಿಯೆಯನ್ನು ಯಾವ ಪದವು ಸೂಚಿಸುತ್ತದೆ?',
            taskItems: ['Jump', 'Sleep', 'Read'],
            options: ['Jump', 'Sleep', 'Read'],
            correctAnswer: 'Jump',
            successMessage: 'Correct! Jumping is an action verb.'
          },
          {
            taskPrompt: 'Which action word means bringing your hands together with a sound?',
            promptHi: 'हाथों को एक साथ लाकर आवाज़ करने को क्या कहते हैं?',
            promptKn: 'ಎರಡೂ ಕೈಗಳನ್ನು ಒಟ್ಟಿಗೆ ಜೋಡಿಸಿ ಶಬ್ದ ಮಾಡುವ ಕ್ರಿಯೆ ಯಾವುದು?',
            taskItems: ['Clap', 'Sit', 'Eat'],
            options: ['Clap', 'Sit', 'Eat'],
            correctAnswer: 'Clap',
            successMessage: 'Clap, clap! Clapping is an energetic action verb.'
          },
          {
            taskPrompt: 'Which action word means moving your feet quickly to run and race?',
            promptHi: 'तेज़ी से दौड़ने को कौन सा क्रिया शब्द दर्शाता है?',
            promptKn: 'ವೇಗವಾಗಿ ಓಡುವ ಕ್ರಿಯೆಯನ್ನು ಯಾವ ಪದವು ಸೂಚಿಸುತ್ತದೆ?',
            taskItems: ['Run', 'Sleep', 'Draw'],
            options: ['Run', 'Sleep', 'Draw'],
            correctAnswer: 'Run',
            successMessage: 'Great! Running is moving with rapid speed.'
          }
        ],
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
        promptHi: "नीचे दिए गए अक्षरों में 'ಅ' (ಅರಸ / ಅಮ್ಮ) को पहचानें:",
        promptKn: "ಕೆಳಗಿನ ಅಕ್ಷರಗಳಲ್ಲಿ 'ಅ' (ಅರಸ / ಅಮ್ಮ) ಅಕ್ಷರವನ್ನು ಗುರುತಿಸಿ:",
        taskItems: ['ಅ', 'ಆ', 'ಇ', 'ಈ'],
        options: ['ಅ', 'ಆ', 'ಇ'],
        correctAnswer: 'ಅ',
        successMessage: 'ಸರಿಯಾದ ಉತ್ತರ! ಅ - ಅರಸ (ಅಮ್ಮ). ಭೇಷ್! Excellent!',
        questions: [
          {
            taskPrompt: "ಕೆಳಗಿನ ಅಕ್ಷರಗಳಲ್ಲಿ 'ಅ' (ಅರಸ / ಅಮ್ಮ) ಅಕ್ಷರವನ್ನು ಗುರುತಿಸಿ:",
            promptHi: "नीचे दिए गए अक्षरों में 'ಅ' (ಅರಸ / ಅಮ್ಮ) को पहचानें:",
            promptKn: "ಕೆಳಗಿನ ಅಕ್ಷರಗಳಲ್ಲಿ 'ಅ' (ಅರಸ / ಅಮ್ಮ) ಅಕ್ಷರವನ್ನು ಗುರುತಿಸಿ:",
            taskItems: ['ಅ', 'ಆ', 'ಇ', 'ಈ'],
            options: ['ಅ', 'ಆ', 'ಇ'],
            correctAnswer: 'ಅ',
            successMessage: 'ಸರಿಯಾದ ಉತ್ತರ! ಅ - ಅರಸ (ಅಮ್ಮ). ಭೇಷ್!'
          },
          {
            taskPrompt: "ದೊಡ್ಡದಾದ ಆನೆಯ 'ಆ' ಅಕ್ಷರ ಯಾವುದು?",
            promptHi: "हाथी (ಆನೆ) का पहला अक्षर 'ಆ' कौन सा है?",
            promptKn: "ದೊಡ್ಡದಾದ ಆನೆಯ 'ಆ' ಅಕ್ಷರ ಯಾವುದು?",
            taskItems: ['ಆ', 'ಅ', 'ಉ'],
            options: ['ಆ', 'ಅ', 'ಉ'],
            correctAnswer: 'ಆ',
            successMessage: 'ಉತ್ತಮ! ಆ - ಆನೆ 🐘 (Elephant).'
          },
          {
            taskPrompt: "ಮುದ್ದಾದ ಇಲಿಯ 'ಇ' ಅಕ್ಷರವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ:",
            promptHi: "चूहे (ಇಲಿ) का पहला अक्षर 'ಇ' चुनें:",
            promptKn: "ಮುದ್ದಾದ ಇಲಿಯ 'ಇ' ಅಕ್ಷರವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ:",
            taskItems: ['ಇ', 'ಈ', 'ಎ'],
            options: ['ಇ', 'ಈ', 'ಎ'],
            correctAnswer: 'ಇ',
            successMessage: 'ಭೇಷ್! ಇ - ಇಲಿ 🐭 (Mouse).'
          },
          {
            taskPrompt: "ನೀರಿನಲ್ಲಿ ಈಜುವ 'ಈ' ಅಕ್ಷರ ಯಾವುದು?",
            promptHi: "तैरने (ಈಜು) का अक्षर 'ಈ' कौन सा है?",
            promptKn: "ನೀರಿನಲ್ಲಿ ಈಜುವ 'ಈ' ಅಕ್ಷರ ಯಾವುದು?",
            taskItems: ['ಈ', 'ಇ', 'ಐ'],
            options: ['ಈ', 'ಇ', 'ಐ'],
            correctAnswer: 'ಈ',
            successMessage: 'ಅದ್ಭುತ! ಈ - ಈಜು 🏊.'
          }
        ],
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
        promptHi: 'स्क्रीन पर आमों को गिनें। कुल कितने हैं?',
        promptKn: 'ಪರದೆಯ ಮೇಲಿರುವ ಮಾವಿನ ಹಣ್ಣುಗಳನ್ನು ಎಣಿಸಿ. ಒಟ್ಟು ಎಷ್ಟು ಹಣ್ಣುಗಳಿವೆ?',
        taskItems: ['🥭', '🥭', '🥭'],
        options: ['೨ (ಎರಡು)', '೩ (ಮೂರು)', '೪ (ನಾಲ್ಕು)'],
        correctAnswer: '೩ (ಮೂರು)',
        successMessage: 'ಉತ್ತಮ! ಒಟ್ಟು ೩ (ಮೂರು) ಮಾವಿನ ಹಣ್ಣುಗಳಿವೆ!',
        questions: [
          {
            taskPrompt: 'ಪರದೆಯ ಮೇಲಿರುವ ಮಾವಿನ ಹಣ್ಣುಗಳನ್ನು ಎಣಿಸಿ. ಒಟ್ಟು ಎಷ್ಟು ಹಣ್ಣುಗಳಿವೆ?',
            promptHi: 'स्क्रीन पर आमों को गिनें। कुल कितने हैं?',
            promptKn: 'ಪರದೆಯ ಮೇಲಿರುವ ಮಾವಿನ ಹಣ್ಣುಗಳನ್ನು ಎಣಿಸಿ. ಒಟ್ಟು ಎಷ್ಟು ಹಣ್ಣುಗಳಿವೆ?',
            taskItems: ['🥭', '🥭', '🥭'],
            options: ['೨ (ಎರಡು)', '೩ (ಮೂರು)', '೪ (ನಾಲ್ಕು)'],
            correctAnswer: '೩ (ಮೂರು)',
            successMessage: 'ಉತ್ತಮ! ಒಟ್ಟು ೩ (ಮೂರು) ಮಾವಿನ ಹಣ್ಣುಗಳಿವೆ!',
            clipSteps: [
              {
                duration: 4,
                caption: 'ಹಂತ ೧: ಪರದೆಯ ಮೇಲಿನ ೩ ಮಾವಿನ ಹಣ್ಣುಗಳನ್ನು ಎಣಿಸೋಣ.',
                visualHtml: '<div class="flex gap-4 text-6xl justify-center animate-bounce"><span>🥭</span><span>🥭</span><span>🥭</span></div>'
              },
              {
                duration: 4,
                caption: 'ಹಂತ ೨: ಒಂದು, ಎರಡು, ಮೂರು: ಒಟ್ಟು ೩ ಮಾವಿನ ಹಣ್ಣುಗಳು!',
                visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black text-center">೩ (ಮೂರು) 🥭</div>'
              }
            ]
          },
          {
            taskPrompt: 'ಪರದೆಯ ಮೇಲಿರುವ ಕೆಂಪು ಸೇಬುಗಳನ್ನು ಎಣಿಸಿ:',
            promptHi: 'स्क्रीन पर लाल सेबों को गिनें:',
            promptKn: 'ಪರದೆಯ ಮೇಲಿರುವ ಕೆಂಪು ಸೇಬುಗಳನ್ನು ಎಣಿಸಿ:',
            taskItems: ['🍎', '🍎'],
            options: ['೧ (ಒಂದು)', '೨ (ಎರಡು)', '೩ (ಮೂರು)'],
            correctAnswer: '೨ (ಎರಡು)',
            successMessage: 'ಸರಿಯಾಗಿದೆ! ೨ (ಎರಡು) ಸೇಬುಗಳು 🍎🍎.',
            clipSteps: [
              {
                duration: 4,
                caption: 'ಹಂತ ೧: ಮೇಜಿನ ಮೇಲಿರುವ ೨ ಕೆಂಪು ಸೇಬುಗಳು.',
                visualHtml: '<div class="flex gap-4 text-6xl justify-center"><span>🍎</span><span>🍎</span></div>'
              },
              {
                duration: 4,
                caption: 'ಹಂತ ೨: ಒಂದು ಮತ್ತು ಎರಡು: ಒಟ್ಟು ೨ ಸೇಬುಗಳು!',
                visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black text-center">೨ (ಎರಡು) 🍎</div>'
              }
            ]
          },
          {
            taskPrompt: 'ಪರದೆಯ ಮೇಲಿರುವ ಹಳದಿ ಬಾಳೆಹಣ್ಣುಗಳನ್ನು ಎಣಿಸಿ:',
            promptHi: 'स्क्रीन पर केलों को गिनें:',
            promptKn: 'ಪರದೆಯ ಮೇಲಿರುವ ಹಳದಿ ಬಾಳೆಹಣ್ಣುಗಳನ್ನು ಎಣಿಸಿ:',
            taskItems: ['🍌', '🍌', '🍌', '🍌'],
            options: ['೩ (ಮೂರು)', '೪ (ನಾಲ್ಕು)', '೫ (ಐದು)'],
            correctAnswer: '೪ (ನಾಲ್ಕು)',
            successMessage: 'ಅತ್ಯುತ್ತಮ! ೪ (ನಾಲ್ಕು) ಬಾಳೆಹಣ್ಣುಗಳು 🍌🍌🍌🍌.',
            clipSteps: [
              {
                duration: 4,
                caption: 'ಹಂತ ೧: ಹಣ್ಣಿನ ಬುಟ್ಟಿಯಲ್ಲಿರುವ ೪ ಹಳದಿ ಬಾಳೆಹಣ್ಣುಗಳು.',
                visualHtml: '<div class="flex gap-3 text-5xl justify-center animate-pulse"><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span></div>'
              },
              {
                duration: 4,
                caption: 'ಹಂತ ೨: ಒಂದು, ಎರಡು, ಮೂರು, ನಾಲ್ಕು: ಒಟ್ಟು ೪ ಬಾಳೆಹಣ್ಣುಗಳು!',
                visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black text-center">೪ (ನಾಲ್ಕು) 🍌</div>'
              }
            ]
          },
          {
            taskPrompt: 'ಆಕಾಶದಲ್ಲಿ ಬೆಳಗುವ ಪ್ರಕಾಶಮಾನ ಸೂರ್ಯ ಎಷ್ಟು ಜನರಿದ್ದಾರೆ?',
            promptHi: 'आसमान में कितने सूरज चमक रहे हैं?',
            promptKn: 'ಆಕಾಶದಲ್ಲಿ ಬೆಳಗುವ ಪ್ರಕಾಶಮಾನ ಸೂರ್ಯ ಎಷ್ಟು ಜನರಿದ್ದಾರೆ?',
            taskItems: ['☀️'],
            options: ['೧ (ಒಂದು)', '೨ (ಎರಡು)', '೪ (ನಾಲ್ಕು)'],
            correctAnswer: '೧ (ಒಂದು)',
            successMessage: 'ಭೇಷ್! ೧ (ಒಂದು) ಪ್ರಕಾಶಮಾನ ಸೂರ್ಯ ☀️.',
            clipSteps: [
              {
                duration: 4,
                caption: 'ಹಂತ ೧: ಆಕಾಶದಲ್ಲಿ ಹೊಳೆಯುವ ಒಂದು ಪ್ರಕಾಶಮಾನ ಸೂರ್ಯ.',
                visualHtml: '<div class="text-7xl animate-spin text-center" style="animation-duration: 10s;">☀️</div>'
              },
              {
                duration: 4,
                caption: 'ಹಂತ ೨: ಕೇವಲ ೧ ಪ್ರಕಾಶಮಾನ ಸೂರ್ಯ!',
                visualHtml: '<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black text-center">೧ (ಒಂದು) ☀️</div>'
              }
            ]
          }
        ],
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
        promptHi: 'हम परिवार के साथ जिस सुंदर घर में रहते हैं वह कौन सा है?',
        promptKn: 'ನಾವು ಕುಟುಂಬದೊಂದಿಗೆ ಪ್ರೀತಿಯಿಂದ ವಾಸಿಸುವ ಸುಂದರವಾದ ಸ್ಥಳ ಯಾವುದು?',
        taskItems: ['🏠', '🌳', '🌸'],
        options: ['ಮನೆ (Home)', 'ಮರ (Tree)', 'ಹೂವು (Flower)'],
        correctAnswer: 'ಮನೆ (Home)',
        successMessage: 'ಸರಿಯಾದ ಉತ್ತರ! ನಾವು ವಾಸಿಸುವ ಸ್ಥಳ ಮನೆ 🏠.',
        questions: [
          {
            taskPrompt: 'ನಾವು ಕುಟುಂಬದೊಂದಿಗೆ ಪ್ರೀತಿಯಿಂದ ವಾಸಿಸುವ ಸುಂದರವಾದ ಸ್ಥಳ ಯಾವುದು?',
            promptHi: 'हम परिवार के साथ जिस सुंदर घर में रहते हैं वह कौन सा है?',
            promptKn: 'ನಾವು ಕುಟುಂಬದೊಂದಿಗೆ ಪ್ರೀತಿಯಿಂದ ವಾಸಿಸುವ ಸುಂದರವಾದ ಸ್ಥಳ ಯಾವುದು?',
            taskItems: ['🏠', '🌳', '🌸'],
            options: ['ಮನೆ (Home)', 'ಮರ (Tree)', 'ಹೂವು (Flower)'],
            correctAnswer: 'ಮನೆ (Home)',
            successMessage: 'ಸರಿಯಾದ ಉತ್ತರ! ನಾವು ವಾಸಿಸುವ ಸ್ಥಳ ಮನೆ 🏠.'
          },
          {
            taskPrompt: 'ನಮಗೆ ತಂಪಾದ ನೆರಳು ಮತ್ತು ಶುದ್ಧ ಗಾಳಿ ನೀಡುವ ನಿಸರ್ಗದ ಗೆಳೆಯ ಯಾರು?',
            promptHi: 'हमें ठंडी छाया और ताज़ी हवा देने वाला कौन सा है?',
            promptKn: 'ನಮಗೆ ತಂಪಾದ ನೆರಳು ಮತ್ತು ಶುದ್ಧ ಗಾಳಿ ನೀಡುವ ನಿಸರ್ಗದ ಗೆಳೆಯ ಯಾರು?',
            taskItems: ['🌳', '🏠', '🚗'],
            options: ['ಮರ (Tree)', 'ಮನೆ (Home)', 'ಬಸ್ (Bus)'],
            correctAnswer: 'ಮರ (Tree)',
            successMessage: 'ಉತ್ತಮ! ನಮಗೆ ಹಸಿರು ನೆರಳು ನೀಡುವ ಮರ 🌳.'
          },
          {
            taskPrompt: 'ತೋಟದಲ್ಲಿ ರಂಗುರಂಗಾಗಿ ಅರಳುವ ಪರಿಮಳಯುಕ್ತ ವಸ್ತು ಯಾವುದು?',
            promptHi: 'बगीचे में खुशबू बिखेरने वाला सुंदर क्या है?',
            promptKn: 'ತೋಟದಲ್ಲಿ ರಂಗುರಂಗಾಗಿ ಅರಳುವ ಪರಿಮಳಯುಕ್ತ ವಸ್ತು ಯಾವುದು?',
            taskItems: ['🌸', '🪨', '🪵'],
            options: ['ಹೂವು (Flower)', 'ಕಲ್ಲು (Stone)', 'ಮರಳು (Sand)'],
            correctAnswer: 'ಹೂವು (Flower)',
            successMessage: 'ಅದ್ಭುತ! ಪರಿಮಳ ಸೂಸುವ ಸುಂದರ ಹೂವು 🌸.'
          }
        ],
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
