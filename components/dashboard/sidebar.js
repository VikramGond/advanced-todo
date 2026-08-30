export const sidebar = (activePage) => {
    return `
        <div class="logo" id="logo">
            <h1>DoToDo</h1>
        </div>

        <nav class="sidebar-nav">
            <ul>
                <li><a href="dashboard.html" class="${activePage === "dashboard" ? "active" : ""}">Dashboard</a></li>
                <li><a href="tasks.html" class="${activePage === "tasks" ? "active" : ""}">Tasks</a></li>
                <li><a href="calendar.html"class="${activePage === "calendar" ? "active" : ""}">Calendar</a></li>
                <li><a href="add-tasks.html"class="${activePage === "add-tasks" ? "active" : ""}">Add Task</a></li>
            </ul>
        </nav>

        <hr>

        <a href="#" class="settings" id="settings">Settings</a>

        <div class="user-profile" id="user-profile">
            <img src="https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="user-avatar" id="user-avatar" height="50px">

            <p class="user-name">Vikram Gond</p>

            <button>Logout</button>
        </div>
    `;
};