"use strict";
class TodoList {
    constructor() {
        this.list = [];
    }
    addItem(todoItem) {
        this.list.push(todoItem);
        this.readItemAll();
    }
    readItemAll() {
        console.table(this.list);
    }
    readItemById(id) {
        console.table(this.list.find((item) => item.id === id));
    }
    updateItemById(id, option) {
        if (option.content) {
            this.list.filter((item) => item.id === id)[0].content = option.content;
        }
        if (option.isFinished) {
            this.list.filter((item) => item.id === id)[0].isFinished =
                option.isFinished;
        }
        if (option.category) {
            this.list.filter((item) => item.id === id)[0].category = option.category;
        }
        if (option.tags) {
            this.list.filter((item) => item.id === id)[0].tags = option.tags;
        }
        this.readItemAll();
    }
    updateTagById(id, tagId, content) {
        this.list
            .filter((item) => item.id === id)[0]
            .tags.filter((tag) => tag.id === tagId)[0].content = content;
        this.readItemAll();
    }
    deleteItemById(id) {
        this.list = this.list.filter((item) => item.id !== id);
        this.readItemAll();
    }
    deleteItemAll() {
        this.list = [];
        this.readItemAll();
    }
    deleteTagById(id, tagId) {
        this.list.filter((item) => item.id === id)[0].tags = this.list
            .filter((item) => item.id === id)[0]
            .tags.filter((tag) => tag.id !== tagId);
        this.readItemAll();
    }
    deleteTagAll(id) {
        this.list.filter((item) => item.id === id)[0].tags = [];
        this.readItemAll();
    }
}
class TodoItem {
    constructor(content, category, tags) {
        this.id = Math.round(Math.random() * 100);
        this.isFinished = false;
        this.tags = [];
        this.content = content;
        this.category = category;
        if (tags) {
            this.tags = tags;
        }
    }
}
class Tag {
    constructor(content) {
        this.id = Math.round(Math.random() * 100);
        this.content = content;
    }
}
const javascript = new Tag("javascript");
const typescript = new Tag("typesciprt");
const react = new Tag("react");
const todoItem = new TodoItem("할 일", "오늘 할 일");
const todoItemWithTags = new TodoItem("할 일", "내일 할 일", [
    javascript,
    typescript,
    react,
]);
const todoList = new TodoList();
const test = () => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    console.log("To Do 미션 기능 구현 테스트");
    console.log("새로운 할 일 추가");
    todoList.addItem(todoItem);
    todoList.addItem(todoItemWithTags);
    console.log("----------------------------------------------------------------------------");
    console.log("전체 할 일 목록 조회");
    todoList.readItemAll();
    console.log("----------------------------------------------------------------------------");
    console.log("특정 할 일 조회");
    todoList.readItemById(todoItem.id);
    console.log("----------------------------------------------------------------------------");
    console.log("특정 할 일 수정");
    todoList.updateItemById(todoItem.id, {
        content: "투 두",
        isFinished: true,
        category: "어제 한 일",
        tags: [javascript, typescript],
    });
    console.log("----------------------------------------------------------------------------");
    console.log("특정 할 일의 특정 태그 수정");
    todoList.updateTagById(todoItemWithTags.id, javascript.id, "jquery");
    console.log("----------------------------------------------------------------------------");
    console.log("특정 할 일 제거");
    todoList.deleteItemById(todoItem.id);
    console.log("----------------------------------------------------------------------------");
    console.log("특정 할 일의 특정 태그 삭제");
    todoList.deleteTagById(todoItemWithTags.id, typescript.id);
    console.log("----------------------------------------------------------------------------");
    console.log("특정 할 일의 모든 태그 삭제");
    todoList.deleteTagAll(todoItemWithTags.id);
    console.log("----------------------------------------------------------------------------");
    console.log("모든 할 일 제거");
    todoList.deleteItemAll();
    console.log("----------------------------------------------------------------------------");
};
