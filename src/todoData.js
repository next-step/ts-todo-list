/**
 * Todo item
 * @typedef {Object} Todo
 * @property {number} id Todo id
 * @property {string} content Todo 내용
 * @property {boolean} isCompleted Todo 완료 여부
 * @property {string} category 카테고리
 * @property {string[]} [tags] 태그들
 */

/**
 * Todo list
 * @type {Todo[]}
 * */
export const todoList = [
  { id: 1, content: '할 일 1번', isCompleted: false, category: '카테고리1' },
  { id: 2, content: '할 일 2번', isCompleted: true, category: '카테고리1' },
  { id: 3, content: '할 일 3번', isCompleted: false, category: '카테고리2', tags: ['긴급'] },
];