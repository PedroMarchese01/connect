import { TbArrowGuideFilled } from "react-icons/tb";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-4 left-4">
        <div className="bg-black rounded-full w-16 h-16 flex justify-center items-center">
          <TbArrowGuideFilled className="fixed w-12 h-12 text-white" />
        </div>
      </div>
    </>
  );
}
