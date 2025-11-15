import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import { SendMensage } from "@/components/SendMensage";
import { RecommendProfessional } from "@/components/RecommendProfessional";

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
      <section className="dark:bg-dark dark:text-white">
        <div className="container mx-auto flex flex-col gap-6 py-4">
          <Link
            to="/"
            className="flex items-center w-fit rounded-xl hover:underline hover:cursor-pointer dark:text-white"
          >
            <FiArrowLeft size={20} />
            Voltar
          </Link>

          <div className="flex flex-col dark:bg-[#262b30] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100">
            <div className="bg-blue-500 h-25 relative dark:bg-purple-500 ">
              <div className="absolute -bottom-10 left-6 flex items-center gap-4">
                <img
                  src={userData.foto}
                  alt={userData.nome}
                  className="w-25 h-25 rounded-full border-4 border-zinc-50 dark:border-[#262b30] object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-12 pl-6 pb-6">
              <h1 className="text-2xl font-medium">{userData.nome}</h1>

              <p>{userData.cargo}</p>
              <p className="text-sm text-gray-700 dark:text-zinc-400">
                {userData.localizacao}
              </p>
              <p className="text-sm text-gray-700 dark:text-zinc-400">
                Area: {userData.area}
              </p>
              <p className="text-sm text-gray-700 dark:text-zinc-400">
                Habilidades Técnicas: {userData.habilidadesTecnicas.join(" | ")}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {userData.softSkills.map((softSkill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold shadow-sm dark:bg-purple-100 dark:text-purple-700"
                  >
                    {softSkill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-1 w-full">
              <SendMensage/>
              <RecommendProfessional />
            </div>
          </div>

          <div className="flex flex-col dark:bg-[#262b30] shadow-lg rounded-2xl overflow-hidden pl-6 py-6 bg-zinc-100">
            <h2 className="text-xl">Resumo</h2>
            <p className="text-sm">{userData.resumo}</p>
          </div>

          {userData.experiencias.map((exp, indx) => {
            return (
              <div
                key={indx}
                className="flex flex-col dark:bg-[#262b30] gap-2 pl-6 py-6 rounded-2xl shadow-2xl bg-zinc-100"
              >
                <h2 className="text-xl">Experiências</h2>
                <p className="text-sm dark:text-zinc-400">{exp.empresa}</p>
                <p className="text-sm dark:text-zinc-400">{exp.cargo}</p>

                <div className="flex gap-2">
                  <p className="text-sm dark:text-zinc-400">{exp.inicio}</p>
                  <p className="text-sm dark:text-zinc-400">-</p>
                  <p className="text-sm dark:text-zinc-400">{exp.fim}</p>
                </div>

                <p className="text-sm dark:text-zinc-400">{exp.descricao}</p>
              </div>
            );
          })}

          {userData.formacao.map((form, indx) => {
            return (
              <div
                key={indx}
                className="flex flex-col dark:bg-[#262b30] gap-2 pl-6 py-6 rounded-2xl shadow-2xl bg-zinc-100"
              >
                <h2 className="text-xl">Formação</h2>
                <p className="text-sm dark:text-zinc-400">{form.curso}</p>
                <div className="flex gap-2">
                  <p className="text-sm dark:text-zinc-400">
                    {form.instituicao}
                  </p>
                  <p className="text-sm dark:text-zinc-400">{form.ano}</p>
                </div>
              </div>
            );
          })}

          {userData.projetos.map((proj, indx) => {
            return (
              <div
                key={indx}
                className="flex flex-col dark:bg-[#262b30] gap-2 pl-6 py-6 rounded-2xl shadow-2xl bg-zinc-100"
              >
                <h2 className="text-xl">Projetos</h2>
                <p className="text-sm dark:text-zinc-400">{proj.titulo}</p>
                <a
                  href={`${proj.link}`}
                  className="text-sm dark:text-zinc-400 underline hover:text-blue-700 dark:hover:text-purple-500 w-fit"
                >
                  Clique aqui no link para visualizar o projeto
                </a>
                <p className="text-sm dark:text-zinc-400">{proj.descricao}</p>
              </div>
            );
          })}

          <div className="flex flex-col dark:bg-[#262b30] gap-2 pl-6 py-6 rounded-2xl shadow-2xl bg-zinc-100">
            <h2 className="text-xl">Certificações</h2>

            {userData.certificacoes.map((cert, indx) => (
              <p key={indx} className="text-sm dark:text-zinc-400">
                {cert}
              </p>
            ))}
          </div>

          <div className="flex flex-col dark:bg-[#262b30] gap-2 pl-6 py-6 rounded-2xl shadow-2xl bg-zinc-100">
            <h2 className="text-xl">Idiomas</h2>

            {userData.idiomas.map((item, indx) => (
              <div key={indx} className="flex gap-2">
                <p className="text-sm dark:text-zinc-400">{item.idioma}</p>
                <p className="text-sm dark:text-zinc-400">- {item.nivel}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col dark:bg-[#262b30] gap-2 pl-6 py-6 rounded-2xl shadow-2xl bg-zinc-100">
            <h2 className="text-xl">Áreas de Interesse</h2>

            {userData.areainteresses.map((area, indx) => (
              <p key={indx} className="text-sm dark:text-zinc-400">
                {area}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
