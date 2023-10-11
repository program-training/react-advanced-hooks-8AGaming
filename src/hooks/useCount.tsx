// With God's Help

import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return { count, increase, decrease };
};
