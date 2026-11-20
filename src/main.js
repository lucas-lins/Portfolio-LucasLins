const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const preferencesToggle = document.querySelector("[data-preferences-toggle]");
const preferencesPopover = document.getElementById("preferences-popover");

if (preferencesToggle && preferencesPopover) {
  const setPreferencesOpen = (isOpen) => {
    preferencesPopover.hidden = !isOpen;
    preferencesToggle.setAttribute("aria-expanded", String(isOpen));
  };

  preferencesToggle.addEventListener("click", () => {
    setPreferencesOpen(preferencesPopover.hidden);
  });

  document.addEventListener("click", (event) => {
    if (
      !preferencesToggle.contains(event.target) &&
      !preferencesPopover.contains(event.target)
    ) {
      setPreferencesOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !preferencesPopover.hidden) {
      setPreferencesOpen(false);
      preferencesToggle.focus();
    }
  });
}

const themeButtons = document.querySelectorAll("[data-theme-choice]");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.documentElement.dataset.theme = button.dataset.themeChoice;

    themeButtons.forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
  });
});

const languageButtons = document.querySelectorAll("[data-language-choice]");

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    languageButtons.forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
  });
});