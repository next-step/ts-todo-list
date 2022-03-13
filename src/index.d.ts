type todos = Todo[];
type tags = Tag[];
type getTodos = () => Todo[];
type getTodo = (id: number) => Todo | null;
type addTodo = (todo: Todo) => boolean;
type deleteTodo = (id: number) => boolean;
type deleteTodos = () => boolean;
type updateTodo = (todo: Todo) => boolean;
type updateTag = (tag: Tag) => boolean;
