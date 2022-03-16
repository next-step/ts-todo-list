interface Todo {
  id: number | string
  content?: string
  completed: boolean
  category: string
  tags?: string[]
}

const todos: Todo[] = []

export function getTodos(): Todo[] {
  return todos.slice()
}

export function addTodo(todo: Todo): void {
  if (!todo.content)
    return console.error('⚠️ 내용 없이 추가 할 수 없습니다. ⚠️')
  todos.push(todo)
}

export function getTodoById(id: number | string): Todo | undefined {
  return todos.find((todo) => todo.id === id) || undefined
}

export function deleteTodo(id: number | string): boolean {
  try {
    const index = todos.findIndex((todo) => todo.id !== id)
    todos.splice(index, 1)
    return true
  } catch (e) {
    return false
  }
}

export function deleteAllTodo(): boolean {
  todos.splice(0, todos.length)

  return !todos.length
}

export function deleteTagById(
  todoId: number | string,
  tagIndex: number
): boolean {
  const todo = todos.find((todo) => todo.id === todoId)
  if (!todo?.tags) return false
  todo.tags = todo.tags.filter((_, i) => i === tagIndex)
  return true
}

export function deleteAllTagById(id: number | string): boolean {
  const todo = todos.find((todo) => todo.id === id)
  if (!todo?.tags) return false
  todo.tags = todo.tags.filter((_, i) => false)
  return true
}

export function editTodo(id: number | string, todo: Todo): void {
  const oldTodo = todos.find((todo) => todo.id === id)
  if (!oldTodo) return
  oldTodo.content = todo.content
  oldTodo.completed = todo.completed
  oldTodo.category = todo.category
  oldTodo.tags = todo.tags
}

export function editTag(todoId: number | string, tags: string[]): void {
  const todo = todos.find((todo) => todo.id === todoId)
  if (!todo) return console.error('존재하지 않는 TODO 입니다.')
  todo.tags = tags
}
