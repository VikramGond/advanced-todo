import { tasksItems } from "./tasksItems.js";
import { task_data } from "../../data/task_data.js";

export const todaysTasks = () => {
  const taskHTML = task_data.map((task) => tasksItems(task)).join("");

  return `
         <div class="tasks-header">

            <div class="tasks-title">
                <h2>Today's Tasks</h2>
                <p>${task_data.length} tasks planned for today</p>
            </div>

            <div class="tasks-actions">

                <button class="filter-btn">
                    <i class="fa-solid fa-filter"></i>
                    Filter
                </button>

                <button class="view-all-btn">
                    View all
                </button>

            </div>

        </div>


        <div class="task-list">
            ${taskHTML}
        </div>

        <div class="show-more">
            <button>
                Show more
                <i class="fa-solid fa-chevron-down"></i>
            </button>
        </div>
    `;
};
