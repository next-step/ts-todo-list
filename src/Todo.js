/**
 * @file TodoItem 클래스 파일
 * @author tiaz0128(주환석)
 */

/**
 * TodoItem 클래스
 * @class
 * @constructor
 * @public
 */
class TodoItem {
  /** @member {string} */
  content
  
  /** 
   * @member {boolean} 
   * @default false
   * */
  complete
  
  /** 
   * @member {string} 
   * @default "etc"
   * */
  category
  
  /** 
   * @member {string[]} 
   * @default [ ]
   * */
  tags

  /**
   * @constructs 
   * @param {initTodoItemType} initState 할 일의 내용
   * @todo TodoItemType 을 보고 필요한 속성값으로 생성자를 정의
   * 
   * @see {@link initTodoItemType} 참고
   */
  constructor(initState){

  }

  /** 
   * 콘솔에 TodoItem 의 정보를 출력한다.
   * @param {void}
   * @returns {void}
   * @todo  콘솔에 TodoItem 의 정보를 출력한다.
   */
  printTodo() {}
}
