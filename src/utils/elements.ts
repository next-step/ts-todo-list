const $ = (selector) => document.querySelector(selector);

const todoForm = $("#todo-form");
const todoInput = $("#todo-input");
const categoryInput = $("#category-input");
const tagsInput = $("#tags-input");
const searchInput = $("#search-input");
const createButton = $("#todo-create-button");
const removeAllButton = $("#remove-all-button");
const searchButton = $("#search-button");
const searchAllButton = $("#search-all-button");
const todoList = $("#todo-list");

export {
  todoForm,
  todoInput,
  categoryInput,
  tagsInput,
  searchInput,
  createButton,
  removeAllButton,
  searchButton,
  searchAllButton,
  todoList,
};
