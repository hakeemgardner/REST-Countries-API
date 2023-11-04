import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
export default function Search({
  searchInput,
  setSearchInput,
  setRegionFilter,
  regionFilter,
}) {
  return (
    <div className="relative md:flex justify-between mt-6 mx-6 md:mx-20 md:mt-12">
      <div>
        <input
          className="h-12 w-full md:w-96 rounded dark:bg-DarkBlue dark:text-white  bg-VeryLightGray placeholder-DarkGray pl-14"
          type="text"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="absolute left-5 top-4">
          <AiOutlineSearch className="dark:text-white DarkGray" />
        </div>
      </div>
      <div className="mt-12 md:mt-0 md:w-72">
        <select
          className="h-12 w-2/3 rounded dark:bg-DarkBlue dark:text-white  bg-VeryLightGray  px-6 md:ml-24"
          name="country"
          id="country"
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          <option value="all">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
