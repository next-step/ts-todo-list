export class Tag {
  constructor(public id: number, private content: string) {
    this.id = id;
    this.content = content;
  }

  get info(): string {
    const info = `id:${this.id},content:${this.content}`;
    console.log(`log:${info}`);
    return info;
  }

  updateContent(tagContent: string): boolean {
    this.content = tagContent;
    return true;
  }
}
