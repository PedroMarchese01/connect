import { CgSearch } from "react-icons/cg";

export function Filter({ search, setSearch }) {
  return (
    <div className="mb-8 flex justify-center w-full">
      <div className="relative w-full max-w-md ">
        <CgSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Nome, Cargo, Skills"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 
          focus:ring-blue-400 transition-all"
        />
      </div>
    </div>
  );
}
