export const todaysTasks = () => {
  return `
         <div class="tasks-header">

            <div class="tasks-title">
                <h2>Today's Tasks</h2>
                <p>5 tasks planned for today</p>
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

            <!-- Tasks will be rendered here -->

        </div>

        <div class="show-more">
            <button>
                Show more
                <i class="fa-solid fa-chevron-down"></i>
            </button>
        </div>
    `;
};
