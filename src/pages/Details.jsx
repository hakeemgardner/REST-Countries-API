import React from "react";
import { useParams } from "react-router-dom";
import CountryDetails from "../components/CountryDetails";

export default function Details({ countries }) {
  const { fifa } = useParams();
  const country = countries.find((item) => item.fifa === fifa);

  if (!country) {
    return <p>Country not found.</p>;
  }

  const topLevelDomain = country.topLevelDomain
    ? country.topLevelDomain.join(", ")
    : "";

  return (
    <div>
      <CountryDetails
        imgSrc={country.flags.png}
        countryName={country.name.common}
        nativeName={country.nativeName}
        population={country.population}
        region={country.region}
        capital={country.capital}
        subRegion={country.subregion}
        topLevelDomain={
          country.topLevelDomain ? country.topLevelDomain[0] : "None"
        }
        currencies={country.currencies[0]?.name}
        languages={country.languages[0]?.name}
        borderCountries={country.borders}
      />
    </div>
  );
}
