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

const $ = (selector: string): HTMLElement | null =>
  document.querySelector(selector);
const $$ = (selector: string): NodeListOf<Element> | null =>
  document.querySelectorAll(selector);

function App() {
  const todos = new Todos();

  const addTag = () => {
    const tagName: string | null = $('#new-todo-tag')?.value;
    const newTag = new Tag({ id: Date.now(), name: tagName });

    if (!newTag) {
      $('#new-todo-tag')?.focus();
      return;
    }

    const $tagLi = document.createElement('li');
    $tagLi.innerHTML = getTagTemplate(newTag);
    $('#new-todo-tags')?.append($tagLi);
    $('#new-todo-tag')?.value = '';
    $('#new-todo-tag')?.focus();
  };

  const clearTodo = () => {
    $('#new-todo-content').value = '';
    $('#new-todo-category').value = '';
    $('#new-todo-tag').value = '';
  };

  const clearTag = () => {
    $('#new-todo-tags').innerHTML = '';
  };

  const addTodo = () => {
    const newTags: typeof Tag[] = [];
    $('#new-todo-tags')?.childNodes.forEach($tagEl => {
      newTags.push(
        new Tag({ id: Date.now(), name: $tagEl.textContent.trim() })
      );
    });

    const newTodo = new Todo({
      id: Date.now(),
      content: $('#new-todo-content').value,
      complete: false,
      category: $('#new-todo-category').value,
      tags: newTags,
    });

    todos.addTodo(newTodo);
    const $todoLi = document.createElement('li');
    $todoLi.dataset.todoId = newTodo.id;
    $todoLi.innerHTML = getTodoTemplate(newTodo);
    $('.todos')?.append($todoLi);
    clearTodo();
    clearTag();
  };

  const init = () => {
    $('#app').innerHTML = initialTemplate;
  };

  const addEventListeners = () => {
    $('#addTodo')?.addEventListener('click', e => {
      e.preventDefault();
      addTodo();
    });
    $('#addTag')?.addEventListener('click', e => {
      e.preventDefault();
      addTag();
    });
  };

  init();
  addEventListeners();
}

App();
