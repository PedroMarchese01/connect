import { FiSun } from "react-icons/fi";
import { IoIosMoon } from "react-icons/io";

export default function Navbar({ isDark, toggler }) {
  return (
    <>
      <div className="flex justify-between border-black border-b-2 p-4 dark:bg-dark dark:text-white dark:border-white">
        <p className="text-2xl font-semibold text-blue-900 dark:text-purple-400">
          Connect
        </p>

        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            checked={isDark}
            onChange={toggler}
            className="hidden"
          />

          {isDark ? (
            <IoIosMoon className="text-2xl text-yellow-300 transition-all duration-300" />
          ) : (
            <FiSun className="text-2xl text-yellow-500 transition-all duration-300" />
          )}
        </label>
      </div>
    </>
  );
}
