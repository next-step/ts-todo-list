type TagObj = {
  id?: number | undefined;
  name: string;
};

export default class Tag {
  public id: number | undefined;
  public name: string;

  constructor({ id, name }: TagObj) {
    this.id = id;
    this.name = name;
  }
  updateTag(name: string) {
    this.name = name;
  }
}
