import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function ModalUser() {
  const { index } = useParams();
  const userIndex = parseInt(index - 1);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(
        "https://6915020884e8bd126af85e15.mockapi.io/connect/users"
      );
      const data = await response.json();

      setUserData(data[userIndex]);
    }

    loadUsers();
  }, [userIndex]);

  if (!userData) return null; //Foi utilizado essa linha de codigo para evitar erros de renderização enquanto os dados estão sendo carregados.

  return (
    <>
      <section className="dark:bg-dark">
        <Link to="/">Voltar</Link>
        <h1>Modal: {userData.nome}</h1>

        <img
          src={userData.foto}
          alt={userData.nome}
          className="w-40 h-40 rounded-xl mt-4"
        />

        <p className="mt-2">{userData.cargo}</p>
      </section>
    </>
  );
}
