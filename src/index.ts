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

class TodoItem {
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

class Tag {
  id: number = Math.round(Math.random() * 100);
  content: string;

  constructor(content: string) {
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
  window.event?.preventDefault();
  console.log("To Do 미션 기능 구현 테스트");

  console.log("새로운 할 일 추가");
  todoList.addItem(todoItem);
  todoList.addItem(todoItemWithTags);
  console.log(
    "----------------------------------------------------------------------------"
  );

  console.log("전체 할 일 목록 조회");
  todoList.readItemAll();
  console.log(
    "----------------------------------------------------------------------------"
  );

  console.log("특정 할 일 조회");
  todoList.readItemById(todoItem.id);
  console.log(
    "----------------------------------------------------------------------------"
  );

  console.log("특정 할 일 수정");
  todoList.updateItemById(todoItem.id, {
    content: "투 두",
    isFinished: true,
    category: "어제 한 일",
    tags: [javascript, typescript],
  });
  console.log(
    "----------------------------------------------------------------------------"
  );

  console.log("특정 할 일의 특정 태그 수정");
  todoList.updateTagById(todoItemWithTags.id, javascript.id, "jquery");
  console.log(
    "----------------------------------------------------------------------------"
  );

  console.log("특정 할 일 제거");
  todoList.deleteItemById(todoItem.id);
  console.log(
    "----------------------------------------------------------------------------"
  );

  console.log("특정 할 일의 특정 태그 삭제");
  todoList.deleteTagById(todoItemWithTags.id, typescript.id);
  console.log(
    "----------------------------------------------------------------------------"
  );

  console.log("특정 할 일의 모든 태그 삭제");
  todoList.deleteTagAll(todoItemWithTags.id);
  console.log(
    "----------------------------------------------------------------------------"
  );

  console.log("모든 할 일 제거");
  todoList.deleteItemAll();
  console.log(
    "----------------------------------------------------------------------------"
  );
};
