class TodoList {
  list: TodoItem[] = [];

  addItem(todoItem: TodoItem): void {
    this.list.push(todoItem);
    this.readItemAll();
  }

  readItemAll(): void {
    console.table(this.list);
  }

  readItemById(id: number): void {
    console.table(this.list.find((item) => item.id === Number(id)));
  }

  updateItemById(
    id: number,
    option: {
      content?: string;
      isFinished?: boolean;
      category?: string;
    }
  ): void {
    if (option.content) {
      console.log(id);
      console.log(option.content);
      this.list.filter((item) => item.id === Number(id))[0].content =
        option.content;
    }
    if (option.isFinished) {
      this.list.filter((item) => item.id === Number(id))[0].isFinished =
        option.isFinished;
    }
    if (option.category) {
      this.list.filter((item) => item.id === Number(id))[0].category =
        option.category;
    }
    this.readItemAll();
  }

  updateTagById(id: number, tagId: number, content: string): void {
    this.list
      .filter((item) => item.id === Number(id))[0]
      .tags.filter((tag) => tag.id === Number(tagId))[0].content = content;
    this.readItemAll();
  }

  deleteItemById(id: number): void {
    this.list = this.list.filter((item) => item.id !== Number(id));
    this.readItemAll();
  }

  deleteItemAll(): void {
    this.list = [];
    this.readItemAll();
  }

  deleteTagById(id: number, tagId: number): void {
    this.list.filter((item) => item.id === Number(id))[0].tags = this.list
      .filter((item) => item.id === Number(id))[0]
      .tags.filter((tag) => tag.id !== Number(tagId));
    this.readItemAll();
  }

  deleteTagAll(id: number): void {
    this.list.filter((item) => item.id === Number(id))[0].tags = [];
    this.readItemAll();
  }
}

class TodoItem {
  id: number = Math.round(Math.random() * 100);
  content: string;
  isFinished: boolean = false;
  category: string;
  tags: Tag[] = [];

  constructor(content: string, category: string, tags?: Tag[]) {
    this.content = content;
    this.category = category;
    tags?.forEach((tag) => {
      if (tag.content) {
        this.tags.push(tag);
      }
    });
  }
}

class Tag {
  id: number = Math.round(Math.random() * 100);
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}

const todoList = new TodoList();

let isFinished = false;

const addItem = () => {
  window.event?.preventDefault();
  const javascript = new Tag(
    (document.getElementById("javascript") as HTMLInputElement).value
  );
  const typescript = new Tag(
    (document.getElementById("typescript") as HTMLInputElement).value
  );
  const react = new Tag(
    (document.getElementById("react") as HTMLInputElement).value
  );
  const todoItem = new TodoItem(
    (document.getElementById("content") as HTMLInputElement).value,
    (document.getElementById("category") as HTMLInputElement).value,
    [javascript, typescript, react]
  );
  todoList.addItem(todoItem);
};

const readItemAll = () => {
  window.event?.preventDefault();
  todoList.readItemAll();
};

const readItemById = (id: number) => {
  window.event?.preventDefault();
  todoList.readItemById(id);
};

const setTrue = () => {
  window.event?.preventDefault();
  isFinished = true;
};

const setFalse = () => {
  window.event?.preventDefault();
  isFinished = false;
};

const updateItemById = (
  id: number,
  option: {
    content?: string;
    isFinished?: boolean;
    category?: string;
  }
) => {
  window.event?.preventDefault();
  todoList.updateItemById(id, option);
};

const updateTagById = (id: number, tagId: number, content: string) => {
  window.event?.preventDefault();
  todoList.updateTagById(id, tagId, content);
};

const deleteItemById = (id: number) => {
  window.event?.preventDefault();
  todoList.deleteItemById(id);
};

const deleteTagById = (id: number, tagId: number) => {
  window.event?.preventDefault();
  todoList.deleteTagById(id, tagId);
};

const deleteTagAll = (id: number) => {
  window.event?.preventDefault();
  todoList.deleteTagAll(id);
};

const deleteItemAll = () => {
  window.event?.preventDefault();
  todoList.deleteItemAll();
};
