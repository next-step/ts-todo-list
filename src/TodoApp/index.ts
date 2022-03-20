import { TodoElement } from '../TodoElement';
import { todoStatus } from '../TodoElement/types';

export class TodoApp {
  todoElements: TodoElement[] = [];
  nextId = 0;

  private idGenerator(): number {
    return this.nextId++;
  }

  addTodoElement(content: string, category: string) {
    const todoElement = new TodoElement(
      this.idGenerator(),
      content,
      'TODO',
      category
    );
    this.todoElements.push(todoElement);
    console.log(`log: add todoElement ${todoElement.info}`);
  }

  getTodoElementInfoById(todoElementId: number) {
    const targetElement = this.todoElements.find((e) => e.id === todoElementId);
    if (targetElement) {
      console.log(`log:get info -> ${targetElement.info}`);
      return targetElement.info;
    }

    return console.error('log:get info failed, no such element id');
  }

  getTodoElementInfoAll(formatter: (s: string) => string): string {
    console.log(`log:get every info of todo app`);
    return this.todoElements.reduce(
      (acc, e) => `${acc + formatter(e.info)}\n`,
      ''
    );
  }

  updateTodoElementById(
    todoElementId: number,
    content?: string,
    status?: todoStatus,
    category?: string
  ) {
    const victimElement = this.todoElements.find((e) => e.id === todoElementId);
    if (victimElement) {
      return victimElement.update(content, status, category);
    }
    return console.error('log:updated element failed, no such element id');
  }

  deleteTodoElementById(todoElementId: number) {
    this.todoElements = this.todoElements.filter((e) => e.id !== todoElementId);
    console.log(`log:deleted elementID ${todoElementId}`);
  }

  deleteTodoElementAll() {
    this.todoElements = [];
    console.log(`log:deleted every list of todoApp`);
  }

  addTodoElementTag(todoElementId: number, content: string) {
    const victimElement = this.todoElements.find((e) => e.id === todoElementId);
    if (victimElement) {
      return victimElement.addTag(content);
    }
    return console.error('log:add tag failed, no such element id');
  }

  deleteTodoElementTagByTagId(todoElementId: number, tagId: number) {
    const victimElement = this.todoElements.find((e) => e.id === todoElementId);
    if (victimElement) {
      return victimElement.deleteTagById(tagId);
    }
    console.log(`log: no such tag id`);
  }

  deleteTodoElementTagAll(todoElementId: number) {
    const victimElement = this.todoElements.find((e) => e.id === todoElementId);
    if (victimElement) {
      return victimElement.deleteTagAll();
    }
    console.log(`log: no such element id`);
  }
}
