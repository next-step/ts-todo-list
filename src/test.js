const { todos, addTodo, getTodos, editTodo, deleteTodo } = require('./todo')

const todoGenerator = () => {
  return {
    id: todos.length + 1 || 1,
    title: `TODO - ${Math.trunc(Math.random() * 100) + 1}`,
    completed: false,
    content: 'TODO',
  }
}

class Test {
  constructor() {
    this.initData()

    this.create()
    this.read()
    this.update()
    this.delete()
  }

  initData() {
    addTodo(todoGenerator())
    addTodo(todoGenerator())
  }

  create() {
    console.log('[CREATE] ------------------')
    console.log('1. 할 일을 추가할 수 있다.')
    console.table(getTodos())
    addTodo(todoGenerator())
    console.table(getTodos())

    console.log('2. 내용없이 추가할 수 없다')
    addTodo((todoGenerator().content = ''))
    console.table(getTodos())
  }
  read() {
    console.log('[READ]------------------')
    console.log('1. 모든 할 일을 조회할 수 있다.')
    console.table(getTodos())
    console.log('2. ID를 기반으로 특정 할 일을 조회할 수 있다')
    const findId = 1
    console.table(getTodos().find((todo) => todo.id === findId))
  }

  update() {
    console.log('[UPDATE]------------------')
    console.log('1. ID를 제외한 모든 속성을 수정할 수 있다.')
    const newTodo = {
      ...todoGenerator(),
      id: 1,
    }
    editTodo(newTodo)
    console.table(getTodos())
  }

  delete() {
    console.log('[DELETE]------------------')
    console.log('1. ID를 기반으로 특정 할 일을 삭제할 수 있다.')
    console.log(`삭제 결과 : ${deleteTodo(1)}`)
    console.table(getTodos())
    console.log('2. 모든 할 일을 제거할 수 있다.')
    getTodos().forEach((todo) => {
      deleteTodo(todo.id)
    })
    console.table(getTodos())
  }
}

new Test()
