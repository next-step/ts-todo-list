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

const $ = (selector: string) => document.querySelector(selector) as HTMLElement;
const $$ = (selector: string): NodeListOf<Element> | null =>
  document.querySelectorAll(selector);

function App() {
  const todos = new Todos();

  const addTag = () => {
    const tagName: string | null = $('#new-todo-tag')?.value;
    if (!tagName) {
      $('#new-todo-tag')?.focus();
      return;
    }
    const newTag = new Tag({ id: Date.now(), name: tagName });
    const $tagLi: string = document.createElement('li');
    $tagLi.innerHTML = getTagTemplate(newTag);
    $('#new-todo-tags').append($tagLi);
    $('#new-todo-tag').value = '';
    $('#new-todo-tag').focus();
  };

  const clearTodo = () => {
    $('#new-todo-content').value = '';
    $('#new-todo-content').dataset.todoId = '';
    $('#new-todo-category').value = '';
    $('#new-todo-tag').value = '';
    $('#new-todo-tags').innerHTML = '';
  };

  const clearTag = () => {
    $('#new-todo-tags').innerHTML = '';
  };

  const addTodo = () => {
    const newTags: Tag[] = [];
    $('#new-todo-tags')?.childNodes.forEach($tagEl => {
      newTags.push(
        new Tag({ id: Date.now(), name: $tagEl.textContent.trim() })
      );
    });

    const newTodo = new Todo({
      id: Date.now(),
      content: $('#new-todo-content').value || '',
      complete: false,
      category: $('#new-todo-category').value || '',
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
      newTags.push(
        new Tag({ id: Date.now(), name: $tagEl.textContent.trim() })
      );
    });

    const newTodo = new Todo({
      id: Number(todoId),
      content: $('#new-todo-content').value,
      complete: false,
      category: $('#new-todo-category').value,
      tags: newTags,
    });

    todos.updateTodoById(newTodo);
    const $todoLi = document.createElement('li');
    $todoLi.dataset.todoId = String(newTodo.id);
    $todoLi.innerHTML = getTodoTemplate(newTodo);
    $todo?.replaceWith($todoLi);
    clearTodo();
  };

  const init = () => {
    $('#app').innerHTML = initialTemplate;
  };

  const addEventListeners = () => {
    $('#addTodoBtn').addEventListener('click', (e: Event) => {
      e.preventDefault();

      const todoId: string | undefined = $('#new-todo-content').dataset.todoId;

      if (todoId) {
        updateTodo(todoId);
        return;
      }

      addTodo();
    });

    $('#addTag').addEventListener('click', () => {
      addTag();
    });

    $('.todos').addEventListener('click', (e: Event) => {
      const target = e.target as HTMLTextAreaElement;
      const $li: HTMLElement | null = target.closest('li');

      if (!$li) return;

      if (target.classList.contains('toggle')) {
        const todoId = Number($li.dataset.todoId);
        const todo: Todo | undefined = todos.findTodoById(todoId);
        todo.complete = !todo.complete;
      }

      if (target.classList.contains('todo__name')) {
        $('#new-todo-content').value = todo.content;
        $('#new-todo-category').value = todo.category;
        $('#new-todo-content').dataset.todoId = todo.id;
      }

      if (target.classList.contains('toggle')) {
        const todoId = Number($li.dataset.todoId);
        const todo: Todo | undefined = todos.findTodoById(todoId);

        if (!todo) return;
        todo.complete = !todo.complete;
      }

      if (target.classList.contains('fa-trash-alt')) {
        const todoId = Number($li.dataset.todoId);
        todos.removeTodoById(todoId);
        $li.remove();
      }

      if (target.classList.contains('fa-minus')) {
        const tagId = $li.dataset.tagId;
        const todoId = $li.parentElement?.dataset.todoId;
        todos.removeTagByTodoIdAndTagId(todoId, tagId);
        $li.remove();
      }
    });

    $('#delete-all-todo')?.addEventListener('click', () => {
      todos.removeAllTodo();
      $('.todos').innerHTML = '';
    });
  };

  init();
  addEventListeners();
}

App();
