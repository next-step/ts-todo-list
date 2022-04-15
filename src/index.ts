import Todo from "./Todo";
import Todos from "./Todos";

const template = ({ id, content, category, tags, complete }) => {
  return `<li data-id=${id}>
            <div>${content}</div>
            <span>카테고리: ${category}</span>
            <span>태그: ${tags.join(", ")}</span>
            <button class="delete">삭제</button>
            <button class="toggle">${complete ? "완료" : "미완료"}</button>
          </li>`;
};

const App = () => {
  const $form = document.querySelector("form");
  const $ul = document.querySelector("ul");
  const $removeAll = document.querySelector(".remove-all");

  const app = new Todos();

  const render = () => {
    console.log(app);
    $ul.innerHTML = app.todos.map((todo) => template({ ...todo })).join("");
  };

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const content = e.target["content"].value;
    const category = e.target["category"].value;
    const tags = e.target["tags"].value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    app.addTodo(new Todo({ content, category, tags }));

    render();
  });

  $ul.addEventListener("click", ({ target }) => {
    if (target instanceof Element) {
      if (target.classList.contains("delete")) {
        const todoId = target.parentElement.dataset.id;
        app.removeTodoById(todoId);
        render();
      }

      if (target.classList.contains("toggle")) {
        const todoId = target.parentElement.dataset.id;
        const todo = app.findTodoById(todoId)[0];
        console.log(todo);
        app.updateTodoById(
          new Todo({
            ...todo,
            complete: !todo.complete,
          })
        );
        render();
      }
    }
  });

  $removeAll.addEventListener("click", () => {
    app.removeAllTodo();
    render();
  });
};

window.onload = () => {
  App();
};
