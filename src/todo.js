/**
 * @module Todo Module
 */

/**
 * Todo type definition
 * @typedef {Object} Todo
 * @property {string} id - 아이디(required)
 * @property {string} content - 내용(required)
 * @property {boolean} isClear - 완료여부(required)
 * @property {string} category - 카테고리(required)
 * @property {string[]} tags - 태그들(optional)
 */

/**
 * @property {Todo[]} todoList - Todo 객체 배열
 */
const todoList = [];

// CREATE
/**
 * @function createTodo
 * @param {Object} properties
 * @description 속성 검사 후 Todo 타입 객체 반환
 * @returns {Todo}
 */
function createTodo(properties) {
  addTodo(properties);

  return properties;
}

/**
 * done
 * @function addTodo
 * @param {Todo} todo
 * @description 할 일을 추가할 수 있다.
 */
function addTodo(todo) {
  const isObject = () => {
    if (!todo.constructor === Object) throw new Error('obj아님');

    return true;
  };

  const hasValidKeys = () => {
    const requiredKeys = ['id', 'content', 'category', 'isClear'];
    const optionalKey = ['tags'];

    const keysOfTarget = Object.keys(todo);
    if (keysOfTarget.length === 4) {
      const hasAllRequiredKeys = keysOfTarget.every((key) => requiredKeys.includes(key));
      if (!hasAllRequiredKeys) throw new Error('필수키를 가지고 있지 않음');

      return true;
    }

    if (keysOfTarget.length === 5) {
      const validKeys = [...requiredKeys, ...optionalKey];
      const hasAllValidKeys = keysOfTarget.every((key) => validKeys.includes(key));
      if (!hasAllValidKeys) throw new Error('올바른 키 정보가 아님');

      return true;
    }

    return false;
  };

  const hasValidValueType = () => {
    const isString = (target) => typeof target === 'string';
    const isArray = (target) => Array.isArray(target);
    const isBoolean = (target) => typeof target === 'boolean';
    const isPureStringArray = (target) => target.every((item) => isString(item));
    const hasInformation = (target) => target.length > 0;

    const stringKeys = ['id', 'content', 'category'];
    const booleanKeys = ['isClear'];
    const arrayKeys = ['tags'];

    const haveValidStringValues = stringKeys.every(
      (stringKey) => isString(todo[stringKey]) && hasInformation(todo[stringKey])
    );
    const haveValidBooleanValues = booleanKeys.every((stringKey) => isBoolean(todo[stringKey]));
    const haveValidArrayValues = arrayKeys.every(
      (stringKey) => isArray(todo[stringKey]) && hasInformation(todo[stringKey])
    );
    const isPureStringTags = isPureStringArray(todo.tags);

    switch (true) {
      case !haveValidStringValues:
        throw new Error(`${stringKeys} 중 잘못된 정보가 있어요ㅜ`);

      case !haveValidBooleanValues:
        throw new Error(`${booleanKeys} 중 잘못된 정보가 있어요ㅜㅜ`);

      case !haveValidArrayValues:
        throw new Error(`${arrayKeys} 중 잘못된 정보가 있어요ㅜ`);

      case !isPureStringTags:
        throw new Error('tag중 잘못된 정보가 있어요');

      default:
        return true;
    }
  };

  return isObject(todo) && hasValidKeys(todo) && hasValidValueType(todo);
}

/**
 * done
 * @function hasContent
 * @param {Todo} todo
 * @returns {boolean} - content 존재 여부
 * @description todo 객체에 content 내용 있는지 확인하는 함수
 */
function hasContent(todo) {
  return todo.content.length > 0;
}

/**
 * done
 * @function addTodoAfterValidation
 * @param {Todo} todo
 * @param {Object} validationFn - Todo 속성 validationFn 함수
 * @returns {boolean} - Todo 추가 성공 여부
 * @description 내용없이 추가할 수 없다.
 */
