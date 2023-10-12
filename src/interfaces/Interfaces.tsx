export interface Item {
  id: number;
  name: string;
  price: string;
}
export interface CartItem {
  product: Item;
  amount: number;
}

export interface ActionInterface {
  type: string;
  payload: { id: number };
}
export interface Cart {
  items: CartItem[];
}
