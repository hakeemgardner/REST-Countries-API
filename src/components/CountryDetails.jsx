import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function CountryDetails(props) {
  const {
    imgSrc,
    countryName,
    nativeName,
    population,
    region,
    capital,
    subRegion,
    topLevelDomain,
    currencies,
    languages,
    borderCountries,
  } = props;
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  // Define a function to navigate to a specific country
  const handleCountryClick = (countryName) => {
    navigate(`/details/${countryName}`);
  };

  return (
    <div className="mt-8 mx-8 text-white md:flex justify-between md:mt-20 md:mx-20">
      <div className="md:w-1/2">
        <Button
          customClick={handleBackClick}
          alternateClass="px-12"
          buttonText="Back"
        />
        <img className="mt-12 md:mt-16" src={imgSrc} alt="" />
      </div>
      <div className="md:w-1/2 md:ml-20 md:mt-32">
        <div className="md:flex">
          <div>
            <h2 className="font-bold text-2xl mb-6 mt-8">{countryName}</h2>
            <p className="mb-2 font-semibold">
              Native Name: <span className="font-light">{nativeName}</span>
            </p>
            <p className="mb-2 font-semibold">
              Population: <span className="font-light">{population}</span>
            </p>
            <p className="mb-2 font-semibold">
              Region: <span className="font-light">{region}</span>
            </p>
            <p className="mb-2 font-semibold">
              Sub Region: <span className="font-light">{subRegion}</span>
            </p>
            <p className="mb-2 font-semibold">
              Capital: <span className="font-light">{capital}</span>
            </p>
          </div>
          <div className="mt-8 md:ml-16 md:mt-20">
            <p className="mb-2 font-semibold">
              Top Level Domain:{" "}
              <span className="font-light">{topLevelDomain}</span>
            </p>
            <p className="mb-2 font-semibold">
              Currencies: <span className="font-light">{currencies}</span>
            </p>
            <p className="mb-2 font-semibold">
              Languages:
              <span className="font-light">{languages}</span>
            </p>
          </div>
        </div>
        <div className="mt-8 pb-12 md:mt-8">
          <h3 className="font-semibold mb-4">Border Countries:</h3>
          <div className="flex flex-wrap justify-around">
            {borderCountries.map((borderCountry, index) => (
              <Button
                key={index}
                alternateClass="px-3 font-xs"
                buttonText={borderCountry}
                customClick={() => handleCountryClick(borderCountry)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
