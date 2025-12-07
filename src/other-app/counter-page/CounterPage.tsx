import { useEffect, useState } from "react";

export const CounterPage = () => {
  return (
    <div>
      <Counter />
      <CounterWithoutAutoReset />
    </div>
  )
}

export const CounterWithoutAutoReset = () => {
  const { count, inc, dec, reset, changeStep  } = useCounter(5, 5, 0);

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={inc}>
        Увеличить
      </button>
      <button type="button" onClick={dec}>
        Уменьшить
      </button>
      <button type="button" onClick={reset}>
        Сбросить
      </button>
       <button type="button" onClick={changeStep}>
          Установить шаг 5
      </button>
    </>
  );
};

export const Counter = () => {
  const { count, inc, dec, reset, changeStep  } = useCounter(0, 1, 3);

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={inc}>
        Увеличить
      </button>
      <button type="button" onClick={dec}>
        Уменьшить
      </button>
      <button type="button" onClick={reset}>
        Сбросить
      </button>
       <button type="button" onClick={changeStep}>
          Установить шаг 5
      </button>
    </>
  );
};

const useCounter = (startValue = 0, startStep = 1, autoResetTime: number | null = 0 ) => {
  const [count, setCount] = useState(startValue);
  const [step, setStep] = useState(startStep)

  useEffect(() => {
    if(!autoResetTime) return
    const ms = autoResetTime * 1000
    const intervalId = setInterval(() => {
      setCount(0);
    }, ms);

    return () => clearInterval(intervalId)
  }, [autoResetTime]);

  const inc = () => {
    setCount(count + step);
  };

  const dec  = () => {
    setCount(count - step);
  };

  const reset  = () => {
    setCount(startValue);
  };

  const changeStep  = () => {
    setStep(5);
    alert('Шаг изменён на 5')
  };

  return { count, inc, dec, reset, changeStep };
};
