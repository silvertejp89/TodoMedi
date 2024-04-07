import "./../scss/style.scss";
import { createHTML } from "./HtmlHelper";
import { createTask, sortAlphabetically } from "./taskHelpers";

//Create and get list och objects from local storage
export let todoList = [];
const listFromLocalStorage = localStorage.getItem("todoList") || "[]";
todoList = JSON.parse(listFromLocalStorage);

//Button for createTask
const submitBtn = document.querySelector("#submitBtn");
submitBtn.classList.add("submitBtn");
submitBtn.addEventListener("click", createTask);

//Button for sorting alphabetically
const sortBtn = document.querySelector(".sortBtn");
sortBtn.addEventListener("click", sortAlphabetically);

//Create Html for list of objects
createHTML(todoList);

console.log("todos: ", todoList);
