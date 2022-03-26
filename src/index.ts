/**
 * @file Todo를 구현하기 위한 문서입니다.
 * @author Dahye Shin
 * @see {@link https://github.com/dahye1013/ts-todo-list}
 */

import Tag from './Tag';
import Todo from './Todo';
import Todos from './Todos';

import {
  getTagTemplate,
  getTodoTemplate,
  initialTemplate,
} from './view/Template';

const $ = (selector: string) => <HTMLElement>document.querySelector(selector);

function App() {
  const todos = new Todos();

  const addTag = () => {
    const tagName: string | null = $('#new-todo-tag')?.value;
    if (!tagName) {
      $('#new-todo-tag')?.focus();
      return;
    }
    const newTag = new Tag({ id: Date.now(), name: tagName });
    const $tagLi = <HTMLLIElement>document.createElement('li');
    const $newTodoTag = <HTMLInputElement>$('#new-todo-tag');
    const $newTodoTags = <HTMLInputElement>$('#new-todo-tags');

    $tagLi.innerHTML = getTagTemplate(newTag);
    $newTodoTags.append($tagLi);
    $newTodoTag.value = '';
    $newTodoTag.focus();
  };

  const clearTodo = () => {
    const $newTodoContent = <HTMLInputElement>$('#new-todo-content');
    const $newTodoCategory = <HTMLInputElement>$('#new-todo-category');
    const $newTodoTag = <HTMLInputElement>$('#new-todo-tag');
    const $newTodoTags = <HTMLInputElement>$('#new-todo-tags');

    $newTodoContent.value = '';
    $newTodoContent.dataset.todoId = '';
    $newTodoCategory.value = '';

    $newTodoTag.value = '';
    $newTodoTags.innerHTML = '';
  };

  const clearTag = () => {
    $('#new-todo-tags').innerHTML = '';
  };

  const addTodo = () => {
    const newTags: Tag[] = [];
    $('#new-todo-tags')?.childNodes.forEach($tagEl => {
      const name: string | null =
        (<HTMLTextAreaElement>$tagEl)?.textContent || '';
      newTags.push(new Tag({ id: Date.now(), name }));
    });

    const content = (<HTMLInputElement>$('#new-todo-content')).value;
    const category = (<HTMLInputElement>$('#new-todo-content')).value;

    const newTodo = new Todo({
      id: Date.now(),
      content,
      complete: false,
      category,
      tags: newTags,
    });

    todos.addTodo(newTodo);
    const $todoLi = document.createElement('li');
    $todoLi.dataset.todoId = String(newTodo.id);
    $todoLi.innerHTML = getTodoTemplate(newTodo);
    $('.todos')?.append($todoLi);
    clearTodo();
    clearTag();
  };

  const updateTodo = (todoId: string): void => {
    const $todo = $(`li[data-todo-id="${todoId}"]`);

    const newTags: Tag[] = [];
    $('#new-todo-tags')?.childNodes.forEach($tagEl => {
      const name: string | null =
        (<HTMLTextAreaElement>$tagEl)?.textContent || '';
      newTags.push(new Tag({ id: Date.now(), name }));
    });

    const content = (<HTMLInputElement>$('#new-todo-content')).value;
    const category = (<HTMLInputElement>$('#new-todo-content')).value;

    const newTodo = new Todo({
      id: Number(todoId),
      content,
      complete: false,
      category,
      tags: newTags,
    });

    todos.updateTodoById(newTodo);
    const $todoLi = document.createElement('li');
    $todoLi.dataset.todoId = String(newTodo.id);
    $todoLi.innerHTML = getTodoTemplate(newTodo);
    $todo?.replaceWith($todoLi);
    clearTodo();
  };

  const toggleComplete = ($target: HTMLElement) => {
    const todoId = Number($target.dataset.todoId);
    const todo: Todo | undefined = todos.findTodoById(todoId);
    if (!todo) return;
    todo.complete = !todo.complete;
  };

  const loadSelectedTodo = ($target: HTMLElement) => {
    const todoId = Number($target.dataset.todoId);
    const todo: Todo | undefined = todos.findTodoById(todoId);
    if (!todo) return;
    const $newTodoContent = <HTMLInputElement>$('#new-todo-content');
    const $newTodoCategory = <HTMLInputElement>$('#new-todo-category');
    $newTodoContent.value = todo.content;
    $newTodoContent.dataset.todoId = String(todo.id);
    $newTodoCategory.value = todo.category;
  };

  const removeTodo = ($target: HTMLElement) => {
    const todoId = Number($target.dataset.todoId);
    todos.removeTodoById(todoId);
    $target.remove();
  };

  const removeTag = ($target: HTMLElement) => {
    const tagId = $target.dataset.tagId;
    const todoId = $target.parentElement?.dataset.todoId;
    todos.removeTagByTodoIdAndTagId(todoId, tagId);
    $target.remove();
  };

  const removeAllTogo = () => {
    todos.removeAllTodo();
    $('.todos').innerHTML = '';
  };

  const init = () => {
    $('#app').innerHTML = initialTemplate;
  };

  const addEventListeners = () => {
    $('#addTodoBtn').addEventListener('click', (e: Event) => {
      e.preventDefault();
      const todoId: string | undefined = (<HTMLInputElement>(
        $('#new-todo-content')
      )).dataset.todoId;
      todoId ? updateTodo(todoId) : addTodo();
    });

    $('#addTag').addEventListener('click', addTag);
    $('#delete-all-todo').addEventListener('click', removeAllTogo);

    $('.todos').addEventListener('click', (e: Event) => {
      const target = <HTMLElement>e.target;
      const $li: HTMLElement | null = target.closest('li');

      if (!$li) return;
      if (target.classList.contains('toggle')) toggleComplete($li);
      if (target.classList.contains('todo__name')) loadSelectedTodo($li);
      if (target.classList.contains('fa-trash-alt')) removeTodo($li);
      if (target.classList.contains('fa-minus')) removeTag($li);
    });
  };

  init();
  addEventListeners();
}

App();
