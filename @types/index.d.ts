/** Label */
declare interface LabelData {
  id: number;
  content: string;
}

declare class Label {
  private data: LabelData;

  constructor(id: LabelData["id"], content: LabelData["content"]);

  get info(): LabelData;

  set content(value: LabelData["content"]);
}
