//================
// IMPORTS
//================

import { sidebar } from "../../components/dashboard/sidebar.js";

// ===========================
//    VARIABLES
// ===========================

const navigation = document.querySelector("#navigation");
const formRowContainer = document.querySelector("#form-row");
const today = new Date().toISOString().split("T")[0];

// ===========================
//    COMPONENTS RENDERING
// ===========================

if (navigation) {
    navigation.innerHTML = sidebar("add-tasks");
}
if (formRowContainer) {
    formRowContainer.innerHTML = `
                        <div class="form-group">
                            <label for="start-date">Start Date</label>

                            <input type="date" id="start-date" value=${today} name="startDate" />
                        </div>
                        
                        <div class="form-group">
                            <label for="due-date">Due Date</label>

                            <input type="date" id="due-date" value=${today} name="dueDate"/>
                        </div>

                        <div class="form-group">
                            <label for="task-priority">Priority</label>

                            <select id="task-priority" name="priority">
                                <option value="low">Low</option>

                                <option value="medium" selected>Medium</option>

                                <option value="high">High</option>
                            </select>
                        </div>
    `;
}
