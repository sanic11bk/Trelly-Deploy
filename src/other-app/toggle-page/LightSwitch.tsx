import { useToggle } from "./useToggle"

export const LightSwitch = () => { 

  const { isOn, toggle} = useToggle(false)

  return (
    <div>
      <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
      <button onClick={toggle}>Переключить свет</button>
    </div>
  )
}