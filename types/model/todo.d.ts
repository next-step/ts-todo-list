import Category from "./category";
import Tag from "./tag";

declare interface TodoItem {
  id: number;
  title: string;
  isFinished?: boolean;
  category: Category;
  tags?: Tag[];
}

export default class Todo {
  id: number;
  title: string;
  isFinished?: boolean;
  category: Category;
  tags?: Tag[];

  constructor(initTodo: TodoItem);

  updateTitle(newTitle: string): void;

  updateCategory(category: Category): void;

  updateTags(tags?: Tag[]): void;

  toggleIsFinished(): boolean;
}
