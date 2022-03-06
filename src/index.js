/**
 * @file Todo를 구현하기 위한 문서입니다.
 * @author Dahye Shin
 * @see {@link https://github.com/dahye1013/ts-todo-list}
 */

import Tag from "./Tag.js";
import Todo from "./Todo.js";
import Todos from "./Todos.js";

const todos = new Todos();

console.log("🚀🚀🚀 TODO 동작 테스트 🚀🚀🚀");

todos.addTodo(
  new Todo({
    id: 1,
    content: "첫번째 Todo",
    complete: false,
    category: "카테고리1",
    tags: [
      new Tag({ id: 1, name: "태그1" }),
      new Tag({ id: 2, name: "태그2" }),
      new Tag({ id: 3, name: "태그3" }),
    ],
  })
);

todos.addTodo(
  new Todo({
    id: 2,
    content: "두번째 Todo",
    complete: false,
    category: "카테고리1",
    tags: [],
  })
);

todos.addTodo(
  new Todo({
    id: 3,
    content: "세번째 Todo",
    complete: false,
    category: "카테고리1",
    tags: [],
  })
);

todos.findAllTodos();

todos.findTodoById(1);

todos.removeTagByTodoIdAndTagId(1, 1);

todos.removeAllTagByTodoId(1);

todos.removeTodoById(1);

todos.removeAllTodo();
