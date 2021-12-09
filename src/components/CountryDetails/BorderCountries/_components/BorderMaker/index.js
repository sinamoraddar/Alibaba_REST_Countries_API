import React from "react";
import { Link } from "react-router-dom";

const BorderMaker = ({
  totalCountries,
  countryDetails,
  darkMode,
  homePage,
  fetchCountryDetails,
}) => {
  const borderCountries = totalCountries
    .filter((country) => {
      return (
        countryDetails &&
        countryDetails.borders &&
        countryDetails.borders.includes(country.alpha3Code)
      );
    })
    .map((country) => (
      <Link
        to={`${homePage}countries/${country.name}`}
        key={country.name}
        className={darkMode ? `dark darkElements` : `light lightElements`}
      >
        {country.name}
      </Link>
    ));

  return (
    borderCountries.length !== 0 && (
      <>
        <h3>Border Countries: </h3>
        <div> {borderCountries} </div>
      </>
    )
  );
};

export default BorderMaker;
