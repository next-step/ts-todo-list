import Tag from './Tag';

type TodoObj = {
  id?: number | undefined;
  content: string;
  complete: boolean;
  category: string;
  tags?: typeof Tag[];
};

interface TodoInterface {
  content: string;
  complete: boolean;
  category: string;
  tags?: typeof Tag[];
  updateTodo: Function;
}

export default class Todo implements TodoInterface {
  public id: number | undefined;
  public content: string;
  public complete: boolean;
  public category: string;
  public tags: typeof Tag[];

  constructor({ content, complete, category, tags }: TodoObj) {
    this.id = Number(Date.now());
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
