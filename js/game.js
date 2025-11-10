// 🎮 Lógica principal del juego interactivo del verbo To Be

let currentQuestion = 0;
let score = 0;
let isGameStarted = false;
let selectedQuestions = [];

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startGameBtn");
  const gameArea = document.getElementById("gameArea");
  const intro = document.getElementById("intro");
  const logoutBtn = document.getElementById("logoutBtn");
  const logo = document.querySelector(".logo");

  // ======================
  // 🔸 Cerrar sesión
  // ======================
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedUser");
      window.location.href = "index.html";
    });
  }

  // ======================
  // 🔸 Iniciar juego
  // ======================
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      intro.classList.add("hidden");
      gameArea.classList.remove("hidden");
      startGame();
    });
  }

  // ======================
  // 🔸 Logo → menú de opciones
  // ======================
  if (logo) {
    logo.addEventListener("click", openLogoMenu);
  }

  // ======================
  // 🔸 Botón de ayuda flotante
  // ======================
  createFloatingHelpButton();
});

// ======================
// 🧩 FUNCIONES PRINCIPALES
// ======================
function startGame() {
  currentQuestion = 0;
  score = 0;
  isGameStarted = true;
  shuffleArray(questions);

  // 🔹 Solo 15 preguntas únicas
  selectedQuestions = questions.slice(0, 15);

  showScoreCounter();
  showQuestion();
}

function showQuestion() {
  const gameArea = document.getElementById("gameArea");
  gameArea.innerHTML = "";

  if (currentQuestion >= selectedQuestions.length) {
    showResult();
    return;
  }

  const q = selectedQuestions[currentQuestion];
  document.body.style.backgroundImage = q.bg ? `url('${q.bg}')` : "";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  const questionElem = document.createElement("div");
  questionElem.className = "question";
  questionElem.innerHTML = `
    <h3>${q.text}</h3>
    <div class="options">
      ${q.options
        .map((opt, i) => `<button class="option" data-index="${i}">${opt}</button>`)
        .join("")}
    </div>
  `;
  gameArea.appendChild(questionElem);

  showScoreCounter();

  document.querySelectorAll(".option").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selected = parseInt(e.target.getAttribute("data-index"));
      checkAnswer(selected, e.target);
    });
  });
}

function checkAnswer(selected, button) {
  const q = selectedQuestions[currentQuestion];
  const correctSound = new Audio("assets/correct.mp3");
  const wrongSound = new Audio("assets/wrong.mp3");

  document.querySelectorAll(".option").forEach((b) => (b.disabled = true));

  if (selected === q.correct) {
    score++;
    button.classList.add("correct");
    correctSound.play();
    showFeedback(true);
  } else {
    button.classList.add("incorrect");
    wrongSound.play();
    showFeedback(false);
  }

  currentQuestion++;
  showScoreCounter(); // 🔹 actualizar contador
  setTimeout(showQuestion, 1300);
}

function showResult() {
  const gameArea = document.getElementById("gameArea");
  document.body.style.backgroundImage = "";
  isGameStarted = false;

  // Eliminar contador
  const counter = document.getElementById("scoreCounter");
  if (counter) counter.remove();

  gameArea.innerHTML = `
    <div class="result">
      <h2>🎯 Resultado final</h2>
      <p>Tu puntaje: <strong>${score}</strong> de ${selectedQuestions.length}</p>
      <button id="restartBtn">Reintentar</button>
    </div>
  `;
  document.getElementById("restartBtn").addEventListener("click", startGame);
}

// ======================
// 💬 MENSAJE VISUAL CENTRADO
// ======================
function showFeedback(isCorrect) {
  const message = document.createElement("div");
  message.classList.add("feedback-message", isCorrect ? "correct" : "incorrect");
  message.textContent = isCorrect ? "¡Correcto!" : "Incorrecto";

  document.body.appendChild(message);
  setTimeout(() => {
    message.style.opacity = 0;
    setTimeout(() => message.remove(), 400);
  }, 1000);
}

// ======================
// 🔀 Mezclar preguntas
// ======================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ======================
// 🧭 Menú del logo
// ======================
function openLogoMenu() {
  if (document.getElementById("logoMenu")) document.getElementById("logoMenu").remove();

  const modal = document.createElement("div");
  modal.id = "logoMenu";
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h2>Menú del juego</h2>
      <button id="continueBtn" ${!isGameStarted ? "disabled" : ""}>Continuar intento</button>
      <button id="restartGameBtn">Iniciar nuevo</button>
      <button id="exitBtn">Salir del juego</button>
    </div>
  `;
  document.body.appendChild(modal);
  modal.style.display = "block";

  modal.querySelector(".close-btn").onclick = () => modal.remove();
  window.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };

  document.getElementById("continueBtn").addEventListener("click", () => modal.remove());
  document.getElementById("restartGameBtn").addEventListener("click", () => {
    modal.remove();
    startGame();
  });
  document.getElementById("exitBtn").addEventListener("click", () => {
    modal.remove();
    window.location.href = "index.html";
  });
}

// ======================
// 🆘 Botón de ayuda flotante
// ======================
function createFloatingHelpButton() {
  const helpBtn = document.createElement("button");
  helpBtn.id = "helpBtn";
  helpBtn.textContent = "Ayuda";
  Object.assign(helpBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#ffd60a",
    color: "#1a1a1a",
    border: "none",
    borderRadius: "50px",
    padding: "12px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
    cursor: "pointer",
    transition: "0.3s ease",
    zIndex: "1001",
  });

  helpBtn.addEventListener("mouseover", () => (helpBtn.style.background = "#fbc02d"));
  helpBtn.addEventListener("mouseout", () => (helpBtn.style.background = "#ffd60a"));

  helpBtn.addEventListener("click", async () => {
    const existingModal = document.getElementById("helpModal");
    if (existingModal) {
      existingModal.style.display = "block";
      return;
    }

    try {
      const res = await fetch("components/modal.html");
      const html = await res.text();
      document.body.insertAdjacentHTML("beforeend", html);
      const modal = document.getElementById("helpModal");
      modal.style.display = "block";

      modal.querySelector(".close-btn").addEventListener("click", () => {
        modal.style.display = "none";
      });
      window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
      });
    } catch (err) {
      console.error("Error cargando modal de ayuda:", err);
    }
  });

  document.body.appendChild(helpBtn);
}

// ======================
// 🧮 Mostrar contador de puntaje
// ======================
function showScoreCounter() {
  let counter = document.getElementById("scoreCounter");
  if (!counter) {
    counter = document.createElement("div");
    counter.id = "scoreCounter";
    Object.assign(counter.style, {
      position: "fixed",
      top: "10px",
      right: "20px",
      background: "rgba(0, 0, 0, 0.7)",
      color: "#fff",
      padding: "8px 15px",
      borderRadius: "8px",
      fontWeight: "bold",
      zIndex: "1000",
      fontSize: "1rem",
    });
    document.body.appendChild(counter);
  }
  counter.textContent = `Puntaje: ${score} / ${selectedQuestions.length}  |  Pregunta ${currentQuestion + 1} de ${selectedQuestions.length}`;
}
