export class TodoList {
  list: TodoItem[] = [];

  addItem(todoItem: TodoItem): void {
    this.list.push(todoItem);
    this.readItemAll();
  }

  readItemAll(): void {
    console.table(this.list);
  }

  readItemById(id: number): void {
    console.table(this.list.find((item) => item.id === id));
  }

  updateItemById(
    id: number,
    option: {
      content?: string;
      isFinished?: boolean;
      category?: string;
      tags?: Tag[];
    }
  ): void {
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

  updateTagById(id: number, tagId: number, content: string): void {
    this.list
      .filter((item) => item.id === id)[0]
      .tags.filter((tag) => tag.id === tagId)[0].content = content;
    this.readItemAll();
  }

  deleteItemById(id: number): void {
    this.list = this.list.filter((item) => item.id !== id);
    this.readItemAll();
  }

  deleteItemAll(): void {
    this.list = [];
    this.readItemAll();
  }

  deleteTagById(id: number, tagId: number): void {
    this.list.filter((item) => item.id === id)[0].tags = this.list
      .filter((item) => item.id === id)[0]
      .tags.filter((tag) => tag.id !== tagId);
    this.readItemAll();
  }

  deleteTagAll(id: number): void {
    this.list.filter((item) => item.id === id)[0].tags = [];
    this.readItemAll();
  }
}

export class TodoItem {
  id: number = Math.round(Math.random() * 100);
  content: string;
  isFinished: boolean = false;
  category: string;
  tags: Tag[] = [];

  constructor(content: string, category: string, tags?: Tag[]) {
    this.content = content;
    this.category = category;
    if (tags) {
      this.tags = tags;
    }
  }
}

export class Tag {
  id: number = Math.round(Math.random() * 100);
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
