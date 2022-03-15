export type Task = {
  taskId: number
  task: string
  isCompleted: boolean
}
export type TodoItem = {
  categoryId: number
  categoryName: string
  tasks: Task[]
}
export type TodoList = TodoItem[]
export class Todo {
  todoList: TodoList
  nextTaskId: number
  nextCategoryId: number
  setIncreasingTaskId(): void
  getUniqueTaskId(): number
  createTask(categoryId: number, task: string): void
  updateTask(categoryId: number, taskId: number, task: string): void
  deleteTask(categoryId: number, taskId: number): void
  toggleCompleteTask(categoryId: number, taskId: number): void
  setIncreasingCategoryId(): void
  getUniqueCategoryId(): number
  createCategory(categoryName: string): void
  updateCategoryName(categoryId: number, categoryName: string): void
  deleteCategory(categoryId: number): void
  readAllTodo(message?: string): void
}
