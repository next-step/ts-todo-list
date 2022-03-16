/// <reference path="./todo.d.ts" />
/// <reference path="./tag.d.ts" />
// import { Todo } from './todo.d';
// import { Tag } from './tag.d';

declare const todos:Todo[];
declare const tags:Tag[];
declare const getTodos = () => Todo[];
declare const getTodo = (id: number) => Todo | null;
declare const addTodo = (todo: Todo) => boolean;
declare const deleteTodo = (id: number) => boolean;
declare const deleteTodos = () => boolean;
declare const updateTodo = (todo: Todo) => boolean;
declare const updateTag = (tag: Tag) => boolean;
