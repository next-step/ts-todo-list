class TodoElement{
    /**
     * @constructor
     * @param {number} id - 할 일의 아이디.
     * @param {string} content - 할 일의 내용.
     * @param {('TODO'|'DONE')} status - 상태.
     * @param {string} category - 카테고리.
     */
    constructor(id,content,status,category) {
        /**
         * @type{Tag[]}
         */
        this.tags = []
        /**
         *
         * @type {number}
         */
        this.nextTagId = 0
    }

    /**
     * addTag 할때 고유한 nextTagId 를 만들어주는 함수.
     * @private
     * @return {number} nextTagId 태그 아이디.
     */
    idGenerator(){

    }

    /**
     * @return {string} 할 일 의 정보를 문자열로 잘 정리해서 반환합니다.
     */
    get info(){

    }

    /**
     * optional 로 인자를 받아 할일을 수정합니다. 받은 인자에 대해서만 수정합니다.
     * @param {number} todoElementId - 할 일 아이디.
     * @param {string=} content - 할 일의 내용.
     * @param {('TODO'|'DONE')=} status - 상태.
     * @param {string=} category - 카테고리.
     */
    update(content,status,category){

    }

    /**
     * 태그를 추가합니다.
     * @param {Tag} tag
     */
    addTag(tag){

    }

    /**
     * tags 배열에서 태그를 찾아 요소.updateContent 를 호출합니다
     * @param {number} tagId - 태그 아이디.
     * @param {string} tagContent - 태그 내용.
     */
    updateTagById(tagId,tagContent){

    }

    /**
     * tags 배열에서 태그를 찾아 삭제합니다.
     * @param {number} tagId - 태그 아이디.
     */
    deleteTagById(tagId){

    }

    /**
     * 모든 태그를 삭제합니다.
     */
    deleteTagAll(){

    }
}