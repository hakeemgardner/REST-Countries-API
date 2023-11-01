import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Cards from "../components/Cards";
import { useEffect } from "react";
export default function Home({
  countries,
  searchInput,
  regionFilter,
  setRegionFilter,
  setSearchInput,
  applyFilters,
}) {
  useEffect(() => {
    applyFilters();
  }, [searchInput, regionFilter]);

  return (
    <div>
      <Search
        setSearchInput={setSearchInput}
        setRegionFilter={setRegionFilter}
      />
      <div className="md:grid grid-cols-4 gap-4">
        {countries.map((country, index) => (
          <Link key={index} to={`/details/${country.fifa}`}>
            <Cards
              key={index}
              imgSrc={country.flags.png}
              countryName={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
