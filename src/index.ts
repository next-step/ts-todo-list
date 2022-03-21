// import { Task } from "./../@types/todo/index";
import TodoApp from "./Todo.js";

const todoApp = new TodoApp();

function getTargetValue() {
  return (document.querySelector("#target")! as HTMLSelectElement).value;
}

function getUserInputValue() {
  const value = document.querySelector("#userInput");
  return value && (value as HTMLInputElement).value;
}

function getCategory() {
  const category = document.querySelector("#category");
  return category && Number((category as HTMLSelectElement).value);
}

function findIndex(categoryId: number) {
  return todoApp.todoList.findIndex((todo) => {
    return todo.categoryId === categoryId;
  });
}

function taskRender() {
  const categoryId = getCategory();
  const taskList = document.querySelector(".task-list")! as HTMLElement;
  taskList.innerHTML = "";

  if (!categoryId) return;

  todoApp.todoList[findIndex(categoryId)].tasks.forEach((task) => {
    const template = document.createElement("template");
    template.innerHTML = `<li>
                            <input type="checkbox"/>
                            <span></span>
                            <span class="task-edit-btn">&#9997;</span>
                            <span class="task-del-btn">&#10060;</span>
                          </li>`;

    const taskItem = template.content.firstChild! as HTMLElement;

    (taskItem.querySelector("span")! as HTMLElement).textContent = task.task;
    taskItem.setAttribute("data-task-id", String(task.taskId));

    taskItem.querySelector("input")!.checked = task.isCompleted;

    taskItem.querySelector("input")!.onclick = () => {
      todoApp.toggleCompleteTask(categoryId, Number(taskItem.dataset.taskId));
    };

    (taskItem.querySelector(".task-edit-btn")! as HTMLElement).onclick = () => {
      const value = getUserInputValue();
      if (!value) return;

      todoApp.updateTask(categoryId, Number(taskItem.dataset.taskId), value);
      taskRender();
    };

    (taskItem.querySelector(".task-del-btn")! as HTMLElement).onclick = () => {
      todoApp.deleteTask(categoryId, Number(taskItem.dataset.taskId));
      taskRender();
    };

    taskList.insertAdjacentElement("beforeend", taskItem);
  });
}

function categoryRender() {
  const category = document.querySelector("#category")! as HTMLSelectElement;
  category.innerHTML = "";

  if (todoApp.todoList.length === 0) {
    category.nextElementSibling!.remove();
    return;
  }

  todoApp.todoList.forEach((todo) => {
    const option = document.createElement("option");

    option.value = String(todo.categoryId);
    option.text = todo.categoryName;

    category.insertAdjacentElement("beforeend", option);
  });

  if (todoApp.todoList.length > 0 && !category.nextElementSibling) {
    category.insertAdjacentHTML(
      "afterend",
      `<span>
        <span class="category-edit-btn">&#9997;</span>
        <span class="category-del-btn">&#10060;</span>
       </span>`
    );

    (
      category.parentElement!.querySelector(
        ".category-edit-btn"
      )! as HTMLElement
    ).onclick = () => {
      const value = getUserInputValue();
      if (!value) return;

      todoApp.updateCategoryName(getCategory()!, getUserInputValue()!);
      categoryRender();
      taskRender();
    };

    (
      category.parentElement!.querySelector(".category-del-btn")! as HTMLElement
    ).onclick = () => {
      todoApp.deleteCategory(getCategory()!);

      categoryRender();
      taskRender();
    };
  }
}

(document.querySelector("#category")! as HTMLSelectElement).addEventListener(
  "change",
  () => {
    taskRender();
  }
);

document.querySelector("#addBtn")!.addEventListener("click", () => {
  const text = getUserInputValue();

  if (!text) return;

  if (getTargetValue() === "Category") {
    todoApp.createCategory(text);
    categoryRender();
  } else {
    const category = getCategory();
    if (!category) return;

    todoApp.createTask(category, text);
    taskRender();
  }
});
