import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
export default function Navbar({ handleThemeSwitch }) {
  return (
    <div className="flex justify-between dark:bg-DarkBlue dark:text-white bg-VeryLightGray text-VeryDarkBlue  px-6  py-6 md:px-20">
      <h2 className="font-bold md:text-2xl">Where in the world</h2>
      <button onClick={handleThemeSwitch}>
        <BsFillMoonFill className="inline-block " />
        Dark Mode
      </button>
    </div>
  );
}
