import "./style.css";

let todoList = [];

//Class som beskriver hur task ska se ut.
class Task {
  description;
  done;

  constructor(description, done) {
    this.description = description;
    this.done = done;
  }
}

// Skapar några "existerande tasks"
const task1 = new Task("Tvätta bilen", false);
const task2 = new Task("Klippa gräset", false);
const task3 = new Task("Städa altanen", false);

// Lägger existerande tasks i todolist
todoList.push(task1);
todoList.push(task2);
todoList.push(task3);

//Skapa tasks till array
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", createTask);

function createTask(e) {
  e.preventDefault();
  const inputText = document.querySelector("#inputText");
  console.log(inputText.value);
  const newTask = new Task(inputText.value, false);
  todoList.push(newTask);
  console.log(todoList);
  createHTML(todoList);
}

//Skapa cards(html)för tasks
function createHTML(todoList) {
  inputText.value = "";
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const card = document.createElement("article");
    card.classList.add("card");
    const text = document.createElement("h3");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    // Eventlistener som ändrar done till motsatt value varje gång man klickar i checkbox.
    checkbox.addEventListener("change", () => {
      todoList[i].done = !todoList[i].done;
      console.log(todoList[i]);
      createHTML(todoList);
    });

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Ta bort";
    removeBtn.addEventListener("click", () => {
      removeTask(i);
    });

    card.appendChild(checkbox);
    card.appendChild(text);
    card.appendChild(removeBtn);
    container.appendChild(card);

    text.innerHTML = todoList[i].description;

    if (todoList[i].done === true) {
      checkbox.checked = true;
      text.classList.add("doneText");
    }
  }
}

function removeTask(i) {
  todoList.splice(i, 1);
  createHTML(todoList);
}

// Sortera array alfabetiskt:
const sortBtn = document.querySelector(".sortBtn");
sortBtn.addEventListener("click", () => {
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
});

createHTML(todoList);
