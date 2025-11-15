import { Link } from "react-router-dom";

export function CardUser({ userData }) {
  const user = userData;

  const softSkills = user.softSkills || [];

  return (
    <div className="w-[290px] sm:max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white hover:-translate-y-1 transition-all dark:bg-[#383838]">
      <div className="bg-blue-500 h-32 relative dark:bg-purple-500">
        <div className="absolute -bottom-12 left-6 flex items-center gap-4 ">
          <img
            src={user.foto || "https://placehold.co/150x150"}
            alt={user.nome || "Usuário"}
            className="w-24 h-24 rounded-full border-4 border-white dark:border-[#383838] object-cover"
          />
          <Link
            to={`/modal/${user.id}`}
            className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 hover:cursor-pointer dark:bg-stone-50 dark:text-dark dark:hover:bg-stone-200"
          >
            Visualizar
          </Link>
        </div>
      </div>

      <div className="pt-16 pb-6 px-6 text-gray-800">
        <h2 className="text-xl font-semibold flex items-center gap-1 dark:text-zinc-100">
          {user.nome || "Usuário não encontrado"}
        </h2>
        <p className="text-gray-500 dark:text-zinc-200">@{user.nome}</p>

        <div>
          <p className="mt-3 text-sm text-gray-700 font-bold dark:text-zinc-300">
            Principais Informações:
          </p>

          <div className="flex flex-col justify-between mt-4 text-sm font-medium text-gray-700 gap-2 dark:text-zinc-400">
            <span>Cargo: {user.cargo}</span>
            <span>
              Skills:{" "}
              {Array.isArray(user.habilidadesTecnicas)
                ? user.habilidadesTecnicas.join(" | ")
                : user.habilidadesTecnicas}
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              {softSkills.map((softSkill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold shadow-sm dark:bg-purple-100 dark:text-purple-700"
                >
                  {softSkill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
