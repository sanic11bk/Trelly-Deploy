type TaskButtonProps = {
  text: string;
  isCompleted: boolean;
  priority: string;
  onStatusChange: (newStatus: boolean) => void
}
 
export function TaskButton({ text, isCompleted, priority, onStatusChange }: Readonly<TaskButtonProps>) {
  return (
    <div>
      <button type="button" onClick={() => onStatusChange(!isCompleted)}>
        {isCompleted ? "✓" : "○"} {text}
      </button>
      <span>Priority: {priority}</span>
    </div>
  )
}
 
<TaskButton
  text="Review code"
  isCompleted={false}
  priority="high"
  onStatusChange={(newStatus) => console.log("New status:", newStatus)}
/>