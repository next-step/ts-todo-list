import Todos from "./model/todos.js";

const BIG = "big";
const MEDIUM = "medium";
const SAMLL = "small";

function printMessage(message, size) {
  switch (size) {
    case BIG:
      console.log("");
      console.log(`%c${message}`, "font-size: 20px; font-weight: bold");
      break;
    case MEDIUM:
      console.log("");
      console.log(`%c${message}`, "font-size: 14px; font-weight: bold");
      break;
    case SAMLL:
      console.log("");
      console.log(`%c${message}`, "font-size: 12px; font-weight: bold");
      break;
  }
}

printMessage("🚀🚀🚀Todo 리스트를 시행합니다.🚀🚀🚀", BIG);
const todos = new Todos([]);

printMessage("✅ 할 일을 추가할 수 있다", MEDIUM);
todos.addTodo("할일1");
todos.addTodo("할일2");
todos.addTodo("할일3");
printMessage("❌ 태그를 추가할 수 있다.", MEDIUM);

printMessage("✅ 내용없이 추가할 수 없다.", MEDIUM);
todos.addTodo("");

printMessage("✅ 모든 할 일을 조회할 수 있다.", MEDIUM);
todos.getAllTodos();

printMessage("✅ ID를 기반으로 특정 할 일을 조회할 수 있다", MEDIUM);
todos.getTodo(0);

printMessage("📝 ID를 제외한 모든 속성을 수정할 수 있다.", MEDIUM);
printMessage("✅ 이름을 수정한다.", SAMLL);
todos.updateTodoTitle(0, "수정된 할일1");
printMessage("❌ 카테고리를 수정한다.", SAMLL);
todos.updateTodoCategory(0, "수정된 카테고리1");
printMessage("✅ 상태를 변경한다.", SAMLL);
todos.toggleTodoFinished(0);
printMessage("❌ 특정 할 일의 특정 태그를 수정할 수 있다.", SAMLL);
todos.updateTodoTags(0, "수정된 태그");

printMessage("❌ 특정 할 일의 특정 태그를 삭제할 수 있다.", MEDIUM);
printMessage("✅ 특정 할 일의 모든 태그를 삭제할 수 있다.", MEDIUM);
todos.removeAllTags(0);

printMessage("✅ ID를 기반으로 특정 할 일을 삭제할 수 있다.", MEDIUM);
todos.deleteTodo(0);
printMessage("✅ 모든 할 일을 제거할 수 있다.", MEDIUM);
todos.deleteAllTodos(0);

console.log("");
