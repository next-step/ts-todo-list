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
    const eventArguments = [
      { target, className: 'updateTodo', fn: this.updateTodo },
      { target, className: 'updateTag', fn: this.updateTag },
      { target, className: 'deleteTodo', fn: this.deleteTodo },
      { target, className: 'tag', fn: this.deleteTag },
      { target, className: 'deleteTags', fn: this.deleteTags },
    ]
    eventArguments.forEach((item) => {
      this.handleClickListDelegationEvent(item)
    })
    this.handleClickCancel(target)
  }

  handleClickCreateTodo = () => {
    const content = this.todoComponents.$nameInput.value
    const category = this.todoComponents.$categoryInput.value
    if (!content || !category) {
      alert('할일과 카테고리 이름은 필수입니다.')
      return
    }
    const tagsValue = this.todoComponents.$tagInput.value
    const tags = tagsValue ? Array.from(new Set(tagsValue.split(' '))) : []
    const initTodoItem = { content, category, tags }
    this.TodoCollection.createTodo(new TodoItem(initTodoItem))
    this.render()
    this.resetInputs()
  }

  handleClickDeleteTodos = () => {
    this.TodoCollection.deleteTodos()
    this.render()
  }

  deleteTodo = (
    target: HTMLElement,
    todoItemId: number,
    todoElement: HTMLLIElement
  ) => {
    this.TodoCollection.deleteTodo(Number(todoItemId))
    todoElement.remove()
  }

  deleteTag = (target: HTMLElement, todoItemId: number) => {
    const tagName = target.innerText.trim().replace('#', '')
    this.TodoCollection.deleteTag(todoItemId, tagName)
    target.remove()
  }

  deleteTags = (target: HTMLElement, todoItemId: number) => {
    this.TodoCollection.deleteTags(todoItemId)
    this.render()
  }

  updateTodo = (
    target: HTMLElement,
    todoItemId: number,
    todoElement: HTMLLIElement
  ) => {
    const contentInputName = 'updateContentInput'
    const categoryInputName = 'updateCategoryInput'
    const tagsInputName = 'updateTagsInput'

    if (target.dataset.isEdit) {
      const content = (
        todoElement.querySelector(`.${contentInputName}`) as HTMLInputElement
      ).value
      const category = (
        todoElement.querySelector(`.${categoryInputName}`) as HTMLInputElement
      ).value
      if (!content || !category) {
        alert('할일과 카테고리 이름은 필수입니다.')
        return
      }
      const tagsValue = (
        todoElement.querySelector(`.${tagsInputName}`) as HTMLInputElement
      ).value
      const tags = tagsValue ? Array.from(new Set(tagsValue.split(' '))) : []
      this.TodoCollection.updateTodo(
        todoItemId,
        new TodoItem({ content, category, tags })
      )
      this.render()
      return
    }

    const inputTemplate = `<input type="text" class="${contentInputName}" placeholder="할일"/>
                        <input type="text" class="${categoryInputName}" placeholder="카테고리"/>
                        <input type="text" class="${tagsInputName}" placeholder="태그(띄어쓰기로 구분)"/>
                        <button class="cancel">취소</button>`
    const parent = target.parentElement as HTMLDivElement
    parent.insertAdjacentHTML('afterbegin', inputTemplate)
    target.dataset.isEdit = 'true'
  }

  updateTag = (
    target: HTMLElement,
    todoItemId: number,
    todoElement: HTMLLIElement
  ) => {
    const targetTagInputName = 'targetTagInput'
    const newTagInputName = 'newTagInput'
    if (target.dataset.isEdit) {
      const targetTagValue = (
        todoElement.querySelector(`.${targetTagInputName}`) as HTMLInputElement
      ).value
      const newTagValue = (
        todoElement.querySelector(`.${newTagInputName}`) as HTMLInputElement
      ).value
      this.TodoCollection.updateTag(todoItemId, targetTagValue, newTagValue)
      this.render()
      return
    }

    const inputTemplate = `<input type="text" class="${targetTagInputName}" placeholder="변경할 태그이름"/>
                        <input type="text" class="${newTagInputName}" placeholder="새로운 태그이름(띄어쓰기불가)"/>
                        <button class="cancel">취소</button>`
    const parent = target.parentElement as HTMLDivElement
    parent.insertAdjacentHTML('afterbegin', inputTemplate)
    target.dataset.isEdit = 'true'
  }

  handleClickCancel = (target: HTMLElement) => {
    const isRemoveTagsButton = target.className === 'cancel'
    if (!isRemoveTagsButton) return
    this.render()
  }

  handleClickListDelegationEvent = ({
    className,
    target,
    fn,
  }: {
    className: string
    target: HTMLElement
    fn: (
      target: HTMLElement,
      todoItemId: number,
      todoElement: HTMLLIElement
    ) => void
  }) => {
    const isMatchElement = target.className === className
    if (!isMatchElement) return
    const todoElement = target.closest('.todoItem')
    if (!todoElement) return
    const todoItemId = Number((todoElement as HTMLLIElement).dataset.id)
    fn(target, todoItemId, todoElement as HTMLLIElement)
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
        <div>
         <button class="updateTag">태그 수정</button><button class="deleteTags">태그 전체 삭제</button>
        </div>
        <div>
         <button class="updateTodo">할일 수정</button> <button class="deleteTodo">할일 삭제</button>
        </div>
      </li>`
    return template
  }
}
