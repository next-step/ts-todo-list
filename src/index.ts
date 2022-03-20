import TodoApp from './Todo'

const todoApp = new TodoApp()
todoApp.readAllTodo('todo 객체 생성')

todoApp.createCategory('TS')
todoApp.readAllTodo('TS 카테고리 추가')

todoApp.createTask(1, 'step 1: JSDoc 추상화하기')
todoApp.readAllTodo('TS 카테고리 - task 1 추가')

todoApp.createTask(1, 'step 2: TS 로 변환하기')
todoApp.readAllTodo('TS 카테고리 - task 2 추가')

todoApp.updateTask(1, 2, 'step 2: JSDoc 구현하기')
todoApp.readAllTodo('TS 카테고리 - task 2 변경')

todoApp.toggleCompleteTask(1, 2)
todoApp.readAllTodo('TS 카테고리 - task 2 isComplete 토글하기')

todoApp.deleteTask(1, 2)
todoApp.readAllTodo('TS 카테고리 - task 2 삭제하기')

todoApp.updateCategoryName(1, 'TypeScript')
todoApp.readAllTodo('TS -> TypeScript 로 카테고리 명칭 변경하기')

todoApp.deleteCategory(1)
todoApp.readAllTodo('TypeScript 카테고리 삭제하기')
