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
const todoList = [tmpTodo];

// CREATE
/**
 * @function createTodo
 * @param {Object} properties
 * @description 속성 검사 후 Todo 타입 객체 반환
 * @returns {Todo}
 */
export function createTodo(properties) {
  if (!addTodo(properties)) throw new Error('wrong todo');

  return properties;
}

/**
 * done
 * @function addTodo
 * @param {Todo} todo
 * @description 할 일을 추가할 수 있다.
 */
export function addTodo(todo) {
  const isObject = (todo) => todo.constructor === Object;

  const hasValidKeys = () => {
    const requiredKeys = ['id', 'content', 'category', 'isClear'];
    const optionalKey = ['tags'];

    const keysOfTarget = Object.keys(todo);
    if (keysOfTarget.length === 4) {
      const hasAllRequiredKeys = keysOfTarget.every((key) => requiredKeys.includes(key));
      if (!hasAllRequiredKeys) return false;
    }

    if (keysOfTarget.length === 5) {
      const validKeys = [...requiredKeys, ...optionalKey];
      const hasAllValidKeys = keysOfTarget.every((key) => validKeys.includes(key));
      if (!hasAllValidKeys) return false;
    }

    return true;
  };

  const hasValidValueType = () => {
    const isString = (target) => typeof target === 'string';
    const isArray = (target) => Array.isArray(target);
    const isBoolean = (target) => typeof target === 'boolean';
    const isPureStringArray = (target) => target.every((item) => isString(item));
    const hasInformation = (target) => target.length > 0;

    const stringPropertyList = ['id', 'content', 'category'];
    const booleanProperty = ['isClear'];
    const arrayProperty = ['tags'];

    const haveValidStringValues = stringPropertyList.every((key) => isString(todo[key]) && hasInformation(todo[key]));
    const haveValidBooleanValues = booleanProperty.every((key) => isBoolean(todo[key]));

    const hasTagsProperty = Object.keys(todo).includes('tags');
    if (hasTagsProperty) {
      const haveValidArrayValues = arrayProperty.every((key) => isArray(todo[key]));
      const isPureStringTags = isPureStringArray(todo.tags);
      const allTagHasInformation = todo['tags'].every((tag) => hasInformation(tag));

      if (!haveValidArrayValues) return false;
      if (!isPureStringTags) return false;
      if (!allTagHasInformation) return false;
    }

    if (!haveValidStringValues) return false;
    if (!haveValidBooleanValues) return false;

    return true;
  };

  return isObject(todo) && hasValidKeys(todo) && hasValidValueType(todo);
}

/**
 - [] 검사 받는(더해질 에정인) 값이 object가 아니라면 실패
 - [] key 값중 id, content, isClear, category 중 하나라도 없으면 실패
 - [] tags 속성은 없어도 통과
 - [] id, content, isClear, category, tags 외 다른 프로퍼티 있으면 실패
 - [] id, content, category 값이 문자가 아닌 경우 실패(boolean, array, objcet, number인 경우 실패)
 - [] isClear 값이 boolean 이 아닌경우 실패
 - [] tags가 array가 아닌 경우 실패
 - [] 모든 key들의 value의 길이 0이라면 실패
 - [] tags 배열의 tag값 중 하나라도 문자열이 아니면 실패
 - [] tags 배열의 tag값 중 하나라도 길이가 0이면 실패('')
 */

/**
 * done
 * @function hasContent
 * @param {Todo} todo
 * @returns {boolean} - content 존재 여부
 * @description todo 객체에 content 내용 있는지 확인하는 함수
 */
export function hasContent(todo) {
  return addTodo(todo);
}

// [] todo가 Todo validation(addTodo)에 실패한다면 실패
// [] todo의 content 길이가 0이면 실패

/**
 * done
 * @function addTodoAfterValidation
 * @param {Todo} todo
 * @param {Object} validationFn - Todo 속성 validationFn 함수
 * @returns {boolean} - Todo 추가 성공 여부
 * @description 내용없이 추가할 수 없다.
 */
