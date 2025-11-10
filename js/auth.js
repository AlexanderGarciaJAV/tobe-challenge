// auth.js

// Maneja el inicio y cierre de sesión estáticos (usuario: Jasley, contraseña: 1234)



const VALID_USER = "Jasley";

const VALID_PASS = "1234";



document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");

  const errorMessage = document.getElementById("errorMessage");

  const logoutBtn = document.getElementById("logoutBtn");



  // --- INICIO DE SESIÓN ---

  if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

      e.preventDefault();



      const username = document.getElementById("username").value.trim();

      const password = document.getElementById("password").value.trim();



      if (username === VALID_USER && password === VALID_PASS) {

        localStorage.setItem("loggedUser", username);

        window.location.href = "game.html";

      } else {

        if (errorMessage) {

          errorMessage.textContent = "❌ Usuario o contraseña incorrectos.";

          errorMessage.style.color = "red";

        }

      }

    });

  }



  // --- CIERRE DE SESIÓN ---

  if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

      localStorage.removeItem("loggedUser");

      window.location.href = "index.html";

    });

  }



  // --- PROTECCIÓN DE ACCESO ---

  const currentPage = window.location.pathname.split("/").pop(); // Solo obtiene el nombre del archivo



  if (currentPage === "game.html") {

    const user = localStorage.getItem("loggedUser");



    if (!user) {

      // Si no hay usuario logueado, redirige al login

      window.location.href = "index.html";

    } else {

      // Personaliza la bienvenida si hay un elemento para ello

      const header = document.querySelector("header h1");

      if (header) header.textContent = `Bienvenida, ${user}`;

    }

  }

});