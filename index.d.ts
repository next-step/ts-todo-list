/// <reference path="..." />

/**
 * @description Tag 생성자입니다.
 * @constructor
 * @param {object} Tag
 * @param {number} Tag.id Tag 아이디
 * @param {string} Tag.name Tag 명
 */
declare function Tag({ id, name }: { id: number; name: string }): void;
declare class Tag {
  /**
   * @description Tag 생성자입니다.
   * @constructor
   * @param {object} Tag
   * @param {number} Tag.id Tag 아이디
   * @param {string} Tag.name Tag 명
   */
  constructor({ id, name }: { id: number; name: string });
  id: number;
  name: string;
  /**
   * @description Tag 명을 수정합니다. id는 수정 할 수 없습니다.
   * @param {string} name Tag 명
   * @return {void}
   */
  updateTag(name: string): void;
}
/**
 * @description Todo를 생성합니다. Id는 생성자 내에서 유일키로 생성됩니다.
 * @constructor
 * @param {object} Todo Todo
 * @param {number} Todo.id Todo 아이디
 * @param {string} Todo.content Todo 내용
 * @param {boolean} Todo.complete Todo 완료여부
 * @param {string} Todo.category Todo 카테고리
 * @param {Array.<Tag>} [Todo.tags=[]] Todo 태그들
 */
declare function Todo({
  id,
  content,
  complete,
  category,
  tags,
}: {
  id: number;
  content: string;
  complete: boolean;
  category: string;
  tags?: Array<Tag>;
}): void;
declare class Todo {
  /**
   * @description Todo를 생성합니다. Id는 생성자 내에서 유일키로 생성됩니다.
   * @constructor
   * @param {object} Todo Todo
   * @param {number} Todo.id Todo 아이디
   * @param {string} Todo.content Todo 내용
   * @param {boolean} Todo.complete Todo 완료여부
   * @param {string} Todo.category Todo 카테고리
   * @param {Array.<Tag>} [Todo.tags=[]] Todo 태그들
   */
  constructor({
    id,
    content,
    complete,
    category,
    tags,
  }: {
    id: number;
    content: string;
    complete: boolean;
    category: string;
    tags?: Array<Tag>;
  });
  id: number;
  content: string;
  complete: boolean;
  category: string;
  tags: Tag[];
  /**
   * @description Todo를 수정합니다. id는 수정 할 수 없습니다.
   * @param {object} Todo Todo
   * @param {string} Todo.content Todo 내용
   * @param {boolean} Todo.complete Todo 완료여부
   * @param {string} Todo.category Todo 카테고리
   * @param {Array.<Tag>} [Todo.tags=[]] Todo 태그들
   * @return {void}
   */
  updateTodo({
    content,
    complete,
    category,
    tags,
  }: {
    content: string;
    complete: boolean;
    category: string;
    tags?: Array<Tag>;
  }): void;
}
/**
 * @description TodoList 생성자입니다. 저장된 정보가 있다면 해당 생성자를 통해 세팅합니다.
 * @constructor
 * @param {Array.<Todo>} [todos=[]] todos
 */
declare function Todos(todos?: Array<Todo>): void;
declare class Todos {
  /**
   * @description TodoList 생성자입니다. 저장된 정보가 있다면 해당 생성자를 통해 세팅합니다.
   * @constructor
   * @param {Array.<Todo>} [todos=[]] todos
   */
  constructor(todos?: Array<Todo>);
  todos: Todo[];
  /**
   * @description Todo 인스턴스를 추가합니다. Todo의 id는 유일키로 해당 메소드에서 생성됩니다.
   * @param {Todo} Todo 신규 Todo 객체
   * @returns {Array.<Todo>} 신규 등록 결과
   */
  addTodo(Todo: Todo): Array<Todo>;
  /**
   * @description TodoList를 전체 반환합니다.
   * @returns {Array.<Todo>} 찾은 결과
   */
  findAllTodos(): Array<Todo>;
  /**
   * @description Id에 해당하는 Todo를 찾습니다.
   * @param {number} todoId 찾는 todo id
   * @returns {Todo} 찾은 결과
   */
  findTodoById(todoId: number): Todo;
  /**
   * @description Id에 해당하는 Todo를 수정 후, 결과 값을 반환합니다.
   * @param {Todo} Todo 수정 대상 id
   * @returns {Todo} 수정 결과
   */
  updateTodoById(Todo: Todo): Todo;
  /**
   * @description 해당하는 todId의 Todo에서, tagId에 해당하는 Tag name을 수정합니다.
   * @param {number} todoId 수정하는 Tag의 Todo
   * @param {string} tagId 수정하고자 하는 Todo Id
   * @returns {Tag} 수정 결과
   */
  updateTagById(todoId: number, tagId: string): Tag;
  /**
   * @description Todo Id 기준으로 Todo를 삭제합니다.
   * @param {number} todoId 삭제 대상 Todo id
   * @return {void}
   */
  removeTodoById(todoId: number): void;
  /**
   * @description Todo를 전체 삭제합니다.
   * @return {void}
   */
  removeAllTodo(): void;
  /**
   * @description Todo id 해당하는 Tag를 전체 삭제합니다.
   * @param {number} todoId 삭제 대상 Todo id
   * @return {void}
   */
  removeAllTagByTodoId(todoId: number): void;
  /**
   * @description Todo id에 해당하는 Todo를 찾고, Tag id 해당하는 Tag를 삭제합니다.
   * @param {number} todoId 삭제 대상 Todo id
   * @param {number} tagId 삭제 대상 Tag id
   * @return {void}
   */
  removeTagByTodoIdAndTagId(todoId: number, tagId: number): void;
  logger(): void;
}