function addTodoAfterValidation(todo, validationFn) {
  if (!validationFn(todo)) return false;
  todoList.push(todo);
  getTodoList();
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
  if (typeof todoId !== 'string') throw new Error('wrong');

  const res = todoList.find((todo) => todo.id === todoId);
  if (res) return res;

  throw new Error('wrong');
}

// [] todoId가 string이 아니면 실패(에러)
// [] todoList에 todoId와 일치하는 정보가 없으면 실패(에러)
// [] todoId와 일치하는 값이 todoList에 있으면 -> 그 todo 리턴

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
  if (typeof todoId !== 'string') return false;
  if (todoId !== updateProperty.id) return false;
  if (!addTodo(updateProperty)) return false;

  const targetIndex = todoList.findIndex((todo) => todo.id === updateProperty.id);
  if (targetIndex === -1) return false;

  todoList[targetIndex] = updateProperty;

  getTodoList();
  return true;
}

// [] todoId가 문자열이 아니라면 false 리턴
// [] updateProperty가 올바른 정보가 아니라면 return false
// [] todoList에 일치하는 todoId가 없는 경우 return false
// [] todoId와 updateProperty의 id의 정보가 다르면 return false
// [] todoList에 일치하는 todoId가 있다면 updateProperty로 업데이트
// [] 업데이트 완료하면 list출력하고, return false

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
  const isValidParameter = [todoId, targetTag, updateTag].every((i) => typeof i === 'string');
  if (!isValidParameter) return false;
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
 * [] 파라미터중에 문자열이 아닌 값이 있으면 false 리턴
 * [] 새로 입력 할 값의 길이가 0이면 false 리턴
 * [] 일치하는 id값이 없다면 false 리턴
 * [] 일치하는 태그가 없다면 false 리턴
 * [] 태그의 값을 변경하면 true 리턴
 * */

/**
 * done
 * @function deleteTodo
 * @param {string} todoId
 * @returns {boolean} - Todo 삭제 성공 여부
 * @description ID를 기반으로 특정 할 일을 삭제할 수 있다.
 */
function deleteTodo(todoId) {
  if (typeof todoId !== 'string') return false;
  if (todoList.length === 0) return false;

  const targetIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (targetIndex === -1) return false;

  todoList.splice(targetIndex, 1);

  getTodoList();
  return true;
}

/**
 * [] todoList가 빈 배열일 경우에는 false를 리턴한다
 * [] todoList에 입력받은 todoId가 있을경우 삭제하고 true를 리턴한다
 * [] todoId와 일치하는 정보가 없으면 false를 리턴한다
 * [] 삭제를 성공하고 todoList를 출력한다
 * */

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
 * [] 모든 todoList를 삭제한다.
 */

/**
 * done
 * @function deleteTag
 * @param {string} todoId
 * @param {string} targetTag
 * @returns {boolean} - tag 삭제 성공 여부
 * @description 특정 할 일의 특정 태그를 삭제할 수 있다.
 */
function deleteTag(todoId, targetTag) {
  const isStringParams = [todoId, targetTag].every((param) => typeof param === 'string');
  if (!isStringParams) return false;

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
 * [] todoId가, targetTag가 문자열이 아니라면 return false
 * [] todoList에 todoId와 일치하는 정보가 없으면 return false
 * [] target tags에 targetTag와 같은 tag가 없다면 return false
 * [] 일치하는 태그 정보가 있다면 삭제
 * [] 삭제하고 true를 리턴하고 todoList를 출력
 * */

/**
 * done
 * @function deleteTags
 * @param {string} todoId
 * @returns {boolean} - tags 삭제 성공 여부
 * @description 특정 할 일의 모든 태그를 제거할 수 있다.
 */
function deleteTags(todoId) {
  if (typeof todoId !== 'string') return false;

  const targetIndex = todoList.findIndex(({ id }) => id === todoId);
  if (targetIndex === -1) return false;

  todoList[targetIndex].tags = [];

  getTodoList();
  return true;
}

/**
 * [] todoId가 문자열이 아니라면 return false
 * [] todoList가 빈 배열이라면 return false
 * [] todoList에 tags가 있다면 모두 삭제
 * [] 삭제를 성공했으면 todoList출력하고 return true
 */
