// With God's Help
import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { CartItem, Item } from "../interfaces/Interfaces";
interface ItemComponentProps {
  item: CartItem;
  addItem: () => void;
  removeOne: () => void;
  deleteItem: () => void;
}

const CartItem1: FC<ItemComponentProps> = ({
  item,
  addItem,
  removeOne,
  deleteItem,
}) => {
  return (
    <>
      <div>
        <Typography>{item.product.name}</Typography>
        <Typography>{item.amount}</Typography>
        <Button variant="contained" onClick={addItem}>
          +
        </Button>
        <Button variant="contained" onClick={removeOne}>
          -
        </Button>
        <Button variant="contained" onClick={deleteItem}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default CartItem1;
