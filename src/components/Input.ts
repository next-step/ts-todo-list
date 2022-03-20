import {IComponent} from "../App";

class Input implements IComponent {
  $target: HTMLDivElement;
  state: unknown;
  
  constructor({ $target }) {
    this.$target = $target;
    this.setState()
  }
  setState() {
    this.render();
  }
  render() {

  }
}

export default Input;