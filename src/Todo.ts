import Tag from './Tag';

type TodoObj = {
  id: number;
  content: string;
  complete: boolean;
  category: string;
  tags?: typeof Tag[];
};

interface TodoInterface {
  id: number;
  content: string;
  complete: boolean;
  category: string;
  tags?: typeof Tag[];
  updateTodo: Function;
}

export default class Todo implements TodoInterface {
  public readonly id: number;
  public content: string;
  public complete: boolean;
  public category: string;
  public tags: typeof Tag[];

  constructor({ content, complete, category, tags }: TodoObj) {
    this.id = Date.now();
    this.content = content;
    this.complete = complete;
    this.category = category;
    this.tags = tags || [];
  }

  updateTodo({ content, complete, category, tags }: TodoObj): void {
    this.content = content;
    this.complete = complete;
    this.category = category;
    this.tags = tags || [];
  }
}
