// ===========================
//    PAGE TRANSITION
// ===========================

window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
});


// ===========================
//    THEME
// ===========================

const setTheme = (theme) => {
    if (theme === "dark") {
        document.documentElement.dataset.theme = "dark";
    } else {
        document.documentElement.removeAttribute("data-theme");
    }

    localStorage.setItem("theme", theme);

    updateThemeButton(theme);
};


// ===========================
//    UPDATE THEME BUTTON
// ===========================

const updateThemeButton = (theme) => {
    const themeBtn = document.querySelector("#theme");

    if (!themeBtn) {
        return;
    }

    if (theme === "dark") {
        themeBtn.innerHTML = `<button>Light</button>`;
    } else {
        themeBtn.innerHTML = `<button>Dark</button>`;
    }
};


// ===========================
//    CHANGE THEME
// ===========================

const changeTheme = () => {
    const isDark =
        document.documentElement.dataset.theme === "dark";

    if (isDark) {
        setTheme("light");
    } else {
        setTheme("dark");
    }
};


// ===========================
//    LOAD THEME
// ===========================

const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";

    setTheme(savedTheme);
};


// ===========================
//    EVENT LISTENER
// ===========================

document.addEventListener("click", (e) => {
    const themeBtn = e.target.closest("#theme");

    if (themeBtn) {
        changeTheme();
    }
});


// ===========================
//    INITIALIZE
// ===========================

loadTheme();