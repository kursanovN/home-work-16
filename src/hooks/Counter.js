import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = (number) => {
    setCount((prev) => prev + number);
  };
  const decrement = (number) => {
    if (count > 0) {
      setCount((prev) => prev - number);
    } else {
      setCount(count);
    }
  };
  const resetHandler = () => {
    setCount(0);
  };

  return {
    count,
    increment,
    decrement,
    resetHandler,
  };
};
