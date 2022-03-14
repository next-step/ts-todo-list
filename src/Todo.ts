/**
 * @file Todo 클래스 파일
 * @author jeonyeonkyu(전연규)
 */
/// <reference lib="es2015" />
import { Task, TodoItem, TodoList } from '../@types/todo'

/**
 * @typedef {object} Task - 하나의 할일 객체
 * @property {number} taskId - 유니크한 아이디 (태스크 생성시 1씩 증가)
 * @property {string} task - 할일
 * @property {boolean} isCompleted - 완료된것이거나 완료되지 않은것 default = false
 */

/**
 * @typedef {object} TodoItem - 한 카테고리
 * @property {number} categoryId - 카테고리의 아이디 (카테고리 생성시 1씩 증가)
 * @property {string} categoryName - 카테고리 이름
 * @property {Task[]} tasks - 할일 객체들
 */

/**
 * @typedef {TodoItem[]} TodoList - 할일 목록 전체
 */

/**
 * Todo 클래스
 * @class
 * @constructor
 * @public
 */
class TodoApp {
  /**
   * @member {TodoList}
   */
  todoList: TodoList

  /**
   * @member {number}
   * @default 0
   */
  nextTaskId: number

  /**
   * @member {number}
   * @default 0
   */
  nextCategoryId: number

  constructor() {
    this.todoList = []
    this.nextTaskId = 0
    this.nextCategoryId = 0
  }

  /**
   * @description getUniqueTaskId함수를 호출하기전 nextTaskId를 증가시킵니다.
   * @returns {void}
   */
  setIncreasingTaskId() {
    this.nextTaskId++
  }

  /**
   * @description setIncreasingTaskId함수를 호출 후 nextTaskId를 리턴합니다.
   * @returns {number}
   */
  getUniqueTaskId() {
    this.setIncreasingTaskId()
    return this.nextTaskId
  }

  /**
   * @description TodoList배열 안에 있는 객체중 하나인 TodoItem객체 안에있는 배열인 tasks배열안에 Task객체를 생성합니다.
   * @param {number} categoryId
   * @param {string} task
   * @returns {void}
   */
  createTask(categoryId: number, task: string) {
    const targetTodoItemIndex = this.todoList.findIndex(
      (todoItem: TodoItem) => todoItem.categoryId === categoryId
    )
    this.todoList[targetTodoItemIndex].tasks.push({
      taskId: this.getUniqueTaskId(),
      task,
      isCompleted: false,
    })
  }

  /**
   * @description 하나의 Task객체에 task(할일)를 수정합니다.
   * @param {number} categoryId
   * @param {number} taskId
   * @param {string} task
   * @returns {void}
   */
  updateTask(categoryId: number, taskId: number, task: string) {
    const targetTodoItemIndex = this.todoList.findIndex(
      (todoItem: TodoItem) => todoItem.categoryId === categoryId
    )
    const tasks = this.todoList[targetTodoItemIndex].tasks
    const targetTaskIndex = tasks.findIndex(
      (task: Task) => task.taskId === taskId
    )

    tasks[targetTaskIndex].task = task
  }

  /**
   * @description 하나의 Task객체를 제거합니다.
   * @param {number} categoryId
   * @param {number} taskId
   * @returns {void}
   */
  deleteTask(categoryId: number, taskId: number) {
    const targetTodoItemIndex = this.todoList.findIndex(
      (todoItem: TodoItem) => todoItem.categoryId === categoryId
    )
    const tasks = this.todoList[targetTodoItemIndex].tasks
    const targetTaskIndex = tasks.findIndex(
      (task: Task) => task.taskId === taskId
    )

    tasks.splice(targetTaskIndex, targetTaskIndex + 1)
  }

  /**
   * @description Task객체의 isCompleted 속성이 true이면 false, false면 true로 수정합니다.
   * @param {number} categoryId
   * @param {number} taskId
   * @returns {void}
   */
  toggleCompleteTask(categoryId: number, taskId: number) {
    const targetTodoItemIndex = this.todoList.findIndex(
      (todoItem: TodoItem) => todoItem.categoryId === categoryId
    )
    const tasks = this.todoList[targetTodoItemIndex].tasks
    const targetTaskIndex = tasks.findIndex(
      (task: Task) => task.taskId === taskId
    )

    tasks[targetTaskIndex].isCompleted = !tasks[targetTaskIndex].isCompleted
  }

  /**
   * getUniqueCategoryId 호출하기전 nextCategoryId를 증가시킵니다.
   * @returns {void}
   */
  setIncreasingCategoryId() {
    this.nextCategoryId++
  }

  /**
   * @description setIncreasingCategoryId 함수를 호출 후 nextCategoryId를 리턴합니다.
   * @returns {number}
   */
  getUniqueCategoryId() {
    this.setIncreasingCategoryId()
    return this.nextCategoryId
  }

  /**
   * @description TodoList안에 새로운 카테고리 객체를 만듭니다.
   * @param {string} categoryName
   * @returns {void}
   */
  createCategory(categoryName: string) {
    this.todoList.push({
      categoryId: this.getUniqueCategoryId(),
      categoryName,
      tasks: [],
    })
  }

  /**
   * @description 같은 categoryId의 카테고리명을 수정합니다.
   * @param {number} categoryId
   * @param {string} categoryName
   * @returns {void}
   */
  updateCategoryName(categoryId: number, categoryName: string) {
    const targetTodoItemIndex = this.todoList.findIndex(
      (todoItem: TodoItem) => todoItem.categoryId === categoryId
    )
    this.todoList[targetTodoItemIndex].categoryName = categoryName
  }

  /**
   * @description 같은 categoryId의 카테고리명을 제거합니다.
   * @param {number} categoryId
   * @returns {void}
   */
  deleteCategory(categoryId: number) {
    const targetTodoItemIndex = this.todoList.findIndex(
      (todoItem: TodoItem) => todoItem.categoryId === categoryId
    )
    this.todoList.splice(targetTodoItemIndex, targetTodoItemIndex + 1)
  }

  /**
   * @description todoList를 콘솔에 출력합니다. (optional로 메시지 출력가능)
   * @param {string} [message]
   * @returns {void}
   */
  readAllTodo(message?: string) {
    if (message) console.log('\n' + message)
    console.log(JSON.stringify(this.todoList))
  }
}

export default TodoApp
