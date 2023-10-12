// With God's Help

import { Button } from "@mui/material";
import { Item } from "../interfaces/Interfaces";
import { FC } from "react";

interface ProductComponentProps {
  product: Item;
  addProduct: () => void;
}

const CartProduct: FC<ProductComponentProps> = ({ product, addProduct }) => {
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <Button variant="contained" onClick={() => addProduct()}>
        Add To Cart
      </Button>
    </div>
  );
};

export default CartProduct;
