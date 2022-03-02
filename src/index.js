/** 할 일 목록 */
class TodoList {
    /**
     * 할 일 목록
     * @member {Array.<TodoItem>}
     */
    list = []

    /**
     * 할 일을 추가할 수 있다.
     * 내용없이 추가할 수 없다.
     * @param {TodoItem} todoItem - 할 일 목록에 추가할 할 일 객체
     */
    addItem(todoItem) {
        // ...
    }

    /**
     * ID를 기반으로 특정 할 일을 조회할 수 있다.
     * @param {string} id - 조회할 일의 ID
     * @return {TodoItem} - ID를 기반으로 찾은 할 일
     */
    readItemById(id) {
        // ...
    }

    /**
     * 모든 할 일을 조회할 수 있다.
     * @return {Array.<TodoItem>} - 할 일 목록
     */
    readItemAll() {
        // ...
    }

    /**
     * ID를 기반으로 특정 할 일을 수정할 수 있다.
     * ID를 제외한 모든 속성을 수정할 수 있다.
     * @param {string} id - 수정할 일의 ID
     * @param {Object} option - 수정할 일의 속성과 내용
     */
    updateItemById(id, option) {
        // ...
    }

    /**
     * ID를 기반으로 특정 할 일을 삭제할 수 있다.
     * @param {string} id - 삭제할 일의 ID
     */
    deleteItemById(id) {
        // ...
    }

    /**
     * 모든 할 일을 제거할 수 있다.
     */
    deleteItemAll() {
        // ...
    }

}

/** 할 일 */
class TodoItem {
    /**
     * ID - 랜덤한 아이디
     * @member {string}
     */
    id

    /**
     * 내용
     * @member {string}
     */
    content

    /**
     * 카테고리
     * @member {string}
     */
    category

    /**
     * 완료여부
     * @member {boolean}
     * @default
     */
    isFinished = false

    /**
     * 태그 목록
     * @member {Array.<Tag>}
     */
    tags = []

    /**
     * TodoItem을 생성한다.
     * @param {!string} content - 할 일 내용
     * @param {!string} category - 할 일 카테고리
     * @param {?Array.<string>} tagContents - 할 일 태그 목록의 태그 내용들
     */
    constructor(content, category, tagContents) {
        // ...
    }

    /**
     * ID를 기반으로 특정 태그를 수정할 수 있다.
     * @param {string} id - 수정할 태그의 ID
     * @param {string} content - 수정할 태그의 내용
     */
    updateTagById(id, content) {
        // ...
    }

    /**
     * ID를 기반으로 특정 태그를 삭제할 수 있다.
     * @param {string} id - 삭제할 일의 ID
     */
    deleteTagById(id) {
        // ...
    }

    /**
     * 모든 태그를 제거할 수 있다.
     */
    deleteTagAll() {
        // ...
    }
}

/** 태그 */
class Tag {
    /**
     * ID - 랜덤한 아이디
     * @member {string}
     */
    id

    /**
     * 내용
     * @member {string}
     */
    content

    /**
     * Tag를 생성한다.
     * @param {string} content - 할 일 내용
     */
    constructor(content) {
        // ...
    }
}