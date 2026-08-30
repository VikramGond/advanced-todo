//================
// IMPORTS
//================

import { sidebar } from "../../components/dashboard/sidebar.js";

// ===========================
//    VARIABLES
// ===========================

const navigation = document.querySelector("#navigation");

// ===========================
//    COMPONENTS RENDERING
// ===========================

if (navigation) {
    navigation.innerHTML = sidebar("add-tasks");
}
