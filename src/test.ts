// import { TodoItem, Tag, TodoList } from "./index.js";

const javascript = new Tag("javascript");
const typescript = new Tag("typesciprt");
const react = new Tag("react");

const todoItem = new TodoItem("할 일", "오늘 할 일");
const todoItemWithTags = new TodoItem("할 일", "내일 할 일", [
  javascript,
  typescript,
  react,
]);

const todoList = new TodoList();

console.log("To Do 미션 기능 구현 테스트");

console.log("새로운 할 일 추가");
todoList.addItem(todoItem);
todoList.addItem(todoItemWithTags);
console.log(
  "----------------------------------------------------------------------------"
);

console.log("전체 할 일 목록 조회");
todoList.readItemAll();
console.log(
  "----------------------------------------------------------------------------"
);

console.log("특정 할 일 조회");
todoList.readItemById(todoItem.id);
console.log(
  "----------------------------------------------------------------------------"
);

console.log("특정 할 일 수정");
todoList.updateItemById(todoItem.id, {
  content: "투 두",
  isFinished: true,
  category: "어제 한 일",
  tags: [javascript, typescript],
});
console.log(
  "----------------------------------------------------------------------------"
);

console.log("특정 할 일의 특정 태그 수정");
todoList.updateTagById(todoItemWithTags.id, javascript.id, "jquery");
console.log(
  "----------------------------------------------------------------------------"
);

console.log("특정 할 일 제거");
todoList.deleteItemById(todoItem.id);
console.log(
  "----------------------------------------------------------------------------"
);

console.log("특정 할 일의 특정 태그 삭제");
todoList.deleteTagById(todoItemWithTags.id, typescript.id);
console.log(
  "----------------------------------------------------------------------------"
);

console.log("특정 할 일의 모든 태그 삭제");
todoList.deleteTagAll(todoItemWithTags.id);
console.log(
  "----------------------------------------------------------------------------"
);

console.log("모든 할 일 제거");
todoList.deleteItemAll();
console.log(
  "----------------------------------------------------------------------------"
);
