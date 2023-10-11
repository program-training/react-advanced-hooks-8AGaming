// With God's Help

import { useCount } from "../hooks/useCount";

const Targil1A = () => {
  const counter = useCount();
  return (
    <>
      <div id="mouseover" onMouseOver={counter.increase}></div>
      <div>{counter.count}</div>
    </>
  );
};

export default Targil1A;
