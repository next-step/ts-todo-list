/**
 * @file TodoCollection 클래스 파일
 * @author tiaz0128(주환석)
 */

const TodoItem = require('./Todo.js')

/**
 * TodoCollection TodoItem 을 Map 형태로 관리하는 클래스
 * @class
 * @constructor
 * @public
 */
class TodoCollection {
  /**
   * @member {TodoListType}
   * */
  todoList

  /**
   * @member {number}
   * @default 1
   */
  nextId

  /**
   * @constructs
   * @param {void}
   * @todo todoList 는 Map, nextId 1부터 시작
   *
   * @see {@link TodoCollectionType}
   */
  constructor() {
    this.todoList = new Map()
    this.nextId = 1
  }

  /**
   * 할 일을 추가할 수 있다.
   * @param {TodoItem} todoItem TodoItem 객체
   * @returns {number} 추가된 TodoItem 아이디값, 실패시 -1 을 리턴
   
   * @todo TodoItem을 생성해서 nextId 를 키 값으로 todoList 에 set한다.
   * @todo 사용한 nextId은 1증가한다.
   * @todo 내용이 없는 경우 실패
   * @see {@link TodoItem} 참고
   */
  createTodo(todoItem) {
    if (!todoItem.content) return
    this.todoList.set(this.nextId, todoItem)
    this.nextId++
  }

  /**
   * 모든 할 일을 조회 할 수 있다.
   * @param {void}
   * @returns {void}
   *
   * @todo 할 일 없는 경우 '할 일 없음' 을 출력한다.
   * @see {@link TodoItem} printTodo 로 TodoItem 내용을 출력
   */
  readTodos() {
    if (!this.todoList.size) {
      console.log('할 일  없음')
      return
    }
    this.todoList.forEach((todoItem) => todoItem.printTodo())
  }

  /**
   * 특정 할 일을 조회할 수 있다.
   * @param {number} id TodoItem 아이디
   * @returns {void}
   *
   * @todo 해당 아이디가 없는 경우 '해당하는 할 일 없음' 을 출력한다.
   * @see {@link TodoItem} printTodo 로 TodoItem 내용을 출력
   */
  readTodo(id) {
    const todoItem = this.todoList.get(id)
    if (!todoItem) {
      console.log('해당하는 할 일 없음')
      return
    }
    todoItem.printTodo()
  }

  /**
   * TodoItem을 수정할 수 있다.
   * @param {number} id TodoItem 아이디
   * @param {TodoItem} todoItem 업데이트 할 새로운 TodoItem 객체
   * @return {TodoItem | null} 업데이트 된 TodoItem, 실패인 경우 null 을 리턴
   *
   * @todo 해당 아이디가 없는 경우 실패
   */
  updateTodo(id, todoItem) {
    if (!this.todoList.has(id)) {
      return null
    }
    this.todoList.set(id, todoItem)
    return todoItem
  }

  /**
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {number} id TodoItem 아이디
   * @param {string} targetTag 수정할 특정 태그
   * @param {string} newTag targetTag 를 변경하는 새로운 태그
   * @return {boolean} 성공시 true 실패시 false 를 리턴
   *
   * @todo 해당 아이디가 없는 경우 실패
   * @todo 해당 태그가 없는 경우 실패
   */
  updateTag(id, targetTag, newTag) {
    const todoItem = this.todoList.get(id)
    if (!todoItem) {
      return false
    }
    const targetTagIndex = todoItem.tags.indexOf(targetTag)
    const hasTargetTag = targetTagIndex !== -1
    if (!hasTargetTag) {
      return false
    }
    todoItem.tags[targetTagIndex] = newTag
  }

  /**
   * 모든 할 일을 제거할 수 있다.
   * @param {void}
   * @return {void}
   */
  deleteTodos() {
    this.todoList = new Map()
  }

  /**
   * 특정 할 일을 삭제할 수 있다.
   * @param {number} id TodoItem 아이디
   * @return {number} 성공시 삭제한 TodoItem 아이디를 리턴, 실패시 -1 을 리턴
   */
  deleteTodo(id) {
    if (!this.todoList.has(id)) {
      return -1
    }
    this.todoList.delete(id)
    return id
  }

  /**
   * 특정 할 일의 모든 태그를 삭제할 수 있다.
   * @param {number} id TodoItem 아이디
   * @return {void}
   *
   * @todo 해당 아이디가 없는 경우 '해당하는 할 일 없음' 을 출력한다.
   */
  deleteTags(id) {
    const todoItem = this.todoList.get(id)
    if (!todoItem) {
      console.log('해당하는 할 일 없음')
      return
    }
    todoItem.tags = []
  }

  /**
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @param {number} id TodoItem 아이디
   * @param {string} tag 삭제할 태그
   * @return {TodoItem | null} 업데이트 된 TodoItem, 실패인 경우 null 을 리턴
   *
   * @todo 해당 아이디가 없는 경우 실패
   * @todo 해당 태그가 없는 경우 실패
   */
  deleteTag(id, tag) {
    const todoItem = this.todoList.get(id)
    if (!todoItem) {
      return null
    }
    const targetTagIndex = todoItem.tags.indexOf(tag)
    const hasTargetTag = targetTagIndex !== -1
    if (!hasTargetTag) {
      return null
    }
    todoItem.tags.splice(targetTagIndex, 1)
    return todoItem
  }
}

const todoCollection = new TodoCollection()

todoCollection.createTodo(new TodoItem({ content: 'JSDoc배우기' }))
todoCollection.readTodos()
// TodoItem { content: 'JSDoc배우기', complete: false, category: 'etc', tags: [] }

todoCollection.createTodo(
  new TodoItem({
    content: 'TS배우기',
    complete: false,
    category: 'TS',
    tags: ['TS', 'TypeScript'],
  })
)
todoCollection.readTodos()
// TodoItem { content: 'JSDoc배우기', complete: false, category: 'etc', tags: [] }
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [ 'TS', 'TypeScript' ] }

todoCollection.updateTodo(
  1,
  new TodoItem({ content: 'JSDoc배움', complete: true })
)
todoCollection.readTodos()
// TodoItem { content: 'JSDoc배움', complete: true, category: 'etc', tags: [] }
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [ 'TS', 'TypeScript' ] }

todoCollection.updateTag(2, 'TS', '타입')
todoCollection.readTodos()
// TodoItem { content: 'JSDoc배움', complete: true, category: 'etc', tags: [] }
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [ '타입', 'TypeScript' ] }

todoCollection.deleteTag(2, '타입')
todoCollection.readTodos()
// TodoItem { content: 'JSDoc배움', complete: true, category: 'etc', tags: [] }
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [ 'TypeScript' ] }

todoCollection.deleteTags(2)
todoCollection.readTodos()
// TodoItem { content: 'JSDoc배움', complete: true, category: 'etc', tags: [] }
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [] }

todoCollection.deleteTodo(1)
todoCollection.readTodos()
// TodoItem { content: 'TS배우기', complete: false, category: 'TS', tags: [] }

todoCollection.deleteTodos()
todoCollection.readTodo()
// 해당하는 할일 없음
