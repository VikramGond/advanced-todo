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

// ===========================
//    COMPONENTS RENDERING
// ===========================

if (navigation) {
  navigation.innerHTML = sidebar();
}
if (headerContainer) {
  headerContainer.innerHTML = header();
}
if (quoteContainer) {
  quoteContainer.innerHTML = quote();
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

const changeTheme = () => {
  const isDark = document.documentElement.dataset.theme === "dark";

  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    themeBtn.innerHTML = `<button>Light</button>`;
  } else {
    document.documentElement.dataset.theme = "dark";
    themeBtn.innerHTML = `<button>Dark</button>`;
  }
};

// ===========================
//    EVENT LISTENERS
// ===========================

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    changeTheme();
  });
}
