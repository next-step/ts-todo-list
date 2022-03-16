export interface Todo {
    id: string;
    content: string;
    isClear: boolean;
    category: string;
    tags?: string[];
}

// export const todoList: Todo[];
//
// export function createTodo(properties: object): Todo;
// export function addTodo(todo: Todo): boolean;
// export function hasContent(todo: Todo): boolean;
// export function addTodoAfterValidation(todo: Todo, validationFn: (todo: Todo) => boolean): boolean;
// export function getTodoList(): Todo[];
// export function updateTodo(todoId: string, updateProperty: object): boolean;
// export function updateTag(todoId: string, targetTag: string, updateTag: string): boolean;
// export function deleteTodo(todoId: string): boolean;
// export function deleteTodoAll(): void;
// export function deleteTag(todoId: string, targetTag: string): boolean;
// export function deleteTags(todoId: string): boolean;
