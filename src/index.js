 class Todo {
  //   아이디(required),
  //   내용(required),
  //   완료여부(required),
  //   카테고리(required),
  //   태그들(optional),

  /**
   * @constructs 
   * @param {string} content 할 일의 내용
   * @todo number 아이디 값을 가지는 Todo 객체를 생성
   * @todo 디폴트값 세팅 : 완료여부 false, 카테고리 null, 태그들 빈배열
   */
  constructor(content){

  }

  /** 
   * @param {void}
   * @returns {void}
   * @todo  콘솔에 todo 의 정보를 출력한다.
   */
  printTodo() {}
}

class TodoList {
  
  // todo 목록(required)
  // 다음 아이디값 (required)

  /**
   * @constructs
   * @param {void}
   * @todo todo 목록은 빈배열로 생성, 다음 아이다값 1부터 시작
   */
  constructor(){

  }

  /**
   * 할 일을 추가할 수 있다.
   * @param {string} content Todo 의 내용
   * @returns {number} 추가된 Todo의 아이디값, 실패시 -1 을 리턴
   
   * @todo 다음 아이디값을 사용해서 Todo를 생성한다. 
   * @todo 사용한 다음 아이디값은 1증가한다.
   * @see {@link Todo} 참고
   * 
   * @throws 내용없이 추가할 수 없다.
   */
  createTodo(content) {}

  /**
   * 모든 할 일을 조회 할 수 있다.
   * @param {void}
   * @returns {void}}
   * 
   * @see {@link Todo} printTodo 참고
   */
  readTodos() {}

  /**
   * ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @param {number} id Todo 아이디
   * @returns {void}
   * 
   * @see {@link Todo} printTodo 참고
   */
  readTodo(id) {}

  /**
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * @param {number} id Todo 아이디
   * @param {Todo} todo 업데이트 할 새로운 상태의 Todo
   * @return {Todo | null} 업데이트 된 Todo, 실패인 경우 null 을 리턴
   * 
   * @todo Todo 속성에 해당하는 않는 속성이 포함된 경우, 해당 속성은 무시하고 Todo 속성에 해당하는 것만 업데이트한다.
   * @todo 아이디값은 업데이트 하지 않는다.
   */
  updateTodo(id, todo) {}

  /**
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {number} id Todo 아이디
   * @param {string} targetTag 수정할 특정 태그
   * @param {string} newTag targetTag 를 변경하는 새로운 태그
   * @return {boolean}} 성공시 true 실패시 false 를 리턴
   */
  updateTag(id, targetTag, newTag) {}

  /**
   * 모든 할 일을 제거할 수 있다.
   * @param {void}
   * @return {void} 
   */
  deleteTodos() {}
  
  /**
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * @param {number} id Todo 아이디
   * @return {number} 성공시 삭제한 Todo의 아이디를 리턴, 실패시 -1 을 리턴
   */
  deleteTodo(id) {}

  /**
   * 특정 할 일의 모든 태그를 삭제할 수 있다.
   * @param {number} id Todo 아이디
   * @return {void}
   */
  deleteTags(id) {}

  /**
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @param {number} id Todo 아이디
   * @param {string} tag 삭제할 태그
   * @return {Todo | null} 업데이트 된 Todo, 실패인 경우 null 을 리턴
   */
  deleteTag(id, tag) {}
}
