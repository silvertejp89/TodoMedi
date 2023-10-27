import "./../scss/style.scss";
import { createTask, sortAlphabetically } from "./taskHelpers";
import { createHTML } from "./HtmlHelper";

export let todoList = [];

const listFromLocalStorage = localStorage.getItem("todoList") || "[]";

todoList = JSON.parse(listFromLocalStorage);

// Skapar några "existerande tasks" och lägger till i todoList.
// todoList.push(new Task("Tvätta bilen", false));
// todoList.push(new Task("Klippa gräset", false));
// todoList.push(new Task("Städa altanen", false));

//Skapa tasks till array
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", createTask);

// Sortera array alfabetiskt:
const sortBtn = document.querySelector(".sortBtn");
sortBtn.addEventListener("click", sortAlphabetically);

createHTML(todoList);
console.log("upprepning?");
