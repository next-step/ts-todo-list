import {
    CATEGORY,
    createTodo,
    deleteTodoDetail,
    deleteTodoList,
    deleteTodoTag,
    deleteTodoTagAll,
    readTodoDetail,
    readTodoList,
    updateTodo,
    updateTodoTag
} from "./index";

console.log("To Do 미션 기능 구현 테스트")

console.log("----------------------------------------------------------------------------")
console.log("새로운 할 일 추가 및 전체 할 일 목록 조회")
createTodo(0, 'TODO-1', false, CATEGORY.TODAY, ['next', 'step'])
createTodo(1, 'TODO-2', false, CATEGORY.TOMORROW, ['java', 'script'])
createTodo(2, 'TODO-3', false, CATEGORY.NEXT_WEEK, ['poco', 'jang'])
readTodoList()

console.log("----------------------------------------------------------------------------")
console.log("특정 할 일 조회 - id: 0")
readTodoDetail(0)

console.log("----------------------------------------------------------------------------")
console.log("특정 할 일 수정 - id: 2, content: 'TODO-3' -> 'TODO-4'")
updateTodo(2, 'TODO-4')
readTodoList()

console.log("----------------------------------------------------------------------------")
console.log("특정 할 일의 특정 태그 수정 - id: 1, tag: 'java' -> 'type'")
updateTodoTag(1, 'java', 'type')
readTodoList()

console.log("----------------------------------------------------------------------------")
console.log("특정 할 일의 특정 태그 삭제 - id: 2, tag: 'jang'")
deleteTodoTag(2, 'jang')
readTodoList()

console.log("----------------------------------------------------------------------------")
console.log("특정 할 일의 모든 태그 삭제 - id: 0")
deleteTodoTagAll(0)
readTodoList()

console.log("----------------------------------------------------------------------------")
console.log("특정 할 일 제거 - id: 1")
deleteTodoDetail(1)
readTodoList()

console.log("----------------------------------------------------------------------------")
console.log("모든 할 일 제거")
deleteTodoList()
readTodoList()