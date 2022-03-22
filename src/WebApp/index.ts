import TodoCollection from '../TodoCollection'
import TodoView from './TodoView'
import { TodoComponents } from './type'

const todoComponents: TodoComponents = {
  $nameInput: document.querySelector('.todo-name-input') as HTMLInputElement,
  $categoryInput: document.querySelector(
    '.todo-category-input'
  ) as HTMLInputElement,
  $tagInput: document.querySelector('.todo-tag-input') as HTMLInputElement,
  $createButton: document.querySelector(
    '.todo-create-button'
  ) as HTMLButtonElement,
  $removeButton: document.querySelector(
    '.todo-remove-button'
  ) as HTMLButtonElement,
  $list: document.querySelector('.todo-list') as HTMLUListElement,
}

const todoView = new TodoView(todoComponents, new TodoCollection())
todoView.initEvent()
