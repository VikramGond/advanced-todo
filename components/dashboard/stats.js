export const stats = () => {
  return `
        <div class="stat" id="stat">
            <div class="stat-box" id="total-tasks">
                <div class="stat-icon">
                    <i class="fa-solid fa-clipboard-list"></i>
                </div>

                <div class="description">
                    <h4>Total tasks</h4>
                    <h1>24</h1>
                    <p>8 completed this week</p>
                </div>
            </div>
                
            <div class="stat-box" id="complete-tasks">
                <div class="stat-icon">
                    <i class="fa-regular fa-circle-check"></i>
                </div>

                <div class="description">
                    <h4>Complete</h4>
                    <h1>16</h1>
                    <p><i class="fa-solid fa-arrow-up"></i> 4 from last week</p>
                </div>
            </div>

            <div class="stat-box" id="pending-tasks">
                <div class="stat-icon">
                    <i class="fa-regular fa-clock"></i>
                </div>

                <div class="description">
                    <h4>Pending</h4>
                    <h1>6</h1>
                    <p>2 due today</p>
                </div>
            </div>

            <div class="stat-box" id="overdue-tasks">
                <div class="stat-icon">
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>

                <div class="description">
                    <h4>Overdue</h4>
                    <h1>2</h1>
                    <p>1 from yesterday</p>
                </div>
            </div>

        </div>

    `;
};
