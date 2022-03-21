import TodoApplication from "./TodoApplication";

interface IComponent {
  render: () => void;
  bindEvent: () => void;
}

class Component implements IComponent {
  $element: HTMLElement;

  todoApplication: TodoApplication;

  constructor($element: HTMLElement, todoApplication: TodoApplication) {
    this.$element = $element;

    this.todoApplication = todoApplication;

    this.render();
    this.bindEvent();
  }

  render() {}
  bindEvent(){}
}


class App extends Component {
  constructor($element: HTMLElement, todoApplication: TodoApplication) {
    super($element, todoApplication);
  }

  rerender() {
    this.render();
    this.bindEvent();
  }

  bindEvent() {
    const $form = document.querySelector('.todo-form') as HTMLFormElement;
    const $input = document.querySelector('#todo-input') as HTMLInputElement;
    const $list = document.querySelector('.todo-list') as HTMLUListElement;

    $form.addEventListener('submit', (event) => {
      event.preventDefault();

      this.todoApplication.addTodo();

      this.rerender();
    })

    $input.addEventListener('input',(event) => {
      this.todoApplication.changeTask((event.target as HTMLInputElement).value);
    })

    $list.addEventListener('click', (event) => {
      const target = event.target as Element;

      if(target.nodeName === 'SPAN' || target.nodeName === 'S') {
        this.todoApplication.checkTodo((Number(target.closest('li')?.dataset.id)));

        this.rerender();
      }

      if(target.nodeName === 'BUTTON') {
        this.todoApplication.deleteToto(Number(target.closest('li')?.dataset.id));

        this.rerender();
      }
    })
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
        ${this.todoApplication.todoList.map(({ id, task, done }) => 
          done? 
            `<li data-id=${id}>
              <s>
                <span>${task}</span>
              </s>
              <button type="button" class="todo-delete-button">삭제</button>
             </li>` : 
            `<li data-id=${id}>
              <span>${task}</span>
              <button type="button" class="todo-delete-button">삭제</button>
             </li>`
        ).join('')}
      </ul>
    `;

  }
}

new App(
  document.querySelector('#root') as HTMLDivElement,
  new TodoApplication({
    newId: 0,
    task: '',
    todoList: [],
  })
);

