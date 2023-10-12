// With God's Help
import {
  ActionInterface,
  Cart,
  CartItem,
  Item,
} from "../interfaces/Interfaces";
import { items } from "./items";
export const reducer = (state: Cart, action: ActionInterface) => {
  switch (action.type) {
    case "+": {
      if (!state.items.find((item) => item.product.id === action.payload.id)) {
        const newProduct: Item = items.find(
          (item) => item.id === action.payload.id
        )!;
        const newCartItem: CartItem = { amount: 1, product: newProduct };
        state.items.push(newCartItem);
      } else {
        const foundItem = state.items.find(
          (item) => item.product.id === action.payload.id
        );
        foundItem!.amount++;
      }
      break;
    }
    case "-":
      {
        const foundItem = state.items.find(
          (item) => item.product.id === action.payload.id
        );
        foundItem!.amount--;
        if (foundItem?.amount === 0) {
          const updatedItems = state.items.filter(
            (item) => item.product.id !== action.payload.id
          );
          console.log(updatedItems);

          state.items = updatedItems;
        }
      }
      break;
    case "delete":
      {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload.id
        );
      }
      break;
    default:
      break;
  }

  return { ...state };
};
