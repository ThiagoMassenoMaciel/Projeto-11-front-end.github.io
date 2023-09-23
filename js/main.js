const body = document.body;
const root = document.querySelector("#root");
const navLinks = document.querySelectorAll(".nav-link");

async function loadContent(page) {
  const data = await fetch(`../pages/${page}.html`);
  return await data.text();
}

function getCurrentPage() {
  return window.location.hash.replace("#", "") || "home";
}

function updateNavigation(currentPage) {
  navLinks.forEach((navLink) => {
    const dataJs = navLink.getAttribute("data-navigation") || "home";
    navLink.classList.toggle("bold", dataJs === currentPage);
  });
}

function updateBackground(currentPage) {
  body.style.backgroundImage = `url(../img/${currentPage}-bg.webp)`;
}

function init() {
  window.addEventListener("hashchange", async () => {
    const currentPage = getCurrentPage();
    updateNavigation(currentPage);
    const content = await loadContent(currentPage);
    root.innerHTML = content;
    updateBackground(currentPage);
  });
}

window.addEventListener("load", async () => {
  const currentPage = getCurrentPage();
  const content = await loadContent(currentPage);
  root.innerHTML = content;
  updateBackground(currentPage);
  updateNavigation(currentPage);
  init();
});
