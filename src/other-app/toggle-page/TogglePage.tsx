import { LightSwitch } from "./LightSwitch"
import { NotificationSwitch } from "./NotificationSwitch"
import { VisibilityToggle } from "./VisibilityToggle"

export const TogglePage = () => {
  return (
    <div>
      <LightSwitch />
      <VisibilityToggle />
      <NotificationSwitch />
    </div>
  )
}