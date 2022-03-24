import {
  addTodo,
  addTodoAfterValidation,
  createTodo,
  deleteTodo,
  deleteTodoAll,
  todoList,
  updateTag,
  updateTodo,
} from './todo.js';
import { Todo } from '../@types/todo';
import TodoList from './TodoList.js';

export default class Binder {
  Todo: TodoList;

  constructor() {
    this.Todo = new TodoList();

    this.Todo.bindOnClickAddTodoButton(this.addNewTodo);
    this.Todo.bindOnClickDeleteAllTodoButton(this.deleteAllTodo);
    this.Todo.bindOnClickTodoItem(this.mutateTodo);

    this.Todo.render(todoList);
  }

  mutateTodo = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const todoId = target.parentElement?.dataset.todoId;

    if (!todoId) return;

    switch (target.className) {
      case 'todo-content':
        const newTodoContent = prompt('새로운 할 일 내용을 입력해주세요.');
        if (!newTodoContent) return;

        updateTodo(todoId, { content: newTodoContent });

        this.Todo.render(todoList);
        break;

      case 'todo-tag':
        const targetTag = target.textContent;

        const newTagName = prompt('새로운 태그 이름을 입력하세요.');
        if (!newTagName || !targetTag) return;

        updateTag(todoId, targetTag, newTagName);
        this.Todo.render(todoList);
        break;

      case 'todo-delete-button':
        deleteTodo(todoId);
        this.Todo.render(todoList);
        break;
    }
  };

  addNewTodo = () => {
    const content: Todo['content'] = this.Todo.$todoContentInput.value;
    const category: Todo['category'] = this.Todo.$todoCategoryInput.value;
    const tags: Todo['tags'] = this.Todo.$todoTagsInput.value?.split(',').map((tag) => tag.trim());

    const newTodoProperties: Partial<Todo> = {};

    if (content) newTodoProperties.content = content;
    if (category) newTodoProperties.category = category;
    if (tags[0]) newTodoProperties.tags = tags;

    addTodoAfterValidation(createTodo(newTodoProperties), addTodo);
    this.Todo.render(todoList);
  };

  deleteAllTodo = () => {
    deleteTodoAll();
    this.Todo.render(todoList);
  };
}
