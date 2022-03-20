/**
 * Todoitem 객체
 * 순서대로 아이디, 내용, 완료여부, 카테고리, 태그들(문자열 타입의 태그를 담은 문자열 배열)
 * @type {{id: !string, content: !string, completed: !boolean, category: !string, tags: ?string[]}}
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Todolist = [];
/**
 * @function createItem
 * @description 할 일을 추가할 수 있다. 내용없이 추가할 수 없다. Todoitem 객체를 생성한다.
 * @param id {string} - required
 * @param content {string} - required
 * @param completed {boolean} - required
 * @param category {string} - required
 * @param tags {?string[]} - optional
 */
var createItem = function (id, content, completed, category, tags) {
    var newItem = {
        id: id,
        content: content,
        completed: completed,
        category: category,
        tags: (tags === null || tags === void 0 ? void 0 : tags.length) ? tags : null
    };
    Todolist.push(newItem);
};
/**
 * @function readItems
 * @description 모든 할 일을 조회할 수 있다.
 * @returns Todolist
 */
var readItems = function () {
    return Todolist;
};
/**
 * @function readItem
 * @description ID를 기반으로 특정 할 일을 조회할 수 있다. 해당 ID를 가진 Todoitem 인스턴스를 반환한다.
 * @param id
 * @returns {{}}
 */
var readItem = function (id) {
    var targetItem = Todolist.find(function (item) { return item.id === id; });
    return targetItem ? targetItem : {};
};
/**
 * @function updateItem
 * @description ID를 제외한 모든 속성을 수정할 수 있다. undefined 입력시 해당 속성은 수정하지 않음
 * @param id {string} - required
 * @param content {string} - required
 * @param completed {boolean} - required
 * @param category {string} - required
 * @param tags {string[]} - optional
 * @returns {boolean}
 */
var updateItem = function (id, content, completed, category, tags) {
    var targetItemIdx = Todolist.findIndex(function (item) { return item.id === id; });
    if (targetItemIdx === -1)
        return false;
    Todolist[targetItemIdx] = __assign(__assign({}, Todolist[targetItemIdx]), { content: content, completed: completed, category: category, tags: tags.length ? tags : undefined });
    return true;
};
/**
 * @function updateTag
 * @description 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param id {string}
 * @param prev {string} - 수정하려는 태그
 * @param next {string} - 수정할 내용
 * @returns {boolean}
 */
var updateTag = function (id, prev, next) {
    var targetItemIdx = Todolist.findIndex(function (item) { return item.id === id; });
    if (targetItemIdx === -1)
        return false;
    var targetTagIdx = Todolist[targetItemIdx].tags.findIndex(function (tag) { return tag === prev; });
    if (targetTagIdx === -1)
        return false;
    Todolist[targetItemIdx].tags[targetTagIdx] = next;
    return true;
};
/**
 * @function deleteItem
 * @description ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param id
 * @returns {boolean}
 */
var deleteItem = function (id) {
    var targetItemIdx = Todolist.findIndex(function (item) { return item.id === id; });
    if (targetItemIdx === -1)
        return false;
    Todolist.splice(targetItemIdx, 1);
    return true;
};
/**
 * @function deleteItems
 * @description 모든 할 일을 제거할 수 있다.
 */
var deleteItems = function () {
    Todolist.splice(0, Todolist.length);
};
/**
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param id
 * @param tag
 * @returns {boolean}
 */
var deleteTag = function (id, tag) {
    var targetItemIdx = Todolist.findIndex(function (item) { return item.id === id; });
    if (targetItemIdx === -1)
        return false;
    var targetTagIdx = Todolist[targetItemIdx].tags.findIndex(function (eachTag) { return eachTag === tag; });
    if (targetTagIdx === -1)
        return false;
    Todolist[targetItemIdx].tags.splice(targetTagIdx, 1);
    return true;
};
/**
 * @function deleteTags
 * @description 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param id
 */
var deleteTags = function (id) {
    var targetItemIdx = Todolist.findIndex(function (item) { return item.id === id; });
    if (targetItemIdx === -1)
        return false;
    Todolist[targetItemIdx].tags = [];
};
var template = function (_a) {
    var id = _a.id, content = _a.content, completed = _a.completed, category = _a.category, tags = _a.tags;
    return "<li data-id=".concat(id, ">\n            <span>").concat(id, " | </span>\n            <span>").concat(content, " | </span>\n            <span>").concat(category, " | </span>\n            <span>").concat(completed, "</span>\n          </li>");
};
var App = function () {
    var $form = document.querySelector("form");
    var $ul = document.querySelector("ul");
    // const $removeAll = document.querySelector(".remove-all");
    var render = function () {
        $ul.innerHTML = Todolist.map(function (todo) { return template(__assign({}, todo)); }).join("");
    };
    $form.addEventListener("submit", function (e) {
        e.preventDefault();
        var id = e.target["id"].value;
        var content = e.target["content"].value;
        var completed = e.target["completed"].value;
        var category = e.target["category"].value;
        // const tags = e.target["tags"].value
        //   .split(",")
        //   .map((tag) => tag.trim())
        //   .filter((tag) => tag.length > 0);
        createItem(id, content, completed, category, []);
        render();
    });
    // $ul.addEventListener("click", ({ target }) => {
    //   if (target instanceof Element) {
    //     if (target.classList.contains("delete")) {
    //       const todoId = target.parentElement.dataset.id;
    //       app.removeTodoById(todoId);
    //       render();
    //     }
    //     if (target.classList.contains("toggle")) {
    //       const todoId = target.parentElement.dataset.id;
    //       const todo = app.findTodoById(todoId)[0];
    //       console.log(todo);
    //       app.updateTodoById(
    //         new Todo({
    //           ...todo,
    //           complete: !todo.complete,
    //         })
    //       );
    //       render();
    //     }
    //   }
    // });
    // $removeAll.addEventListener("click", () => {
    //   app.removeAllTodo();
    //   render();
    // });
};
window.onload = function () {
    App();
};
