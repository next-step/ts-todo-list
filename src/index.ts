/**
 * 하나의 Todo가 들고 있는 데이터
 * @typedef {Object} ITodo
 * @property {number} id
 * @property {string} task
 * @property {boolean} done
 */

/**
 * Todo 클래스에서 사용되는 상태
 * @typedef {Object} StateType
 * @property {number} newId - todo를 생성할 때 필요한 unique id
 * @property {string} task - todo를 생성할 때 필요한 할 일
 * @property {ITodo[]} todoList - 생성된 todo를 관리하는 배열
 */

interface ITodo {
  id: number;
  task: string;
  done: boolean;
}

interface TodoApplicationState {
  newId: number;
  task: string;
  todoList: ITodo[];
}

class TodoApplication {
  /**
   * @member {StateType}
   */
  private _state: ITodo;
  private _todoList: ITodo[];

  /**
   * @param {StateType} initialState - Todo 상태의 초기값
   */
  constructor(initialState: TodoApplicationState) {
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
  get todoList(): ITodo[] {
    return this._todoList;
  }

  /**
   * @param {string} newTask - 변경할 task 값
   */
  changeTask(newTask: string) {
    this._state.task = newTask;
  }

  addTodo() {
    this._todoList = [...this._todoList, this._state];
    this._state = { id: this._state.id + 1, task: '', done: false };
  }

  /**
   * @param {number} id - 삭제할 todo id 값
   */
  deleteToto(id: number) {
    this._todoList = this._todoList.filter((todo) => todo.id !== id);
  }

  /**
   * @param {number} id - 변경할 todo id 값
   * @param {string} changedTask - 변경할 todo task 값
   */
  changeTodo({ id, changedTask }: { id: number; changedTask: string }) {
    this._todoList = this._todoList.map((todo) =>
      todo.id === id ? { ...todo, task: changedTask } : todo
    );
  }

  /**
   * @param {number} id - 변경할 todo id 값
   */
  checkTodo(id: number) {
    this._todoList = this._todoList.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  }
}
