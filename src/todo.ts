import { Todo } from '../@types/todo';
import { uid } from './utils.js';

export const todoList: Todo[] = [];

export function createTodo(properties: Partial<Omit<Todo, 'id'>>): Todo {
  const defaultTodo: Todo = {
    id: uid(),
    content: '할 일 기본 값',
    isClear: false,
    category: '카테고리 기본 값',
  };

  const newTodo = { ...defaultTodo, ...properties };

  if (!addTodo(newTodo)) throw new Error('wrong todo');

  return newTodo;
}

export function addTodo(todo: Todo): boolean {
  const hasInformation = (target: string) => target.length > 0;

  const hasAllTagInformation = todo.tags?.every((tag) => hasInformation(tag));

  if (!hasInformation(todo.id)) return false;
  if (!hasInformation(todo.category)) return false;
  if (!hasInformation(todo.content)) return false;
  if (todo.tags) {
    if (!hasAllTagInformation) return false;
  }

  return true;
}

export function hasContent(todo: Todo): boolean {
  return todo.content.length > 0;
}

export function addTodoAfterValidation(todo: Todo, validationFn: (todo: Todo) => boolean) {
  if (!validationFn(todo)) return false;
  todoList.push(todo);
  getTodoList();
}

export function getTodoList(): Todo[] {
  return todoList;
}

export function updateTodo(todoId: string, updateProperty: Partial<Omit<Todo, 'id'>>): boolean {
  const targetIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (targetIndex === -1) return false;

  todoList[targetIndex] = { ...todoList[targetIndex], ...updateProperty };

  console.log(getTodoList());

  return true;
}

export function updateTag(todoId: string, targetTag: string, updateTag: string) {
  if (updateTag.length === 0) return false;

  const targetTodoIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (targetTodoIndex === -1) return false;

  const newTags = todoList[targetTodoIndex].tags;
  if (!newTags) return false;

  const targetTagIndex = newTags.findIndex((tag) => tag === targetTag);
  if (targetTagIndex === -1) return false;

  newTags[targetTagIndex] = updateTag;

  todoList[targetTodoIndex] = { ...todoList[targetTodoIndex], tags: newTags };

  console.log(getTodoList());
  return true;
}

export function deleteTodo(todoId: string): boolean {
  if (todoList.length === 0) return false;

  const targetIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (targetIndex === -1) return false;

  todoList.splice(targetIndex, 1);

  console.log(getTodoList());
  return true;
}

export function deleteTodoAll(): boolean {
  todoList.splice(0, todoList.length);

  console.log(getTodoList());
  return true;
}

export function deleteTag(todoId: string, targetTag: string): boolean {
  const targetTodoIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (targetTodoIndex === -1) return false;

  const newTags = todoList[targetTodoIndex].tags;
  if (!newTags) return false;

  const targetTagIndex = newTags.findIndex((tag) => tag === targetTag);
  if (targetTagIndex === -1) return false;

  newTags.splice(targetTagIndex, 1);

  todoList[targetTodoIndex] = { ...todoList[targetTodoIndex], tags: newTags };

  console.log(getTodoList());
  return true;
}

export function deleteTags(todoId: string): boolean {
  const targetIndex = todoList.findIndex(({ id }) => id === todoId);
  if (targetIndex === -1) return false;

  todoList[targetIndex].tags = [];

  console.log(getTodoList());
  return true;
}

// createTodo(properties: object): Todo;
const tmpTodo = createTodo({ content: 'hello', tags: ['redux', 'react', 'TS'] });
console.log(tmpTodo);

// addTodo(todo: Todo): boolean;
console.log(todoList.length);
console.log(addTodo(tmpTodo));
console.log(todoList.length);

// hasContent(todo: Todo): boolean;
console.log(hasContent(tmpTodo));
console.log(hasContent({ ...tmpTodo, content: '' }));

// addTodoAfterValidation(todo: Todo, validationFn: (todo: Todo) => boolean): boolean;
const invalidTodo = { ...tmpTodo, content: '' };

console.log(todoList.length);
console.log(addTodoAfterValidation(tmpTodo, addTodo));
console.log(todoList.length);

console.log(addTodoAfterValidation(invalidTodo, addTodo));
console.log(todoList.length);

// getTodoList(): Todo[];
console.log(getTodoList());

// updateTodo(todoId: string, updateProperty: object): boolean;
console.log(updateTodo(tmpTodo.id, { content: '새로운 할 일' }));
console.log(todoList[0]);

// updateTag(todoId: string, targetTag: string, updateTag: string): boolean;
console.log(todoList[0].tags);
console.log(updateTag(tmpTodo.id, 'redux', 'mobX'));
console.log(todoList[0].tags);

// deleteTodo(todoId: string): boolean;
console.log(todoList.length);
console.log(deleteTodo(tmpTodo.id));
console.log(todoList.length);

// deleteTodoAll(): void;
addTodoAfterValidation(tmpTodo, addTodo);
console.log(todoList.length);

deleteTodoAll();
console.log(todoList.length);

// deleteTag(todoId: string, targetTag: string): boolean;
addTodoAfterValidation(tmpTodo, addTodo);
console.log(todoList[0].tags);

console.log(deleteTag(tmpTodo.id, 'mobX'));
console.log(deleteTag(tmpTodo.id, '리액트'));
console.log(todoList[0].tags);

// deleteTags(todoId: string): boolean;
console.log(todoList[0].tags);
deleteTags(tmpTodo.id);
console.log(todoList[0].tags);
