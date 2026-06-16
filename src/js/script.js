// TEMA

const body = document.body;
const btnTheme = document.querySelector(".card-theme");
const iconTheme = btnTheme.querySelector("i");

btnTheme.addEventListener("click", switchTheme);

function switchTheme() {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  isDark
    ? (iconTheme.className = "bi bi-moon")
    : (iconTheme.className = "bi bi-brightness-high");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (!savedTheme) return;
  if (savedTheme === "dark") {
    body.classList.add("dark");
    iconTheme.className = "bi bi-moon";
  }
}

loadTheme();

// MENU

const btnMenu = document.querySelector(".menu-btn");
const iconMenu = btnMenu.querySelector("i");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

btnMenu.addEventListener("click", showMenu);

function showMenu() {
  const isActive = nav.classList.toggle("active");
  iconMenu.classList.toggle("bi-x-lg", isActive);
  iconMenu.classList.toggle("bi-list", !isActive);
  btnMenu.setAttribute("aria-label", isActive ? "Fechar Menu" : "Abrir Menu");
}

// NAV

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      closeMenu();
    }
  });
});

function closeMenu() {
  nav.classList.remove("active");
  iconMenu.classList.remove("bi-x-lg");
  iconMenu.classList.add("bi-list");
  btnMenu.setAttribute("aria-label", "Abrir Menu");
}
