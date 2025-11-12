import { useEffect, useState } from "react";
import { CardUser } from "./components/CardUser";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://6915020884e8bd126af85e15.mockapi.io/connect/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section className="p-6 bg-[#f9f9f9] min-h-screen">
        <h1 className="font-bold text-2xl md:text-4xl place-self-center">Usuários conectados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 justify-center gap-6">
        {users.map((user, index) => (
          <CardUser key={user.id} userData={users} userId={index + 1}  />
        ))}
      </div>
    </section>
  );
}
