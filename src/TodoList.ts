import { $ } from './utils.js';
import { Todo } from '../@types/todo';

export default class TodoList {
  $todoList: HTMLDivElement;
  $addTodoButton: HTMLButtonElement;
  $deleteAllTodoButton: HTMLButtonElement;
  $todoContentInput: HTMLInputElement;
  $todoCategoryInput: HTMLInputElement;
  $todoTagsInput: HTMLInputElement;

  constructor() {
    this.$todoList = $('#todo-list') as HTMLDivElement;
    this.$addTodoButton = $('#add-todo-button') as HTMLButtonElement;
    this.$deleteAllTodoButton = $('.delete-all-todo-button') as HTMLButtonElement;
    this.$todoContentInput = $('#todo-content-input') as HTMLInputElement;
    this.$todoCategoryInput = $('#todo-category-input') as HTMLInputElement;
    this.$todoTagsInput = $('#todo-tags-input') as HTMLInputElement;
  }

  bindOnClickDeleteAllTodoButton(handler: () => void) {
    this.$deleteAllTodoButton?.addEventListener('click', handler);
  }

  bindOnClickAddTodoButton(handler: () => void) {
    this.$addTodoButton?.addEventListener('click', handler);
  }

  bindOnClickTodoItem(handler: (event: MouseEvent) => void) {
    this.$todoList?.addEventListener('click', handler);
  }

  createTodoItemElement({ id, content, category, tags }: Partial<Todo>) {
    return `
    <div class="todo-item" data-todo-id=${id}>
      <span class="todo-is-done">X</span>
      ${content && `<span class="todo-content">${content}</span>`}
      ${category && `<span class="todo-tag">${category}</span>`}
      ${tags && tags.map((tag) => `<span class="todo-tag">${tag}</span>`)}
      <button class="todo-delete-button">삭제하기</button>
    </div> 
    `;
  }

  render(todoList: Todo[]): void {
    this.$todoList.replaceChildren();

    if (todoList.length === 0) {
      this.$todoList.innerHTML = `<div>할 일이 없습니다</div>`;
      return;
    }

    todoList.map(this.createTodoItemElement).forEach((i) => {
      this.$todoList.innerHTML += i;
    });
  }
}
