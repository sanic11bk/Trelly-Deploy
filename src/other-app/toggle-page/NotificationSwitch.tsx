import { useToggle } from "./useToggle";

export const NotificationSwitch = () => {
  const { isOn, toggle, setIsOn, reset } = useToggle(true);

  const handleOnNotification = () => setIsOn(false);

  return (
    <div>
      <h2>Настройки уведомлений</h2>
      {!isOn ? <p>🔔 Уведомления включены</p> : <p>🔕 Уведомления выключены</p>}
      <button type="button" onClick={toggle}>
        Переключить
      </button>
      <button type="button" onClick={handleOnNotification}>
        Включить
      </button>
      <button type="button" onClick={reset}>
        Сбросить по умолчанию
      </button>
    </div>
  );
};
