// TEMA

const body = document.body;
const btnTheme = document.querySelector(".card-theme");
const icon = btnTheme.querySelector("i");

btnTheme.addEventListener("click", switchTheme);

function switchTheme() {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  isDark
    ? (icon.className = "bi bi-moon")
    : (icon.className = "bi bi-brightness-high");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (!savedTheme) return;
  if (savedTheme === "dark") {
    body.classList.add("dark");
    icon.className = "bi bi-moon";
  }
}

loadTheme();
