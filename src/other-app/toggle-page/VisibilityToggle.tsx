import { useToggle } from "./useToggle"

export const VisibilityToggle = () => {

  const { isOn, setIsOn } = useToggle(false);

  const handleClickShow = () => setIsOn(true);
  const handleClickHidden = () => setIsOn(false);
 
  return (
    <div>
      <h2>Секретное сообщение</h2>
      {isOn && <p>🎉 Это секретное сообщение!</p> }
      <button type="button" onClick={handleClickShow}>Показать</button>
      <button type="button" onClick={handleClickHidden}>Скрыть</button>
    </div>
  )
}