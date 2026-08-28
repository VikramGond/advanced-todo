import { sidebar } from "../../components/sidebar.js";
import { header } from "../../components/header.js";
import { stats } from "../../components/stats.js";
import { quote } from "../../components/quote.js";
const navigation = document.querySelector("#navigation");
const headerContainer = document.querySelector("#dashboard-header");
const quoteContainer = document.querySelector("#quote");
const statsContainer = document.querySelector("#stats");

navigation.innerHTML = sidebar();
headerContainer.innerHTML = header();
quoteContainer.innerHTML = quote();
statsContainer.innerHTML = stats();
