import TodoItem from '../Todo'
import { TodoComponents } from './type'
import type { initTodoItemType } from 'todos'

export default class TodoView {
  todoComponents: TodoComponents
  TodoCollection: TodoCollectionType

  constructor(
    todoComponents: TodoComponents,
    TodoCollection: TodoCollectionType
  ) {
    this.todoComponents = todoComponents
    this.TodoCollection = TodoCollection
  }

  initEvent() {
    this.todoComponents.$createButton.addEventListener(
      'click',
      this.handleClickCreateTodo
    )
    this.todoComponents.$removeButton.addEventListener(
      'click',
      this.handleClickDeleteTodos
    )
    this.todoComponents.$list.addEventListener(
      'click',
      this.handleClickTodoList
    )
  }

  handleClickTodoList = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    this.handleClickDeleteTodo(target)
    this.handleClickDeleteTags(target)
    this.handleClickDeleteTag(target)
  }

  handleClickCreateTodo = () => {
    const content = this.todoComponents.$nameInput.value
    const category = this.todoComponents.$categoryInput.value
    if (!content || !category) {
      alert('할일과 카테고리 이름은 필수입니다.')
      return
    }
    const tagsValue = this.todoComponents.$tagInput.value
    const tags = tagsValue ? tagsValue.split(' ') : []
    const initTodoItem = { content, category, tags }
    this.TodoCollection.createTodo(new TodoItem(initTodoItem))
    this.render()
    this.resetInputs()
  }

  handleClickDeleteTodo = (target: HTMLElement) => {
    const isRemoveButton = target.className === 'deleteTodo'
    if (!isRemoveButton) return
    const todoElement = target.closest('.todoItem')
    if (!todoElement) return
    this.TodoCollection.deleteTodo(
      Number((todoElement as HTMLLIElement).dataset.id)
    )
    todoElement.remove()
  }

  handleClickDeleteTodos = () => {
    this.TodoCollection.deleteTodos()
    this.render()
  }

  handleClickUpdateEnd = (target: HTMLElement) => {}

  handleClickDeleteTag = (target: HTMLElement) => {
    const isTag = target.className === 'tag'
    if (!isTag) return
    const todoElement = target.closest('.todoItem')
    if (!todoElement) return
    const todoItemId = Number((todoElement as HTMLLIElement).dataset.id)
    const tagName = target.innerText.trim().replace('#', '')
    this.TodoCollection.deleteTag(todoItemId, tagName)
    target.remove()
  }

  handleClickDeleteTags = (target: HTMLElement) => {
    const isRemoveTagsButton = target.className === 'deleteTags'
    if (!isRemoveTagsButton) return
    const todoElement = target.closest('.todoItem')
    if (!todoElement) return
    const todoItemId = Number((todoElement as HTMLLIElement).dataset.id)
    this.TodoCollection.deleteTags(todoItemId)
    this.render()
  }

  resetInputs() {
    this.todoComponents.$nameInput.value = ''
    this.todoComponents.$categoryInput.value = ''
    this.todoComponents.$tagInput.value = ''
  }

  render() {
    let templates = []
    for (const [id, todoItem] of this.TodoCollection.todoList.entries()) {
      templates.push(this.makeTemplate(id, todoItem))
    }
    this.todoComponents.$list.innerHTML = templates.join('')
  }

  makeTemplate(
    id: number,
    { content, category, tags, complete }: initTodoItemType
  ) {
    const template = `
      <li class="todoItem" data-id="${id}">
        <h3>${category}</h3>
        <div>
          <span class="todoContent" style="${
            complete ? `text-decoration: underline` : ''
          }">${content}</span> 
        </div>
        ${
          tags &&
          tags
            .map(
              (v) =>
                `<span class="tag" style="background: slateblue; color: white; margin-right: 4px">
                 #${v}
                </span>`
            )
            .join(' ')
        }
        <button class="deleteTags">태그 전체 삭제</button>
        <div>
          <button class="deleteTodo">할일 삭제</button>
        </div>
      </li>`
    return template
  }
}
