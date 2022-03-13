/**
 * Todoitem를 가지는 배열 객체
 * @type {Todoitem[]}
 */
declare const Todolist: Todoitem[];
/**
 * Todoitem 객체
 * 순서대로 아이디, 내용, 완료여부, 카테고리, 태그들(문자열 타입의 태그를 담은 문자열 배열)
 * @type {{id: !string, content: !string, completed: !boolean, category: !string, tags: ?string[]}}
 */
declare const Todoitem: {};
/**
 * 할 일을 추가할 수 있다. 내용없이 추가할 수 없다.
 * Todoitem 객체를 생성한다.
 * @param id {string} - required
 * @param content {string} - required
 * @param completed {boolean} - required
 * @param category {string} - required
 * @param tags {?string[]} - optional
 * @returns {{}}
 */
declare const createItem: (id: string, content: string, completed: boolean, category: string, tags: string[]) => {};
/**
 * 모든 할 일을 조회할 수 있다.
 * Todolist를 반환한다.
 * @returns {Todoitem[]}
 */
declare const readItems: () => Todoitem[];
/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * 해당 ID를 가진 Todoitem 인스턴스를 반환한다.
 * @param id {string}
 * @returns {{}}
 */
declare const readItem: (id: string) => boolean;
/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 수정 성공시 true 반환
 * undefined 입력시 해당 속성은 수정하지 않음
 * @param id {string} - required
 * @param content {string} - required
 * @param completed {boolean} - required
 * @param category {string} - required
 * @param tags {string[]} - optional
 * @returns {boolean}
 */
declare const updateItem: (id: string, content: string, completed: boolean, category: string, tags: string[]) => boolean;
/**
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * 수정 성공시 true 반환
 * @param id {string}
 * @param prev {string} - 수정하려는 태그
 * @param next {string} - 수정할 내용
 * @returns {boolean}
 */
declare const updateTag: (id: string, prev: string, next: string) => boolean;
/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 삭제 성공시 true 반환
 * @param id {string}
 * @returns {boolean}
 */
declare const deleteItem: (id: string) => boolean;
/**
 * 모든 할 일을 제거할 수 있다.
 * @returns {boolean}
 */
declare const deleteItems: () => boolean;
/**
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param id {string}
 * @param tag {string}
 * @returns {boolean}
 */
declare const deleteTag: (id: string, tag: string) => boolean;
/**
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param id {string}
 * @returns {boolean}
 */
declare const deleteTags: (id: string) => boolean;
