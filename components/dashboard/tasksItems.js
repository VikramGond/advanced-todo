export const tasksItems = (task) => {
    return `
        <div class="task-item">
            <input type="checkbox" class="task-checkbox">

            <div class="task-content">
                <h3>${task.title}</h3>
                <p>${task.description}</p>
            </div>

            <div class="task-date">
                ${task.startDate} → ${task.dueDate}
            </div>
        </div>
    `;
};