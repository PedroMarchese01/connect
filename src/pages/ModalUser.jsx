import { useEffect } from "react";
import { useState } from "react";

import { CardUser } from "@/components/CardUser";
import { useParams } from "react-router-dom";
export function ModalUser() {
  const { user } = useParams();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://69128e0c52a60f10c821f8f7.mockapi.io/connect/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <section>
        <CardUser />
      </section>
    </>
  );
}
