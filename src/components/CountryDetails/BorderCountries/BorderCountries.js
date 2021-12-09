import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
// styles
import styles from "./BorderCountries.module.scss";
// context
import { AppContext } from "../../../contexts/AppContext";
// api
import { baseUrl } from "../../../_api/config";

const BorderCountries = ({ countryDetails }) => {
  // context
  const { totalCountries, isUsingDarkMode } = useContext(AppContext);

  // variables
  const borderCountries = useMemo(
    () =>
      totalCountries
        .filter((country) => {
          return (
            countryDetails &&
            countryDetails.borders &&
            countryDetails.borders.includes(country.alpha3Code)
          );
        })
        .map((country) => (
          <Link
            to={`${baseUrl}countries/${country.name}`}
            key={country.name}
            className={
              isUsingDarkMode ? `dark darkElements` : `light lightElements`
            }
          >
            {country.name}
          </Link>
        )),
    [countryDetails, totalCountries, isUsingDarkMode]
  );

  return (
    <div
      className={`${styles.borderCountries} ${
        isUsingDarkMode ? "dark" : "light"
      }`}
    >
      <h3>Border Countries: </h3>
      <div> {borderCountries.length !== 0 ? borderCountries : "-"} </div>
    </div>
  );
};

export default BorderCountries;