function addTodoAfterValidation(todo, validationFn) {
  try {
    validationFn(todo);
    todoList.push(todo);

    getTodoList();

    return true;
  } catch (error) {
    return false;
  }
}

// READ
/**
 * done
 * @function getTodoList
 * @returns {Todo[]}
 * @description 모든 할 일을 조회할 수 있다.
 */
function getTodoList() {
  if (todoList.length === 0) {
    console.log('할 일이 없습니다.');
  }

  todoList.forEach((todo) => {
    console.log(todo);
  });
}

/**
 * done
 * @function getTodo
 * @param {string} todoId
 * @returns {Todo}
 * @description ID를 기반으로 특정 할 일을 조회할 수 있다.
 */
function getTodo(todoId) {
  const res = todoList.find((todo) => todo.id === todoId);

  console.log(res || '잘못된 ID 입니다ㅜㅜ');
}

// UPDATE
/**
 * done
 * @function updateTodo
 * @param {string} todoId
 * @param {Object} updateProperty
 * @returns {boolean} - Todo 갱신 성공 여부
 * @description ID를 제외한 모든 속성을 수정할 수 있다.
 */
function updateTodo(todoId, updateProperty) {
  if (todoId === updateProperty.id) return false;

  const targetIndex = todoList.findIndex((todo) => todo.id === updateProperty.id);
  if (targetIndex === 1) return false;

  try {
    addTodo(updateProperty);
    todoList[targetIndex] = updateProperty;

    getTodoList();
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * done
 * @function updateTag
 * @param {string} todoId
 * @param {string} targetTag
 * @param {string} updateTag
 * @returns {boolean} - tag 갱신 성공 여부
 * @description 특정 할 일의 특정 태그를 수정할 수 있다.
 */
function updateTag(todoId, targetTag, updateTag) {
  if (updateTag.length === 0) return false;

  const targetTodoIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (targetTodoIndex === -1) return false;

  const newTags = todoList[targetTodoIndex].tags;
  const targetTagIndex = newTags.findIndex((tag) => tag === targetTag);
  if (targetTagIndex === -1) return false;

  newTags[targetTagIndex] = updateTag;

  todoList[targetTodoIndex] = { ...todoList[targetTodoIndex], tags: newTags };

  return true;
}

/**
 * done
 * @function deleteTodo
 * @param {string} todoId
 * @returns {boolean} - Todo 삭제 성공 여부
 * @description ID를 기반으로 특정 할 일을 삭제할 수 있다.
 */
function deleteTodo(todoId) {
  const targetIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (targetIndex === -1) return false;

  todoList.splice(targetIndex, 1);

  getTodoList();
  return true;
}

/**
 * done
 * @function deleteTodoAll
 * @description 모든 할 일을 제거할 수 있다.
 */
function deleteTodoAll() {
  todoList.splice(0, todoList.length);
  getTodoList();
}

/**
 * done
 * @function deleteTag
 * @param {string} todoId
 * @param {string} targetTag
 * @returns {boolean} - tag 삭제 성공 여부
 * @description 특정 할 일의 특정 태그를 삭제할 수 있다.
 */
function deleteTag(todoId, targetTag) {
  const targetTodoIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (targetTodoIndex === -1) return false;

  const newTags = todoList[targetTodoIndex].tags;
  const targetTagIndex = newTags.findIndex((tag) => tag === targetTag);
  if (targetTagIndex === -1) return false;

  newTags.splice(targetTagIndex, 1);

  todoList[targetTodoIndex] = { ...todoList[targetTodoIndex], tags: newTags };

  getTodoList();
  return true;
}

/**
 * done
 * @function deleteTags
 * @param {string} todoId
 * @returns {boolean} - tags 삭제 성공 여부
 * @description 특정 할 일의 모든 태그를 제거할 수 있다.
 */
function deleteTags(todoId) {
  const targetIndex = todoList.findIndex(({ id }) => id === todoId);
  if (targetIndex === -1) return false;

  todoList[targetIndex].tags = [];

  getTodoList();
  return true;
}
