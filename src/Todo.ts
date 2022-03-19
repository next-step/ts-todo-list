export default function Todo({
  id = Date.now(),
  content,
  complete,
  category,
  tags = [],
}) {
  this.id = id;
  this.content = content;
  this.complete = complete;
  this.category = category;
  this.tags = tags;
}

Todo.prototype.updateTodo = function ({ content, complete, category, tags }) {
  this.content = content;
  this.complete = complete;
  this.category = category;
  this.tags = tags;
};
