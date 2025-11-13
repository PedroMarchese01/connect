import { TbArrowGuideFilled } from "react-icons/tb";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-4 left-4 z-100">
        <div className="bg-black rounded-full w-12 lg:w-16 h-12 lg:h-16 flex justify-center items-center">
          <TbArrowGuideFilled className="fixed w-8 lg:w-12 h-8 lg:h-12 text-white" />
        </div>
      </div>
    </>
  );
}
