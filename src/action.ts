export type action = {
  actionName:
    | 'addTodoElement'
    | 'getTodoElementInfoById'
    | 'getTodoElementInfoAll'
    | 'updateTodoElementById'
    | 'deleteTodoElementById'
    | 'deleteTodoElementAll'
    | 'addTodoElementTag'
    | 'deleteTodoElementTagByTagId'
    | 'deleteTodoElementTagAll';
  actionArgs: actionArgs;
};

type actionArgs = {
  [key: string]: string;
};

export const addTodoElementAction: action = {
  actionName: 'addTodoElement',
  actionArgs: {
    arg1: 'content',
    arg2: 'category',
  },
};

export const getTodoElementInfoByIdAction: action = {
  actionName: 'getTodoElementInfoById',
  actionArgs: {
    arg1: 'todoElementId',
  },
};

export const getTodoElementInfoAllAction: action = {
  actionName: 'getTodoElementInfoAll',
  actionArgs: {},
};

export const updateTodoElementByIdAction: action = {
  actionName: 'updateTodoElementById',
  actionArgs: {
    arg1: 'todoElementId',
    arg2: 'content',
    arg3: 'status',
    arg4: 'category',
  },
};
export const deleteTodoElementByIdAction: action = {
  actionName: 'deleteTodoElementById',
  actionArgs: {
    arg1: 'todoElementId',
  },
};
export const deleteTodoElementAllAction: action = {
  actionName: 'deleteTodoElementAll',
  actionArgs: {},
};
export const addTodoElementTagAction: action = {
  actionName: 'addTodoElementTag',
  actionArgs: {
    arg1: 'todoElementId',
    arg2: 'content',
  },
};
export const deleteTodoElementTagByTagIdAction: action = {
  actionName: 'deleteTodoElementTagByTagId',
  actionArgs: {
    arg1: 'todoElementId',
    arg2: 'tagId',
  },
};

export const deleteTodoElementTagAllAction: action = {
  actionName: 'deleteTodoElementTagAll',
  actionArgs: {
    arg1: 'todoElementId',
  },
};

export const actionList = [
  addTodoElementAction,
  getTodoElementInfoByIdAction,
  getTodoElementInfoAllAction,
  updateTodoElementByIdAction,
  deleteTodoElementByIdAction,
  deleteTodoElementAllAction,
  addTodoElementTagAction,
  deleteTodoElementTagByTagIdAction,
  deleteTodoElementTagAllAction,
];
