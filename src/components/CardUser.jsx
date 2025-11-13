import { Link } from "react-router-dom";

export function CardUser({ userData}) {
  const user = userData;

  return (
    <div className="w-[290px] sm:max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white hover:-translate-y-1 hover:cursor-pointer transition-all">
      <div className="bg-blue-500 h-32 relative">
        <div className="absolute -bottom-12 left-6 flex items-center gap-4 ">
          <img
            src={user.foto || "https://placehold.co/150x150"}
            alt={user.nome || "Usuário"}
            className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
          />
          <Link
            to={`/modal/${user.id}`}
            className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 hover:cursor-pointer"
          >
            Visualizar
          </Link>
        </div>
      </div>

      <div className="pt-16 pb-6 px-6 text-gray-800">
        <h2 className="text-xl font-semibold flex items-center gap-1">
          {user.nome || "Usuário não encontrado"}
        </h2>
        <p className="text-gray-500">@{user.nome}</p>

        <div>
          <p className="mt-3 text-sm text-gray-700 font-bold">
            Principais Informações:
          </p>

          <div className="flex flex-col justify-between mt-4 text-sm font-medium text-gray-700 gap-2">
            <span>Cargo: {user.cargo}</span>
            <span>
              Skills:{" "}
              {Array.isArray(user.habilidadesTecnicas)
                ? user.habilidadesTecnicas.join(" | ")
                : user.habilidadesTecnicas}
            </span>

            <div className="flex flex-wrap gap-2 mt-1">
              {user.softSkills?.map((softSkill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold shadow-sm"
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
