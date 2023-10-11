// With God's Help

import { Button } from "@mui/material";
import { useCount } from "../hooks/useCount";
const Targil1 = () => {
  const counter = useCount();
  return (
    <>
      <Button
        onClick={counter.increase}
        variant="contained"
        sx={{ backgroundColor: "cyan" }}
      >
        {" "}
        +
      </Button>
      <Button
        onClick={counter.decrease}
        variant="contained"
        sx={{ backgroundColor: "lightgreen" }}
      >
        {" "}
        -
      </Button>
      <div>{counter.count}</div>
    </>
  );
};

export default Targil1;
