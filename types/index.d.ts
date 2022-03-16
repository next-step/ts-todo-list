declare const Todo: {
  id: number | string
  title: string
  completed: boolean
}

export function getTodos(): typeof Todo[]

export function addTodo(todo: typeof Todo): void

export function deleteTodo(id: number | string): boolean

export function editTodo(todo: typeof Todo): void
