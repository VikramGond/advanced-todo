export const header = () => {
  return `
        <div class="greet" id="greet">
            <h2>Good Evening, Vikram 👋</h2>
            <p class="slogan" id="slogan">Let's make today count</p>
        </div>

        <div class="date-time" id="date-time">
            <i class="fa-regular fa-calendar" style="color: rgb(12, 16, 58);"></i>
            Today, 28 Aug 2026
        </div>

        <div class="theme" id="theme">
            <button>Dark</button>
        </div>

        <button class="notification" id="notification">
            <i class="fa-solid fa-bell fa-xl"></i>
        </button>

        <button class="add-task" id="add-task"> Add Task</button>
    `;
};
