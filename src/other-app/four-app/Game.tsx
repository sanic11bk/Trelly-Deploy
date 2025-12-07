import { useState } from "react";
import { Counter } from "./Counter";
import { Elephant } from "./Elephant";

export const Game = () => {
  const [showElephant, setShowElephant] = useState("");
  const [count, setCount] = useState(0);

  const handleClickShowElephant = () => {
    setShowElephant("Elephant");
  };

  const handleClickCount = () => {
    setCount(prev => prev + 1)
  };

  const reset = () => {
    setCount(0);
    setShowElephant('');
  };

  return (
    <>
      {!showElephant && (
        <Counter count={count} handleClickCount={handleClickCount} handleClickShowElephant={handleClickShowElephant} />
      )}
      {showElephant && <Elephant reset={reset} />}
    </>
  );
};
