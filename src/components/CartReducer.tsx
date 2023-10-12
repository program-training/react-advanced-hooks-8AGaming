// With God's Help

import { items } from "../utils/items";
import { Cart, Item } from "../interfaces/Interfaces";
import { Button, Typography } from "@mui/material";
import { useReducer } from "react";
import { reducer } from "../utils/Reducer";
import CartProduct from "./CartProduct";
import CartItem from "./CartItem";
import CartItem1 from "./CartItem";

const CartReducer = () => {
  const initialState: Cart = { items: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Products</h1>
      {items.map((item) => (
        <>
          <CartProduct
            key={item.id}
            product={item}
            addProduct={() => dispatch({ type: "+", payload: { id: item.id } })}
          />
        </>
      ))}
      <h1>Cart</h1>
      {state.items.map((item) => (
        <CartItem1
          key={item.product.id}
          item={item}
          addItem={() =>
            dispatch({ type: "+", payload: { id: item.product.id } })
          }
          removeOne={() =>
            dispatch({ type: "-", payload: { id: item.product.id } })
          }
          deleteItem={() =>
            dispatch({ type: "delete", payload: { id: item.product.id } })
          }
        />
      ))}
    </div>
  );
};

export default CartReducer;
