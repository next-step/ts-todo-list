interface TodoItem {
    id: number
    content: string
    finished: boolean
    category: CATEGORY
    tags?: string[]
}

export const enum CATEGORY {
    TODAY = "오늘 할 일",
    TOMORROW = "오늘 할 일",
    NEXT_WEEK = "오늘 할 일",
}

const todoList: TodoItem[] = [];

export function createTodo(id: number, content: string, finished: boolean, category: CATEGORY, tags?: string[]) {
    const todoItem = {id, content, finished, category, tags};
    todoList.push(todoItem);
}

export function readTodoList() {
    console.table(todoList);
}

export function readTodoDetail(id: number) {
    const targetItem = todoList.find((item) => item.id === id);

    console.table([targetItem]);
}

export function updateTodo(id: number, content?: string, finished?: boolean, category?: CATEGORY, tags?: string[]) {
    const targetItem = todoList.find((item) => item.id === id);

    if (!targetItem) return
    if (content) targetItem.content = content;
    if (finished) targetItem.finished = finished;
    if (category) targetItem.category = category;
    if (tags) targetItem.tags = tags;
}

export function updateTodoTag(id: number, selectedTag: string, tagValue: string) {
    const targetItem = todoList.find((item) => item.id === id);

    if (!targetItem?.tags) return

    const targetTagIndex = targetItem.tags.findIndex(
        (tag) => tag === selectedTag
    );

    if (!targetTagIndex) return

    targetItem.tags.splice(targetTagIndex, 1, tagValue);
}

export function deleteTodoDetail(id: number) {
    const targetItemIndex = todoList.findIndex((item) => item.id === id);

    todoList.splice(targetItemIndex, 1);
}

export function deleteTodoList() {
    todoList.splice(0, todoList.length);
}

export function deleteTodoTag(id: number, selectedTag: string) {
    const targetItem = todoList.find((item) => item.id === id);

    if (!targetItem?.tags) return

    const targetTagIndex = targetItem.tags.findIndex(
        (tag) => tag === selectedTag
    );

    if (!targetTagIndex) return

    targetItem.tags.splice(targetTagIndex, 1);
}

export function deleteTodoTagAll(id: number) {
    const targetItem = todoList.find((item) => item.id === id);

    if (!targetItem?.tags) return

    targetItem.tags.splice(0, todoList.length);
}
