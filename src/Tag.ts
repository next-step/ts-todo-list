type TagObj = {
  id: number;
  name: string;
};

export default class Tag {
  public readonly id: number;
  public name: string;

  constructor({ name }: TagObj) {
    this.id = Date.now();
    this.name = name;
  }
  updateTag(name: string) {
    this.name = name;
  }
}
