import TodoApplication from "./TodoApplication.js";
class Component {
    constructor($element, todoApplication) {
        this.$element = $element;
        this.todoApplication = todoApplication;
        this.render();
        this.bindEvent();
    }
    render() { }
    bindEvent() { }
}
class App extends Component {
    constructor($element, todoApplication) {
        super($element, todoApplication);
    }
    rerender() {
        this.render();
        this.bindEvent();
    }
    bindEvent() {
        const $form = document.querySelector('.todo-form');
        const $input = document.querySelector('#todo-input');
        const $list = document.querySelector('.todo-list');
        $form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.todoApplication.addTodo();
            this.rerender();
        });
        $input.addEventListener('input', (event) => {
            this.todoApplication.changeTask(event.target.value);
        });
        $list.addEventListener('click', (event) => {
            var _a, _b;
            const target = event.target;
            if (target.nodeName === 'SPAN' || target.nodeName === 'S') {
                this.todoApplication.checkTodo((Number((_a = target.closest('li')) === null || _a === void 0 ? void 0 : _a.dataset.id)));
                this.rerender();
            }
            if (target.nodeName === 'BUTTON') {
                this.todoApplication.deleteToto(Number((_b = target.closest('li')) === null || _b === void 0 ? void 0 : _b.dataset.id));
                this.rerender();
            }
        });
    }
    render() {
        this.$element.innerHTML = `
      <form class="todo-form">
        <div>
          <label for="todo-input">할 일</label>
          <input id="todo-input" type="text" />
        </div>
        <button type="submit" class="todo-add-button">추가</button>
      </form>
      <ul class="todo-list">
        ${this.todoApplication.todoList.map(({ id, task, done }) => done ?
            `<li data-id=${id}>
              <s>
                <span>${task}</span>
              </s>
              <button type="button" class="todo-delete-button">삭제</button>
             </li>` :
            `<li data-id=${id}>
              <span>${task}</span>
              <button type="button" class="todo-delete-button">삭제</button>
             </li>`).join('')}
      </ul>
    `;
    }
}
new App(document.querySelector('#root'), new TodoApplication({
    newId: 0,
    task: '',
    todoList: [],
}));
