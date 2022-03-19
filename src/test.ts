import {
  getTodos,
  addTodo,
  getTodoById,
  deleteTodo,
  deleteAllTodo,
  deleteTagById,
  deleteAllTagById,
  editTodo,
  editTag,
} from './index'

const todos = []
const randomNumber = (n: number) => Math.floor(Math.random() * n) + 1
const todoGenerator = (id: number | string) => ({
  id: id || 0,
  content: `TODO - ${randomNumber(100)}`,
  completed: false,
  category: `${randomNumber(10)}`,
  tags: Array.from(Array(randomNumber(3)).fill(0), (_, i) => `Tag${(i += 1)}`),
})

class Test {
  constructor() {
    this.initData()

    this.create()
    this.read()
    this.update()
    this.delete()
  }

  initData() {
    addTodo(todoGenerator(1))
    addTodo(todoGenerator(2))
  }

  create() {
    console.log('[CREATE] ------------------')
    console.log('1. 할 일을 추가할 수 있다.')
    addTodo(todoGenerator(3))
    console.table(getTodos())

    console.log('2. 내용없이 추가할 수 없다')
    console.table(getTodos())
  }
  read() {
    console.log('[READ]------------------')
    console.log('1. 모든 할 일을 조회할 수 있다.')
    console.table(getTodos())
    console.log('2. ID를 기반으로 특정 할 일을 조회할 수 있다')
    const findId = 1
    console.table(getTodoById(findId))
  }

  update() {
    console.log('[UPDATE]------------------')
    console.log('1. ID를 제외한 모든 속성을 수정할 수 있다.')
    const updatedTodo = {
      id: 1,
      content: `new Content `,
      completed: true,
      category: 'new Category',
      tags: ['new Tag'],
    }
    editTodo(1, { ...updatedTodo })
    console.table(getTodos())

    console.log('2. 태그를 수정할 수 있다.')
    const updatedTag = ['updateTag']
    editTag(1, updatedTag)
    console.table(getTodos())
  }

  delete() {
    console.log('[DELETE]------------------')
    console.log('1. ID를 기반으로 특정 할 일을 삭제할 수 있다.')
    console.log(`삭제 결과 : ${deleteTodo(1)}`)
    console.table(getTodos())
    console.log('2. 특정 태그를 삭제 할 수 있다.')
    console.log(`삭제 결과 : ${deleteTagById(1, 1)}`)
    console.table(getTodos())

    console.log('3. 아이디를 기반으로 태그를 전체 삭제 할 수 있다.')
    deleteAllTagById(3)

    console.table(getTodos())
    console.log('4. 모든 할 일을 제거할 수 있다.')
    deleteAllTodo()
    console.table(getTodos())
  }
}

new Test()
