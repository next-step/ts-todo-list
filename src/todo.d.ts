type Todo = {
  id: number;
  contents: string;
  isComplete: string;
  tags?: Tag[];
};

class Todo {
  id: number;
  contents: string;
  isComplete: string;
  tags: Tag[];

  constructor(todo: Todo);

  update(todo: Todo): boolean;

  removeTag(tagId: number): boolean;

  removeTags(): boolean;
}
