/**
 * @file 시작하는 파일
 * @author tiaz0128(주환석)
 */

import TodoCollection from "./TodoCollection";
import TodoItem from "./Todo";

const todoCollection = new TodoCollection();

todoCollection.createTodo(new TodoItem({ content: "JSDoc배우기" }));
todoCollection.readTodos();
// TodoItem { content: 'JSDoc배우기', complete: false, category: 'etc', tags: [] }

todoCollection.createTodo(
  new TodoItem({
    content: "TS배우기",
    complete: false,
    category: "TS",
    tags: ["TS", "TypeScript"],
  })
);
todoCollection.readTodos();
// TodoItem { content: 'JSDoc배우기', complete: false, category: 'etc', tags: [] }
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [ 'TS', 'TypeScript' ] }

todoCollection.updateTodo(
  1,
  new TodoItem({ content: "JSDoc배움", complete: true })
);
todoCollection.readTodos();
// TodoItem { content: 'JSDoc배움', complete: true, category: 'etc', tags: [] }
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [ 'TS', 'TypeScript' ] }

todoCollection.updateTag(2, "TS", "타입");
todoCollection.readTodos();
// TodoItem { content: 'JSDoc배움', complete: true, category: 'etc', tags: [] }
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [ '타입', 'TypeScript' ] }

todoCollection.deleteTag(2, "타입");
todoCollection.readTodos();
// TodoItem { content: 'JSDoc배움', complete: true, category: 'etc', tags: [] }
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [ 'TypeScript' ] }

todoCollection.deleteTags(2);
todoCollection.readTodos();
// TodoItem { content: 'JSDoc배움', complete: true, category: 'etc', tags: [] }
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [] }

todoCollection.deleteTodo(1);
todoCollection.readTodos();
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [] }

todoCollection.deleteTodos();
todoCollection.readTodos();
// 해당하는 할일 없음
