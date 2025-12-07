import { useText } from "./use-text";

export const GreetingCard = () => {
  const { text, toUpperCase, toLowerCase, clear, setText } = useText("Привет!");

  return (
    <>
      <div>💬 {text}</div>
      <button type="button" onClick={toUpperCase}>
        ГРОМКО
      </button>
      <button type="button" onClick={toLowerCase}>
        тихо
      </button>
      <button type="button" onClick={() => setText("Добро пожаловать!")}>
        Сказать 'Добро пожаловать!'
      </button>
      <button type="button" onClick={clear}>
        Молчать
      </button>
    </>
  );
};
