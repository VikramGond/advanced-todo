export const header = () => {
    const getDate = () => {
        const monthName = [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        const todayDate = new Date();
        const date = todayDate.getDate();
        const month = monthName[todayDate.getMonth()];
        const year = todayDate.getFullYear();

        return `${date} ${month} ${year}`
    };

    return `
        <div class="greet" id="greet">
            <h2>Good Evening, Vikram 👋</h2>
            <p class="slogan" id="slogan">Let's make today count</p>
        </div>

        <div class="date-time" id="date-time">
            <i class="fa-regular fa-calendar" style="color: rgb(12, 16, 58);"></i>
            Today, ${getDate()}
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
