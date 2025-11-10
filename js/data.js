// data.js
// Banco de preguntas del juego del verbo To Be

const questions = [
  // =================================================================
  // ===== 1. PRESENTE (AM / IS / ARE) - 20 PREGUNTAS TOTALES =====
  // =================================================================

  // --- Bloque de preguntas originales (8) ---
  {
    text: "I ___ a student. (Presente)",
    options: ["am", "is", "are"],
    correct: 0, // 'am'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "He ___ a teacher. (Presente)",
    options: ["am", "is", "are"],
    correct: 1, // 'is'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "They ___ at school now. (Presente)",
    options: ["am", "is", "are"],
    correct: 2, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "We ___ best friends. (Presente)",
    options: ["is", "are", "am"],
    correct: 1, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "It ___ a sunny day. (Presente)",
    options: ["am", "is", "are"],
    correct: 1, // 'is'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "You ___ my favorite person. (Presente)",
    options: ["am", "are", "is"],
    correct: 1, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "She ___ not at home. (Presente, negativa)",
    options: ["is", "are", "am"],
    correct: 0, // 'is'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "___ you ready for class? (Pregunta en presente)",
    options: ["Is", "Are", "Am"],
    correct: 1, // 'Are'
    bg: "assets/bg-present.jpg"
  },
  // --- Bloque de preguntas añadidas (12 nuevas preguntas para completar 20) ---
  {
    text: "The cat ___ sleeping on the chair. (Presente)",
    options: ["are", "is", "am"],
    correct: 1, // 'is'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "The books ___ heavy. (Presente)",
    options: ["is", "are", "am"],
    correct: 1, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "My parents ___ coming tonight. (Presente)",
    options: ["is", "am", "are"],
    correct: 2, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "I ___ hungry right now. (Presente)",
    options: ["am", "is", "are"],
    correct: 0, // 'am'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "It ___ not true. (Presente, negativa)",
    options: ["are", "is", "am"],
    correct: 1, // 'is'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "___ the food delicious? (Pregunta en presente)",
    options: ["Are", "Is", "Am"],
    correct: 1, // 'Is'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "They ___ happy to be here. (Presente)",
    options: ["is", "are", "am"],
    correct: 1, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "We ___ watching a movie. (Presente)",
    options: ["am", "is", "are"],
    correct: 2, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "The music ___ too loud. (Presente)",
    options: ["are", "is", "am"],
    correct: 1, // 'is'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "My brother and I ___ traveling. (Presente)",
    options: ["am", "is", "are"],
    correct: 2, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "___ I wrong? (Pregunta en presente)",
    options: ["Is", "Am", "Are"],
    correct: 1, // 'Am'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "She ___ an excellent dancer. (Presente)",
    options: ["am", "is", "are"],
    correct: 1, // 'is'
    bg: "assets/bg-present.jpg"
  },
    {
    text: "The students ___ in the classroom. (Presente)",
    options: ["is", "am", "are"],
    correct: 2, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "I ___ not feeling well today. (Presente, negativa)",
    options: ["is", "are", "am"],
    correct: 2, // 'am'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "The weather ___ very cold outside. (Presente)",
    options: ["are", "is", "am"],
    correct: 1, // 'is'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "We ___ ready to start the game. (Presente)",
    options: ["is", "are", "am"],
    correct: 1, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "The phone ___ ringing loudly. (Presente)",
    options: ["are", "is", "am"],
    correct: 1, // 'is'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "My keys ___ on the desk. (Presente)",
    options: ["is", "am", "are"],
    correct: 2, // 'are'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "___ it time to go? (Pregunta en presente)",
    options: ["Are", "Is", "Am"],
    correct: 1, // 'Is'
    bg: "assets/bg-present.jpg"
  },
  {
    text: "He ___ a very talented artist. (Presente)",
    options: ["am", "is", "are"],
    correct: 1, // 'is'
    bg: "assets/bg-present.jpg"
  },

  // ================================================================
  // ===== 2. PASADO (WAS / WERE) - 20 PREGUNTAS TOTALES =====
  // ================================================================

  // --- Bloque de preguntas originales (10) ---
  {
    text: "She ___ happy yesterday. (Pasado)",
    options: ["was", "were", "is"],
    correct: 0, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "We ___ friends since childhood. (Pasado)",
    options: ["was", "were", "are"],
    correct: 1, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "You ___ late to the meeting yesterday. (Pasado)",
    options: ["were", "was", "are"],
    correct: 0, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "He ___ tired after the game. (Pasado)",
    options: ["is", "was", "were"],
    correct: 1, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "They ___ not at home last night. (Pasado, negativa)",
    options: ["was", "were", "are"],
    correct: 1, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "___ it cold yesterday? (Pregunta en pasado)",
    options: ["Were", "Was", "Is"],
    correct: 1, // 'Was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "I ___ in my room at 10 p.m. (Pasado)",
    options: ["was", "were", "am"],
    correct: 0, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "We ___ very busy last weekend. (Pasado)",
    options: ["were", "was", "are"],
    correct: 0, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "The dogs ___ in the park yesterday. (Pasado)",
    options: ["were", "was", "are"],
    correct: 0, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "He ___ not at school yesterday. (Pasado, negativa)",
    options: ["was", "were", "is"],
    correct: 0, // 'was'
    bg: "assets/bg-past.jpg"
  },
  // --- Bloque de preguntas añadidas (10 nuevas preguntas para completar 20) ---
  {
    text: "My car ___ broken last month. (Pasado)",
    options: ["were", "is", "was"],
    correct: 2, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "The children ___ playing outside an hour ago. (Pasado)",
    options: ["was", "were", "are"],
    correct: 1, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "It ___ raining when I woke up. (Pasado)",
    options: ["were", "is", "was"],
    correct: 2, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "I ___ not hungry then. (Pasado, negativa)",
    options: ["were", "was", "am"],
    correct: 1, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "___ they invited to the party? (Pregunta en pasado)",
    options: ["Was", "Are", "Were"],
    correct: 2, // 'Were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "The movie ___ very boring. (Pasado)",
    options: ["were", "was", "is"],
    correct: 1, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "My sister and I ___ on vacation last year. (Pasado)",
    options: ["was", "were", "are"],
    correct: 1, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "___ your keys on the table? (Pregunta en pasado)",
    options: ["Were", "Was", "Is"],
    correct: 0, // 'Were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "The meeting ___ cancelled because of the weather. (Pasado)",
    options: ["were", "was", "is"],
    correct: 1, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "The flowers ___ beautiful this morning. (Pasado)",
    options: ["was", "were", "are"],
    correct: 1, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "The train ___ delayed two hours ago. (Pasado)",
    options: ["were", "was", "is"],
    correct: 1, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "My neighbors ___ having a party. (Pasado)",
    options: ["was", "were", "are"],
    correct: 1, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "The glass ___ broken on the floor. (Pasado)",
    options: ["were", "was", "is"],
    correct: 1, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "___ your mother a doctor? (Pregunta en pasado)",
    options: ["Were", "Was", "Is"],
    correct: 1, // 'Was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "I ___ happy to see you. (Pasado)",
    options: ["were", "was", "am"],
    correct: 1, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "The children ___ asleep quickly. (Pasado)",
    options: ["was", "were", "are"],
    correct: 1, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "You ___ a great student in high school. (Pasado)",
    options: ["was", "were", "is"],
    correct: 1, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "The lights ___ off during the storm. (Pasado)",
    options: ["was", "were", "are"],
    correct: 1, // 'were'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "It ___ snowing heavily all night. (Pasado)",
    options: ["were", "was", "is"],
    correct: 1, // 'was'
    bg: "assets/bg-past.jpg"
  },
  {
    text: "They ___ not ready to leave. (Pasado, negativa)",
    options: ["was", "were", "are"],
    correct: 1, // 'were'
    bg: "assets/bg-past.jpg"
  },
];