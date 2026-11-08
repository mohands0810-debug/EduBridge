/**
 * EduBridge Curriculum & Adaptation Knowledge Base
 * Developed for KSIT Community Project (25BCP308)
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
        videoSubtitle: 'Step-by-step counting with clear audio captions'
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
        videoSubtitle: 'Visual properties of circles, squares, and triangles'
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
        videoSubtitle: 'Identifying rhythmic and visual sequences'
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
        videoSubtitle: 'An illustrated guide to plant anatomy'
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
        videoSubtitle: 'Understanding wildlife and farm companions'
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
        videoSubtitle: 'Auditory and visual letter-sound association'
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
        videoSubtitle: 'Demonstrating common physical actions'
      }
    ]
  }
];
