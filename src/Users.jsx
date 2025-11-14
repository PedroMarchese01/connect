import { useEffect, useState } from "react";
import { CardUser } from "./components/CardUser";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Filter } from "./components/Filter";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const perPage = 6;

  useEffect(() => {
    fetch("https://6915020884e8bd126af85e15.mockapi.io/connect/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  const filteredUsers = users.filter((user) => {
    const term = search.toLowerCase();

    const nome = (user.nome || "").toLowerCase();
    const cargo = (user.cargo || "").toLowerCase();
    const skills = (user.habilidadesTecnicas || []).join(" ").toLowerCase();
    const softskills = (user.softSkills || []).join(" ").toLowerCase();

    const fullText = `${nome} ${cargo} ${skills} ${softskills}`;

    return fullText.includes(term);
  });

  const totalPages = Math.ceil(filteredUsers.length / perPage);
  const start = (page - 1) * perPage;
  const current = filteredUsers.slice(start, start + perPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    const isFirst = i === 1;
    const isLast = i === totalPages;
    const isNear = i >= page - 1 && i <= page + 1;

    if (isFirst || isLast || isNear) {
      pages.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`px-3 py-1 rounded ${
            page === i
              ? "bg-blue-500 text-white dark:bg-purple-500"
              : "bg-gray-200 hover:cursor-pointer dark:bg-white"
          }`}
        >
          {i}
        </button>
      );
    } else if (
      (i === page - 2 && i > 1) ||
      (i === page + 2 && i < totalPages)
    ) {
      pages.push(
        <span key={`${i}`} className="px-2 dark:text-white">
          ...
        </span>
      );
    }
  }

  return (
    <section>
      <div className="p-6 bg-zinc-50 min-h-screen flex flex-col items-center dark:bg-dark">
        <h1 className="mb-8 font-bold text-2xl md:text-4xl text-center dark:text-white">
          Usuários conectados
        </h1>

        <Filter search={search} setSearch={setSearch} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {current.length > 0 ? (
            current.map((user) => <CardUser key={user.id} userData={user} />)
          ) : (
            <p className="col-2 text-center font-semibold">
              Nenhum usuário encontrado
            </p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center gap-2 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="disabled:opacity-50 hover:cursor-pointer mr-4"
            >
              <IoIosArrowBack className="dark:text-white" />
            </button>

            {pages}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="disabled:opacity-50 hover:cursor-pointer ml-4"
            >
              <IoIosArrowForward className="dark:text-white" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
