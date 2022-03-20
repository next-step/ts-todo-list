import TodoApp from "./Todo.js";
const todoApp = new TodoApp();
function getTargetValue() {
    return document.querySelector("#target").value;
}
function getUserInputValue() {
    const value = document.querySelector("#userInput");
    return value && value.value;
}
function getCategory() {
    const category = document.querySelector("#category");
    return category && Number(category.value);
}
function findIndex(categoryId) {
    return todoApp.todoList.findIndex((todo) => {
        return todo.categoryId === categoryId;
    });
}
function categoryRender() {
    const category = document.querySelector("#category");
    category.innerHTML = "";
    todoApp.todoList.map((todo) => {
        const option = document.createElement("option");
        option.value = String(todo.categoryId);
        option.text = todo.categoryName;
        category.insertAdjacentElement("beforeend", option);
    });
}
function taskRender() {
    const categoryId = getCategory();
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = "";
    todoApp.todoList[findIndex(categoryId)].tasks.map((task) => {
        const template = document.createElement("template");
        template.innerHTML = `<li>
                            <input type="checkbox"/>
                            <span></span>
                          </li>`;
        const taskItem = template.content.firstChild;
        taskItem.querySelector("span").textContent = task.task;
        taskItem.setAttribute("data-task-id", String(task.taskId));
        taskItem.querySelector("input").checked = task.isCompleted;
        taskItem.querySelector("input").onclick = () => {
            todoApp.toggleCompleteTask(categoryId, Number(taskItem.dataset.taskId));
        };
        taskList.insertAdjacentElement("beforeend", taskItem);
    });
}
document.querySelector("#category").addEventListener("change", () => {
    taskRender();
});
document.querySelector("#addBtn").addEventListener("click", () => {
    const text = getUserInputValue();
    if (!text)
        return;
    if (getTargetValue() === "Category") {
        todoApp.createCategory(text);
        categoryRender();
    }
    else {
        const category = getCategory();
        category && todoApp.createTask(category, text);
        category && taskRender();
    }
});
// todoApp.readAllTodo('todo 객체 생성')
// todoApp.createCategory('TS')
// todoApp.readAllTodo('TS 카테고리 추가')
// todoApp.createTask(1, 'step 1: JSDoc 추상화하기')
// todoApp.readAllTodo('TS 카테고리 - task 1 추가')
// todoApp.createTask(1, 'step 2: TS 로 변환하기')
// todoApp.readAllTodo('TS 카테고리 - task 2 추가')
// todoApp.updateTask(1, 2, 'step 2: JSDoc 구현하기')
// todoApp.readAllTodo('TS 카테고리 - task 2 변경')
// todoApp.toggleCompleteTask(1, 2)
// todoApp.readAllTodo('TS 카테고리 - task 2 isComplete 토글하기')
// todoApp.deleteTask(1, 2)
// todoApp.readAllTodo('TS 카테고리 - task 2 삭제하기')
// todoApp.updateCategoryName(1, 'TypeScript')
// todoApp.readAllTodo('TS -> TypeScript 로 카테고리 명칭 변경하기')
// todoApp.deleteCategory(1)
// todoApp.readAllTodo('TypeScript 카테고리 삭제하기')
