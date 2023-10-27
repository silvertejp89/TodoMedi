import { changeCheck } from "./taskHelpers";
import { removeTask } from "./taskHelpers";

export function createHTML(todoList) {
  localStorage.setItem("todoList", JSON.stringify(todoList));
  inputText.value = "";
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const card = document.createElement("article");
    card.classList.add("card");
    const text = document.createElement("h3");

    //Checkbox (connected to changeCheck)
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("change", () => {
      changeCheck(i);
    });

    if (todoList[i].done === true) {
      checkbox.checked = true;
      text.classList.add("doneText");
    }

    //Button for removeTask
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
  }
}
