import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <>
      <div className="bg-[#f9f9f9] overflow-x-hidden ">
        <nav className="w-full h-full ">
          <Navbar />
        </nav>
        <main className="">
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
}
