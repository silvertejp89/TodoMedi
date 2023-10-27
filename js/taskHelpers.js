import { todoList } from "../js/main";
import { Task } from "../models/Task";
import { createHTML } from "./HtmlHelper";

//CHECKBOX
export function changeCheck(i) {
  todoList[i].done = !todoList[i].done;
  createHTML(todoList);
}

//CREATE
export function createTask(e) {
  e.preventDefault();
  const inputText = document.querySelector("#inputText");
  const newTask = new Task(inputText.value, false);
  todoList.push(newTask);
  createHTML(todoList);
}

//REMOVE
export function removeTask(i) {
  todoList.splice(i, 1);
  createHTML(todoList);
}

//SORT
export function sortAlphabetically() {
  todoList.sort(function (a, b) {
    let x = a.description.toLowerCase();
    let y = b.description.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  createHTML(todoList);
}
