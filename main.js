import "./style.css";

class Task {
  description;
  done;

  constructor(description, done) {
    this.description = description;
    this.done = done;
  }
}

const task1 = new Task("Tvätta bilen", false);

console.log(task1);
