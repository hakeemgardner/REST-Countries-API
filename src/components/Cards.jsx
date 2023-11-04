import React from "react";

export default function Cards(props) {
  const { imgSrc, countryName, population, region, capital } = props;
  return (
    <div className="md:mx-8 cursor-pointer  ">
      <div className="dark:bg-DarkBlue dark:text-white bg-VeryLightGray text-VeryDarkBlue my-6  mx-12 rounded w-64 h-96">
        <img className="rounded-t-lg md:w-full" src={imgSrc} alt="" />
        <div className="m-6 text">
          <h2 className="font-bold text-xl mb-3">{countryName}</h2>
          <p className="mb-1">
            Population: <span>{population}</span>
          </p>
          <p className="mb-1">
            Region: <span>{region}</span>
          </p>
          <p className="pb-12">
            Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
