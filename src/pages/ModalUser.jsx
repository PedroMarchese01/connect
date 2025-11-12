import { useEffect } from "react";
import { useState } from "react";

import { CardUser } from "@/components/CardUser";
import { Link, useParams } from "react-router-dom";
export function ModalUser() {
  const { user } = useParams();

  return (
    <>
      <section>
        <Link to="/">Voltar</Link>
        <h1>Modal {user}</h1>
      </section>
    </>
  );
}
