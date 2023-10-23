import "./style.css";

let todoList = [];

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

// Lägger tasks i todolist
todoList.push(task1);
todoList.push(task2);
todoList.push(task3);

// Skapa HTML
// const container = document.querySelector(".container");
// const card = document.createElement("article");
// card.classList.add("card");
// const text = document.createElement("h3");
// let checkbox = document.createElement("input");
// checkbox.setAttribute("type", "checkbox");
// card.appendChild(text);
// card.appendChild(checkbox);
// container.appendChild(card);

// text.innerHTML = todoList[1].description;

function createHTML(todoList) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const card = document.createElement("article");
    card.classList.add("card");
    const text = document.createElement("h3");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    card.appendChild(text);
    card.appendChild(checkbox);
    container.appendChild(card);

    text.innerHTML = todoList[i].description;
  }
}

createHTML(todoList);
