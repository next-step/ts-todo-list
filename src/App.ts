import { Tag } from "./@types/tag";
import { Todo } from "./@types/todo";

import {
  todos, tags, 
  getTodos, deleteTodos,
  getTodo, addTodo, updateTodo, deleteTodo,
  createTag, updateTag
} from "./index";

import Input from "./components/Input";

export interface IComponent {
  $target: HTMLDivElement;
  state: any;
  setState: (next:unknown) => void;
  render: () => void;
}
class App implements IComponent {
  $target: HTMLDivElement;
  state: {todos: Todo[], tags: Tag[]}

  constructor({ $target }){
    this.$target = $target;
    this.state = null;
    this.setState({
      todos: [],
      tags: []
    });
  }
  setState(payload): void {
    switch(payload.type) {
      case "todoCreate": {
        this.state = {...this.state, todos: [...this.state.todos, payload.todo]}
      }
      case "todoUpdate": {
         const targetIdx = this.state.todos.findIndex(todo => {
          todo.id === payload.todo.id
        });
        this.state.todos[targetIdx] = payload.todo;
      }
      case "todoDelete": {
        const targetIdx = this.state.todos.findIndex(todo => {
          todo.id === payload.todo.id
        });
        this.state.todos = [...this.state.todos.slice(0, targetIdx), ...this.state.todos.slice(targetIdx + 1, this.state.todos.length)]
      }
      case "todosDelete": {
        this.state = {...this.state, todos: []}
      }
      case "tagCreate": {
        this.state = {...this.state, tags: [...this.state.tags, payload.tag]}
      }
      case "tagUpdate": {
        const targetIdx = this.state.tags.findIndex(todo => {
          todo.id === payload.tag.id
        });
        this.state.tags[targetIdx] = payload.tag;
      }
      case "tagDelete": {
        const targetIdx = this.state.tags.findIndex(tag => {
          tag.id === payload.tag.id
        });
        this.state.tags = [...this.state.tags.slice(0, targetIdx), ...this.state.tags.slice(targetIdx + 1, this.state.todos.length)]
      }
      case "tagsDelete": {
        this.state = {...this.state, tags: []}
      }
      default:
        this.state = this.state;
    }
    this.render();
  }
  handleChange(payload) {
    this.setState(payload)
  }
  render(): void {
    const $TodoInput = document.createElement("div");
    $TodoInput.id = "todoInput";
    new Input({$target: $TodoInput});
    this.$target.append($TodoInput);

    const $TagInput = document.createElement("div");
    $TagInput.id = "tagInput";
    new Input({$target: $TagInput});
    this.$target.append($TagInput);

  }

}

export default App;