type UserCardProps = {
  name: string;
  email: string;
  isActive: boolean;
  onEdit: (email: string) => void;
  onDelete: (email: string) => void;
}
 
export function UserCard({ name, email, isActive, onEdit, onDelete }: Readonly<UserCardProps>) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
      <button type="button" onClick={() => onEdit(email)}>Edit</button>
      <button type="button" onClick={() => onDelete(email)}>Delete</button>
    </div>
  )
}
 
// Пример использования
<UserCard
  name="John Doe"
  email="john@example.com"
  isActive={true}
  onEdit={(email) => console.log("Editing user:", email)}
  onDelete={(email) => console.log("Deleting user:", email)}
/>