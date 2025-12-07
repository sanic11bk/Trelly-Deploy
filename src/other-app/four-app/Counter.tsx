type CounterTypes = {
  count: number;
  handleClickCount: () => void;
  handleClickShowElephant: () => void;
};

export const Counter = ({ count, handleClickCount, handleClickShowElephant }: CounterTypes) => {


  const handleClick = () => {
    if (count === 4) {
      handleClickShowElephant();
    }
    handleClickCount();
  };

  return (
    <>
      <h1>Нажми на кнопку 4 раза, чтобы увидеть слона</h1>
      <button type="button" onClick={handleClick}>
        + {count}
      </button>
    </>
  );
};
