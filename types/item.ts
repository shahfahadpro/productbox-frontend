export interface ItemType {
  id: string;
  name: string;
  price: number;
  img: string;
}

export interface ItemsContextType {
  selectedItems: ItemType[];
  addSelectedItem: (item: ItemType) => void;
}
