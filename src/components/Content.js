import React, { useState } from "react";

const Content = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>count {count}</h2>
      <br />
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
      <br />
      <button onClick={() => setCount((pre) => pre - 1)}>Decrement</button>
    </div>
  );
};

export default Content;
