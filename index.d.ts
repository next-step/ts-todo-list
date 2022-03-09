export interface Todo {
  id: number | string
  title: string
  complete: boolean
}

export type Todos = Todo[]

export type GetTodos = () => Todos

export type AddTodo = (todo: Todo) => void

export type DeleteTodo = (id: number | string) => boolean

export type EditTodo = (todo: Todo) => void
