/**
 * @file 할 일을 만드는 Todo 클래스
 * @author guymoon(조기문)
 */

import * as t from "TodoModule";
import * as l from "LabelModule";

/**
 * Create a new todo
 * @class
 * @classdesc 할 일을 만드는 Todo 클래스
 */
export class Todo {
  /**
   * @type {{id: number, isDone: boolean, content: string, labels: Label[]}}
   */
  data: t.TodoData = {id:0, isDone: false, content: "", priority: "LOW", labels: []};

  /**
   * @constructor
   * @param {number} id - 할 일의 id
   * @param {string} content - 할 일의 내용
   */
  constructor(id: t.TodoData["id"], content: t.TodoData["content"]) {
    this.data.id = id;
    this.data.isDone = false;
    this.data.content = content;
    this.data.priority = "LOW";
    this.data.labels = [];
  }

  /**
   * (getter) 할 일의 unique한 id를 만듭니다
   * @return {object} TodoDescription
   */
  get info(): t.TodoData {
    return this.data;
  }

  /**
   * (setter) 할 일의 content(내용) 값을 갱신합니다.
   * @param {string} value
   */
  set content(value: t.TodoData["content"]) {
    this.data.content = value;
  }

  /**
   * (setter) 할 일의 isDone(완료 여부) 값을 갱신합니다.
   * @param {boolean} value
   */
  set isDone(value: t.TodoData["isDone"]) {
    this.data.isDone = value;
  }

  /**
   * (setter) 할 일의 ㅎ(중요도) 값을 갱신합니다.
   * @param {('LOW' | 'MIDDLE' | 'HIGH')} value
   */
  set priority(value: t.TodoData["priority"]) {
    this.data.priority = value;
  }

  /**
   * (setter) 할 일의 labels 값을 갱신합니다.
   * @param {Label[]} value
   */
  set labels(value: l.Label[]) {
    this.data.labels = value;
  }
}

