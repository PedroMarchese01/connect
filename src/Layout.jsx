import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  const toggleTheme = () => {
    const newValue = !isDark;
    setIsDark(newValue);

    localStorage.removeItem("isDark");
    localStorage.setItem("isDark", String(newValue));
  };

  return (
    <>
      <div className={isDark ? "dark" : ""}>
        <nav>
          <Navbar isDark={isDark} setDark={setIsDark} toggler={toggleTheme} />
        </nav>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
}
