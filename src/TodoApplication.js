/**
 * 하나의 Todo가 들고 있는 데이터
 * @typedef {Object} ITodo
 * @property {number} id
 * @property {string} task
 * @property {boolean} done
 */
export default class TodoApplication {
    /**
     * @param {StateType} initialState - Todo 상태의 초기값
     */
    constructor(initialState) {
        this._state = {
            id: initialState.newId,
            task: initialState.task,
            done: false,
        };
        this._todoList = initialState.todoList;
    }
    /**
     * @returns {ITodo[]}
     */
    get todoList() {
        return this._todoList;
    }
    get task() {
        return this._state.task;
    }
    /**
     * @param {string} newTask - 변경할 task 값
     */
    changeTask(newTask) {
        this._state.task = newTask;
    }
    addTodo() {
        this._todoList = [...this._todoList, this._state];
        this._state = { id: this._state.id + 1, task: '', done: false };
    }
    /**
     * @param {number} id - 삭제할 todo id 값
     */
    deleteToto(id) {
        this._todoList = this._todoList.filter((todo) => todo.id !== id);
    }
    /**
     * @param {number} id - 변경할 todo id 값
     * @param {string} changedTask - 변경할 todo task 값
     */
    changeTodo({ id, changedTask }) {
        this._todoList = this._todoList.map((todo) => todo.id === id ? Object.assign(Object.assign({}, todo), { task: changedTask }) : todo);
    }
    /**
     * @param {number} id - 변경할 todo id 값
     */
    checkTodo(id) {
        this._todoList = this._todoList.map((todo) => todo.id === id ? Object.assign(Object.assign({}, todo), { done: !todo.done }) : todo);
    }
}
