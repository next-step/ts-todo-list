export default function Tag({ id, name }) {
  this.id = id;
  this.name = name;
}

Tag.prototype.updateTag = function (name) {
  this.name = name;
};
