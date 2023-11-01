import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
export default function Navbar() {
  return (
    <div className="flex justify-between bg-DarkBlue px-6 text-white py-6 md:px-20">
      <h2 className="font-bold md:text-2xl">Where in the world</h2>
      <button>
        <BsFillMoonFill className="inline-block ml-2" />
        Dark Mode
      </button>
    </div>
  );
}
