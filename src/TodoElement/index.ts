import { todoStatus } from './types';
import { Tag } from '../Tag';

export class TodoElement {
  private tags: Tag[] = [];
  private nextTagId: number = 0;

  constructor(
    public id: number,
    private content: string,
    private status: todoStatus,
    private category: string
  ) {
    this.id = id;
    this.content = content;
    this.status = status;
    this.category = category;
  }

  private idGenerator(): number {
    return this.nextTagId++;
  }

  get info(): string {
    const info = `id:${this.id},content:${this.content},state:${this.status},category:${
      this.category
    },tags:${this.tags.reduce((acc, e) => acc + e.info, '')}`;
    console.log(`log:${info}`);
    return info;
  }

  update(content?: string, status?: todoStatus, category?: string) {
    const prevInfo = this.info;
    this.content = content || this.content;
    this.status = status || this.status;
    this.category = category || this.category;
    console.log(`log:update ${prevInfo} -> ${this.info}`);
  }

  addTag(content: string) {
    const tag = new Tag(this.idGenerator(), content);
    this.tags.push(tag);
    console.log(`log:add tag to ${this.id}, ${tag.info}`);
  }

  updateTagById(tagId: number, tagContent: string) {
    const victimTag = this.tags.find((e) => e.id === tagId);
    if (victimTag) {
      console.log(`log:updated tag ${victimTag.info} -> ${tagContent}`);
      return victimTag.updateContent(tagContent);
    }
    return console.error('log:updated tag failed, no such tag id');
  }

  deleteTagById(tagId: number) {
    this.tags = this.tags.filter((e) => e.id !== tagId);
    console.log(`log:deleted tag of ${this.id}, tagid ${tagId}`);
  }

  deleteTagAll() {
    this.tags = [];
    console.log(`log:deleted every tag of ${this.id}`);
  }
}
