declare const Todo: {
  id: number | string
  content?: string
  completed: boolean
  category: string
  tags?: string[]
}

export function getTodos(): typeof Todo[]

export function getTodoById(id: number | string): typeof Todo | undefined

export function addTodo(todo: typeof Todo): void

export function deleteTodo(id: number | string): boolean

export function deleteAllTodo(): boolean

export function deleteTagById(id: number | string): boolean

export function deleteAllTagById(id: number | string): boolean

export function editTodo(id: number | string, todo: typeof Todo): void

export function editTag(id: number | string, tags: string[]): void
