// ===========================
//    EVENTS
// ===========================

import { sidebar } from "../../components/dashboard/sidebar.js";
import { header } from "../../components/dashboard/header.js";
import { stats } from "../../components/dashboard/stats.js";
import { quote } from "../../components/dashboard/quote.js";
import { todaysTasks } from "../../components/dashboard/todaysTasks.js";

// ===========================
//    VARIABLES
// ===========================
const navigation = document.querySelector("#navigation");
const headerContainer = document.querySelector("#dashboard-header");
const quoteContainer = document.querySelector("#quote");
const statsContainer = document.querySelector("#stats");
const taskContainer = document.querySelector("#today-tasks");
let quotes = [];

// ===========================
//    COMPONENTS RENDERING
// ===========================

if (navigation) {
    navigation.innerHTML = sidebar("dashboard");
}
if (headerContainer) {
    headerContainer.innerHTML = header();
}
if (statsContainer) {
    statsContainer.innerHTML = stats();
}
if (taskContainer) {
    taskContainer.innerHTML = todaysTasks();
}

// =========================================
//    VARIABLES FOR DYNAMIC COMPONENTS
// =========================================

const themeBtn = document.querySelector("#theme");

// ===========================
//    FUNCTIONS
// ===========================

//========LOAD QUOTES=========

const loadQuotes = async () => {
    try {
        const response = await fetch("../../data/quotes.json");

        if (!response.ok) {
            throw new Error("Failed to load Quotes!");
        }
        quotes = await response.json();
    } catch (error) {
        console.error(error);
    }
};

//=======GET RANDOM QUOTE=========

const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    return quote;
};

//======INITIALIZE QUOTES=======

const initializeQuote = async () => {
    await loadQuotes();
    const randomQuote = getRandomQuote();

    renderQuote();
};

//==========RENDER QUOTE========

const renderQuote = () => {
    const randomQuote = getRandomQuote();
    quoteContainer.innerHTML = quote(randomQuote);

    const refreshBtn = document.querySelector(".refresh-btn");

    if (refreshBtn) {
        refreshBtn.addEventListener("click", () => {
            renderQuote();
        });
    }
};

//=========THEME=========
const changeTheme = () => {
    const isDark = document.documentElement.dataset.theme === "dark";

    if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        themeBtn.innerHTML = `<button>Dark</button>`;
    } else {
        document.documentElement.dataset.theme = "dark";
        themeBtn.innerHTML = `<button>Light</button>`;
    }
};

const refreshBtn = document.querySelector(".refresh-btn");

// ===========================
//    EVENT LISTENERS
// ===========================

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        changeTheme();
    });
}

//========== GLOBAL FUNCTION CALL===========

initializeQuote();
