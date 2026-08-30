window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
});

const setTheme = (theme) => {
    if (theme === "dark") {
        document.documentElement.dataset.theme = "dark";
        themeBtn.innerHTML = `<button>Light</button>`;
    } else {
        document.documentElement.removeAttribute("data-theme");
        themeBtn.innerHTML = `<button>Dark</button>`;
    }

    localStorage.setItem("theme", theme);
};

const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
    }
};

loadTheme();
