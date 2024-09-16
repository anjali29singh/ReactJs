import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const [incrementBy, setIncrementBy] = useState(1);

  const handleClick = () => {
    setCount(count + incrementBy);
  };
  const increaseIncrementValue = () => {
    setIncrementBy(incrementBy + 1);
  };
  return (
    <>
      <div>
        count value is
        {count}
      </div>

      <button onClick={handleClick}>
        We are incrementing value by : {incrementBy}
      </button>
      <h1>
        Increase increment value:
        <button onClick={increaseIncrementValue}>
          Increase Increment value
        </button>
      </h1>
    </>
  );
}

export default Counter;
