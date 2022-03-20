interface TagItem {
  id: number;
  name: string;
}

export default class Tag {
  id: number;
  name: string;

  constructor(initTag: TagItem);
}
