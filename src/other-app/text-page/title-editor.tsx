import { useText } from "./use-text";

export const TitleEditor = () => {
  const { text, toUpperCase, toLowerCase, clear, setText } = useText("Заголовок статьи");

  return (
    <>
      <h2>{text}</h2>
      <button type="button" onClick={toUpperCase}>ВЕРХНИЙ РЕГИСТР</button>
      <button type="button" onClick={toLowerCase}>нижний регистр</button>
      <button type="button" onClick={() => setText('Новый заголовок')}>Изменить на 'Новый заголовок</button>
      <button type="button" onClick={clear}>Очистить</button>
    </>
  );
};
