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
            console.log(id);
            console.log(option.content);
            this.list.filter((item) => item.id === id)[0].content = option.content;
        }
        if (option.isFinished) {
            this.list.filter((item) => item.id === id)[0].isFinished =
                option.isFinished;
        }
        if (option.category) {
            this.list.filter((item) => item.id === id)[0].category = option.category;
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
        tags === null || tags === void 0 ? void 0 : tags.forEach((tag) => {
            if (tag.content) {
                this.tags.push(tag);
            }
        });
    }
}
class Tag {
    constructor(content) {
        this.id = Math.round(Math.random() * 100);
        this.content = content;
    }
}
const todoList = new TodoList();
let isFinished = false;
const addItem = () => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    const javascript = new Tag(document.getElementById("javascript").value);
    const typescript = new Tag(document.getElementById("typescript").value);
    const react = new Tag(document.getElementById("react").value);
    const todoItem = new TodoItem(document.getElementById("content").value, document.getElementById("category").value, [javascript, typescript, react]);
    todoList.addItem(todoItem);
};
const readItemAll = () => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    todoList.readItemAll();
};
const readItemById = (id) => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    todoList.readItemById(id);
};
const setTrue = () => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    isFinished = true;
};
const setFalse = () => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    isFinished = false;
};
const updateItemById = (id, option) => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    todoList.updateItemById(id, option);
};
const updateTagById = (id, tagId, content) => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    todoList.updateTagById(id, tagId, content);
};
const deleteItemById = (id) => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    todoList.deleteItemById(id);
};
const deleteTagById = (id, tagId) => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    todoList.deleteTagById(id, tagId);
};
const deleteTagAll = (id) => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    todoList.deleteTagAll(id);
};
const deleteItemAll = () => {
    var _a;
    (_a = window.event) === null || _a === void 0 ? void 0 : _a.preventDefault();
    todoList.deleteItemAll();
};
