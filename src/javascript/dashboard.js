import { sidebar } from "../../components/dashboard/sidebar.js";
import { header } from "../../components/dashboard/header.js";
import { stats } from "../../components/dashboard/stats.js";
import { quote } from "../../components/dashboard/quote.js";
import { todaysTasks } from "../../components/dashboard/todaysTasks.js";


const navigation = document.querySelector("#navigation");
const headerContainer = document.querySelector("#dashboard-header");
const quoteContainer = document.querySelector("#quote");
const statsContainer = document.querySelector("#stats");
const taskContainer = document.querySelector("#today-tasks")



navigation.innerHTML = sidebar();
headerContainer.innerHTML = header();
quoteContainer.innerHTML = quote();
statsContainer.innerHTML = stats();
taskContainer.innerHTML = todaysTasks()
