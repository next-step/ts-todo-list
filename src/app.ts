import { TodoApp } from "./TodoApp.js"
import { Todo } from "./Todo.js"
import { Label } from "./Label.js"

console.log("====================");
console.log("=== TodoApp 생성 ===");
console.log("====================");

const todoApp = new TodoApp();
console.log(todoApp.todoList);

console.log("==============");
console.log("=== CREATE ===");
console.log("==============");

console.log("=== 할 일을 추가할 수 있다. (addTodo) ===");
todoApp.addTodo(new Todo(todoApp.createUniqueId(), '테스트할일내용1'));
todoApp.addTodo(new Todo(todoApp.createUniqueId(), '테스트할일내용2'));
todoApp.addTodo(new Todo(todoApp.createUniqueId(), ''));
const [firstTodo, secondTodo] = todoApp.todoList;
console.log(todoApp.todoList);

console.log("=== 라벨 등록 (addTodoLabelByTodoId) ===");
// console.log(" Todo ID: " + todoApp.addTodoLabelByTodoId(secondTodo.info.id, new Label(1, '두번째 테스트라벨내용1')));
// console.log(" Todo ID: " + todoApp.addTodoLabelByTodoId(secondTodo.info.id, new Label(2, '두번째 테스트라벨내용2')));
// console.log(" Todo ID: " + todoApp.addTodoLabelByTodoId(firstTodo.info.id, new Label(1, '첫번째 테스트라벨내용1')));
// todoApp.addTodoLabelByTodoId(-1, new Label(1, '첫번째 테스트라벨내용1'));
console.log(todoApp.todoList);

console.log("==============");
console.log("=== UPDATE ===");
console.log("==============");

console.log("=== 할일 내용 변경 (mutateTodoContentById) ===")
todoApp.mutateTodoContentById(secondTodo.info.id, '할일 내용 변경!!');
console.log(todoApp.todoList);

console.log("=== 완료 여부 변경 (mutateTodoStatusById) ===")
todoApp.mutateTodoStatusById(secondTodo.info.id);
console.log(todoApp.todoList);

console.log("==============");
console.log("=== DELETE ===");
console.log("==============");

console.log("=== 특정 할 일의 특정 라벨를 삭제할 수 있다. (deleteTodoLabelByLabelId) ===");
console.log(" Todo ID: " + todoApp.deleteTodoLabelByLabelId(secondTodo.info.id, 2));
console.log(" Todo ID: " + todoApp.deleteTodoLabelByLabelId(secondTodo.info.id, 1));
todoApp.deleteTodoLabelByLabelId(-1, 2);
console.log(todoApp.todoList);

console.log("=== ID를 기반으로 특정 할 일을 삭제할 수 있다. (deleteTodoById) === ");
console.log(" Todo ID: " + todoApp.deleteTodoById(secondTodo.info.id));
console.log(" Todo ID: " + todoApp.deleteTodoById(secondTodo.info.id));
console.log(todoApp.todoList);

console.log("=== 모든 할 일을 제거할 수 있다. (clearTodoList) ===");
todoApp.clearTodoList();
console.log(todoApp.todoList);

