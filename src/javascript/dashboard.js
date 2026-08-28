import { sidebar } from "../../components/sidebar.js";
import { header } from "../../components/header.js";
const navigation = document.querySelector("#navigation");
const headerContainer = document.querySelector("#dashboard-header");

navigation.innerHTML = sidebar()
headerContainer.innerHTML = header()