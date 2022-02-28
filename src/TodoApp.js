class TodoApp{
    constructor() {
        /**
         * @type{TodoElement[]}
         */
        this.todoElements = []
        /**
         * @type {number}
         */
        this.nextId = 0
    }

    /**
     * addTodoElement 할때 고유한 nextId 를 만들어주는 함수.
     * @private
     * @return {number} nextTodoElementId 할일 아이디.
     */
    idGenerator(){

    }

    /**
     * 할 일을 추가합니다.
     * @param {TodoElement} todoElement
     */
    addTodoElement(todoElement){

    }

    /**
     * todoElements 에서 todoElementId 로 요쇼를 찾아 해당 요소.info 를 출력합니다.
     * @param {number} todoElementId
     */
    getTodoElementInfoById(todoElementId){

    }

    /**
     * todoElements 의 모든 요소의 요소.info 를 출력합니다.
     */
    getTodoElementInfoAll(){

    }

    /**
     * todoElements 에서 todoElementId 로 요쇼를 찾아 해당 요소.update 함수를 호출합니다
     * @param {number} todoElementId - 할 일 아이디.
     * @param {string=} content - 할 일의 내용.
     * @param {('TODO'|'DONE')=} status - 상태.
     * @param {string=} category - 카테고리.
     */
    updateTodoElementById(todoElementId,content,status,category){

    }

    /**
     * 할일을 삭제합니다.
     * @param {number} todoElementId - 할 일의 내용.
     */
    deleteTodoElementById(todoElementId){

    }

    /**
     * 할일을 모두 삭제합니다.
     */
    deleteTodoElementAll(){

    }

    /**
     * 특정 할 일에 태그를 추가합니다.
     * @param {number} todoElementId - 할 일 아이디.
     * @param {string} content - 태그의 내용.
     */
    addTodoElementTag(todoElementId,content){

    }

    /**
     * 특정 할 일의 특정 태그를 삭제합니다.
     * @param {number} todoElementId - 할 일 아이디.
     * @param {number} tagId - 태그의 내용.
     */
    deleteTodoElementTagByTagId(todoElementId,tagId){

    }

    /**
     * 특정 할 일의 특정 태그를 모두 삭제합니다.
     * @param {number} todoElementId - 할 일 아이디.
     */
    deleteTodoElementTagAll(todoElementId){

    }

}