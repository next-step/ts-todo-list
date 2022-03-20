interface CategoryItem {
  id: number;
  name: string;
}

export default class Category {
  id: number;
  name: string;

  constructor(initCategory: CategoryItem);
}
