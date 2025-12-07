import { useState } from "react";
import { Congratulations } from "./Congratulations";
import { GameOver } from "./GameOver";

type Elephant = {
  reset: () => void;
};

export const Elephant = ({ reset }: Elephant) => {
  const [weight, setWeight] = useState(100);

  const handleFeedHealthyFood = () => {
    setWeight((prev) => prev + 20);
  };

  const handleFeedJunkFood = () => {
    setWeight((prev) => prev - 20);
  };

  if(weight === 200) {
    return <Congratulations reset={reset}/>
  }

   if(weight === 20) {
    return <GameOver reset={reset}/>
  }

  return (
    <>
      <h1>Покорми слона</h1>
      <button onClick={handleFeedHealthyFood}>
        Кормить слона полезной едой 🥬🍉🍌
      </button>
      <br />
      <button onClick={handleFeedJunkFood}>
        Кормить слона вредной едой 🍔🍬🍕
      </button>
      <br />
      <span style={{ fontSize: weight }}>🐘</span>
    </>
  );
};
