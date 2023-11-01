import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

// Define the fetchCountries function

function App() {
  const [countries, setCountries] = useState([]);
  const [initialCountries, setInitialCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");

  const fetchCountries = async (setCountries) => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setInitialCountries(data); // Store the unfiltered data
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries(setCountries);
  }, []);
  const applyFilters = () => {
    let filteredCountries = initialCountries.slice(); // Make a copy of the initial data

    // Apply name filter
    if (searchInput) {
      filteredCountries = filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    // Apply region filter
    if (regionFilter !== "all") {
      filteredCountries = filteredCountries.filter(
        (country) => country.region === regionFilter
      );
    }

    setCountries(filteredCountries); // Update the displayed countries
  };

  return (
    <div className="font-Nunito bg-VeryDarkerBlue">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              countries={countries}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              regionFilter={regionFilter}
              setRegionFilter={setRegionFilter}
              applyFilters={applyFilters}
            />
          }
        />
        <Route
          path="details/:fifa"
          element={<Details countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
