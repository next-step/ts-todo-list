// 말그대로 보여주기만을 위한 심플 랜더러
import { TodoApp } from './TodoApp';
import { action, actionList } from './action';
import { getInputDomValueWithIdSelector } from './domUtil';

const todoApp = new TodoApp();
const todoConsole = document.querySelector('#todo-console') as HTMLDivElement;
const todoController = document.querySelector('#todo-controller') as HTMLDivElement;
const todoControllerArgs = document.querySelector(
  '#todo-controller-args'
) as HTMLDivElement;
const todoApplyButton = document.querySelector('#apply') as HTMLButtonElement;

let currentAction: action;

const renderTodoApp = () => {
  console.log(`<div>${todoApp.getTodoElementInfoAll((s) => `<div>${s}</div>`)}</div>`);
  todoConsole.innerHTML = `<div>${todoApp.getTodoElementInfoAll(
    (s) => `<div>${s}</div>`
  )}</div>`;
};

const renderArgs = () => {
  todoControllerArgs.innerHTML = `
    <div>
    <select id="action-select">
    <option> 액션을 선택해 주세요 </option>
    ${actionList.map((e) => `<option value=${e.actionName}>${e.actionName} </option>`)}
    </select>
    </div>`;
};

const renderInputs = (inputs?: string) => {
  todoController.innerHTML = inputs || '';
};

const renderTodoActionSelector = () => {
  const onSelectAction = (e: any) => {
    const action = actionList.find((o) => o.actionName === e.target.value);
    if (!action) return;

    currentAction = action;

    const inputs = Object.entries(action?.actionArgs).reduce(
      (acc, [_, name]) => acc + `${name} <input id=${name}></input>`,
      ''
    );
    renderInputs(inputs);
  };

  renderArgs();
  const selector = document.querySelector('#action-select') as HTMLSelectElement;
  selector.onchange = onSelectAction;
};

const onApply = () => {
  const doAction = () => {
    switch (currentAction.actionName) {
      case 'addTodoElement': {
        const content = getInputDomValueWithIdSelector(currentAction.actionArgs.arg1);
        const category = getInputDomValueWithIdSelector(currentAction.actionArgs.arg2);
        if (!content || !category) return;
        return todoApp.addTodoElement(content, category);
      }
      case 'deleteTodoElementAll': {
        return todoApp.deleteTodoElementAll();
      }
      case 'deleteTodoElementTagAll': {
        const todoElementId = getInputDomValueWithIdSelector(
          currentAction.actionArgs.arg1
        );
        return todoApp.deleteTodoElementTagAll(Number(todoElementId));
      }
      case 'deleteTodoElementById': {
        const todoElementId = getInputDomValueWithIdSelector(
          currentAction.actionArgs.arg1
        );
        return todoApp.deleteTodoElementById(Number(todoElementId));
      }
      case 'deleteTodoElementTagByTagId': {
        const todoElementId = getInputDomValueWithIdSelector(
          currentAction.actionArgs.arg1
        );
        const tagID = getInputDomValueWithIdSelector(currentAction.actionArgs.arg2);
        return todoApp.deleteTodoElementTagByTagId(Number(todoElementId), Number(tagID));
      }
      case 'addTodoElementTag': {
        const todoElementId = getInputDomValueWithIdSelector(
          currentAction.actionArgs.arg1
        );
        const tagContent = getInputDomValueWithIdSelector(currentAction.actionArgs.arg2);
        if (!tagContent) return;
        return todoApp.addTodoElementTag(Number(todoElementId), tagContent);
      }
      case 'updateTodoElementById': {
        const todoElementId = getInputDomValueWithIdSelector(
          currentAction.actionArgs.arg1
        );
        const content = getInputDomValueWithIdSelector(currentAction.actionArgs.arg2);
        const status = getInputDomValueWithIdSelector(currentAction.actionArgs.arg3);
        const category = getInputDomValueWithIdSelector(currentAction.actionArgs.arg4);
        return todoApp.updateTodoElementById(
          Number(todoElementId),
          content,
          status,
          category
        );
      }
      case 'getTodoElementInfoById': {
        const todoElementId = getInputDomValueWithIdSelector(
          currentAction.actionArgs.arg1
        );
        return todoApp.getTodoElementInfoById(Number(todoElementId));
      }
    }
  };
  doAction();
  renderTodoApp();
};

export const simpleRenderer = () => {
  renderTodoActionSelector();
  todoApplyButton.onclick = onApply;
};
