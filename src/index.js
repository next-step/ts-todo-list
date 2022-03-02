/**
 * @typedef TodoItem
 * @type {object}
 * @property {!number} id - 아이템 아이디
 * @property {!string} content - 아이템 할 일
 * @property {!boolean} finished - 아이템 완료 여부
 * @property {!string} category - 아이템이 포함된 카테고리
 * @property {?Array.<string>} tags - 아이템이 가지고 있는 태크들
 */

/**
 * 스토어
 * @constant {Array.<TodoItem>}
 */
const todoList = [];

/**
 * 카테고리
 * @constant {Array.<string>}
 * @default
 */
const category = ["오늘 할 일", "내일 할 일", "다음 주 할 일"];

/**
 * 입력 받은 아이디
 * @member {number}
 */
let id = 0;

/**
 * 입력 받은 할 일
 * @member {string}
 */
let content = "";

/**
 * 입력 받은 완료 여부
 * @member {boolean}
 */
let finished = false;

/**
 * 선택된 카테고리
 * @member {string}
 */
let selectedCategory = category[0];

/**
 * 입력 받은 태그 리스트
 * @member {Array.<string>}
 */
let tags = [];

/**
 * 수정 대상 태그
 * @member {string}
 */
let selectedTag = "";

/**
 * 새로 입력되는 태그 값
 * @member {string}
 */
let tagValue = "";

/**
 * 할 일 추가
 * @function
 * @param {!number} id - 입력 받은 아이디
 * @param {!string} content - 입력 받은 할 일
 * @param {!boolean} finished - 입력 받은 완료 여부
 * @param {!string} selectedCategory - 선택된 카테고리
 * @param {?Array.<string>} tags - 입력 받은 태그 리스트
 */
function createTodo(id, content, finished, selectedCategory, tags) {}

/**
 * 전체 할 일 가져오기
 * @function
 */
function readTodoList() {}

/**
 * 특정 할 일 가져오기
 * @function
 * @param {!number} id - 입력 받은 아이디
 */
function readTodoDetail(id) {}

/**
 * 할 일 수정
 * @function
 * @param {!number} id - 입력 받은 아이디
 * @param {?string} content - 입력 받은 할 일
 * @param {?boolean} finished - 입력 받은 완료 여부
 * @param {?string} selectedCategory - 선택된 카테고리
 * @param {?Array.<string>} tags - 입력 받은 태그 리스트
 */
function updateTodo(id, content, finished, selectedCategory, tags) {}

/**
 * 특정 할 일의 특정 태그 수정
 * @function
 * @param {!number} id - 입력 받은 아이디
 * @param {!string} selectedTag - 수정 대상 태그
 * @param {?string} tagValue - 새로 입력되는 태그 값
 */
function updateTodoTag(id, selectedTag, tagValue) {}

/**
 * 특정 할 일 제거
 * @function
 * @param {!number} id - 입력 받은 아이디
 */
function deleteTodoDetail(id) {}

/**
 * 전체 할 일 제거
 * @function
 */
function deleteTodoList() {}

/**
 * 특정 할 일의 특정 태그 제거
 * @function
 * @param {!number} id - 입력 받은 아이디
 * @param {!string} selectedTag - 수정 대상 태그
 */
function deleteTodoTag(id, selectedTag) {}

/**
 * 특정 할 일의 모든 태그 제거
 * @function
 * @param {!number} id - 입력 받은 아이디
 */
function deleteTodoTagAll(id) {}
