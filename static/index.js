AOS.init();
AOS.init({
  // Global settings:
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

// Toggle Theme

/*Theme Toggle */
$(document).ready(() => {
  const body = document.querySelector("body");
  const checkbox = document.getElementById("theme-checkbox");
  loadTheme();
  checkbox.addEventListener("change", (e) => {
    const currentTheme = e.target.checked;
    updateTheme(currentTheme);
    updateThemeLocalStorage(currentTheme);
  });
  function loadTheme() {
    window.localStorage.getItem("dark")
      ? (checkbox.checked =
          JSON.parse(window.localStorage.dark) == false ? true : false)
      : updateThemeLocalStorage(checkbox.checked);
    updateTheme(!JSON.parse(window.localStorage.dark));
  }
  function updateTheme(currentTheme) {
    body.setAttribute("data-bs-theme", currentTheme ? "dark" : "light");
  }
  function updateThemeLocalStorage(currentTheme) {
    window.localStorage.dark = !currentTheme;
  }
});

// Modal
$(document).ready(() => {
  const rulesModal = document.getElementById("rulesModal");
  const rulesModalElem = new bootstrap.Modal(rulesModal);
  setTimeout(() => {
    rulesModalElem.show();
  }, 30000);
});
