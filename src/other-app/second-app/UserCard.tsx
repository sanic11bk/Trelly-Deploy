type UserCard = {
  id: number;
  name: string;
  age: number;
  email: string;
  avatar?: string;
};

export const UserCard = ({ id, name, age, email, avatar }: UserCard) => {
  const userAge = age < 18 ? `age: 🔞 ${age}` : age;
  const userAvatar = avatar ?? 'https://placehold.co/128?text=no+photo';
  return (
    <div style={{border: '4px solid black', width: '250px', padding: '20px'}}>
      <img src={userAvatar} alt={name} />
      <p>name: {name}</p>
      <p>{userAge}</p>
      <p>email: {email}</p>
    </div>
  );
};
