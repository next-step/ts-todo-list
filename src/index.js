import TodoApp from "./TodoApp.js";
import TodoItem from "./TodoItem.js";

const todoApp = new TodoApp();

// 할 일을 추가할 수 있다.
const todoItem1 = new TodoItem({
  id: todoApp.createTodoId(),
  content: "내용내용",
  isCompleted: false,
  category: "work",
  tags: ["work", "sad"],
});
console.log("1️⃣ 할 일을 추가할 수 있다. 원본: ", todoApp);
todoApp.addTodo(todoItem1);
console.log("1️⃣ 할 일을 추가할 수 있다. 추가 후: ", todoApp);

// 내용없이 추가할 수 없다.
const todoItem2 = new TodoItem({
  id: todoApp.createTodoId(),
  content: "",
  isCompleted: false,
  category: "work",
  tags: ["work", "sad"],
});
console.log("2️⃣ 내용없이 추가할 수 없다. 아래는 에러 메시지");
todoApp.addTodo(todoItem2);

// 모든 할 일을 조회할 수 있다.
console.log("3️⃣ 모든 할 일을 조회할 수 있다.", todoApp.getTodoList());

// ID를 기반으로 특정 할 일을 조회할 수 있다.
console.log(
  "4️⃣ ID를 기반으로 특정 할 일을 조회할 수 있다.",
  todoApp.searchTodo(1)
);

// ID를 기반으로 특정 할 일을 삭제할 수 있다.
console.log(
  "5️⃣ ID를 기반으로 특정 할 일을 삭제할 수 있다. 는 아쉽게도 설계되어있지 않아서 패스"
);

// 모든 할 일을 제거할 수 있다.
todoApp.clearTodoList();
console.log("6️⃣ 모든 할 일을 제거할 수 있다. 제거 후: ", todoApp);

// 특정 할 일의 특정 태그를 삭제할 수 있다.
const todoItem4 = new TodoItem({
  id: todoApp.createTodoId(),
  content: "내용내용",
  isCompleted: false,
  category: "work",
  tags: ["tag1", "tag2", "tag3"],
});
todoItem4.deleteTag("tag1");
console.log(
  "7️⃣ 특정 할 일의 특정 태그를 삭제할 수 있다. tag1 삭제 후: ",
  todoItem4
);

// 특정 할 일의 모든 태그를 제거할 수 있다.
const todoItem5 = new TodoItem({
  id: todoApp.createTodoId(),
  content: "내용내용",
  isCompleted: false,
  category: "work",
  tags: ["tag1", "tag2", "tag3"],
});
todoItem5.clearTags();
console.log(
  "8️⃣ 특정 할 일의 모든 태그를 제거할 수 있다. tag 모두 삭제 후: ",
  todoItem5
);

// 특정 할 일의 특정 태그를 수정할 수 있다.
const todoItem3 = new TodoItem({
  id: todoApp.createTodoId(),
  content: "내용내용",
  isCompleted: false,
  category: "work",
  tags: ["old tag", "old tag2"],
});
todoItem3.editTag("old tag", "new tag");
console.log(
  "9️⃣ 특정 할 일의 특정 태그를 수정할 수 있다. old tag를 new tag로 수정 후: ",
  todoItem3
);

// ID를 제외한 모든 속성을 수정할 수 있다.
// 요부분은, 인자를 받지 않도록 설계되어 있어서 에러가 나고 있습니당.
console.log(
  "🔟 ID를 제외한 모든 속성을 수정할 수 있다. 내용과 카테고리 수정 후: ",
  todoItem1.editTodo({
    content: "수정할 내용",
    category: "수정할 카테고리",
  })
);

// ID 속성은 수정할 수 없다.
// 요부분은, 인자를 받지 않도록 설계되어 있어서 에러가 나고 있습니당.
console.log("⏸ ID 속성은 수정할 수 없다. 아래는 에러 메시지");
const editedTodo2 = todoItem1.editTodo({ id: 444 });
