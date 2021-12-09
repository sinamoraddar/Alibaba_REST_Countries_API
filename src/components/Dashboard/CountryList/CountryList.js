import React, { useState, useEffect, useContext } from "react";
// components
import CountryItem from "./CountryItem/CountryItem";
import Loading from "../../Loading/Loading";
import Pagination from "./Pagination/Pagination";
// styles
import styles from "./CountryList.module.scss";
// context
import { AppContext } from "../../../contexts/AppContext";
// api
import { baseUrl } from "../../../_api/config";

// supplementary components
const countryItemCreator = (
  filteredCountries,
  currentPage,
  darkMode,
  homePage
) =>
  filteredCountries.length > 0 &&
  filteredCountries
    .slice(currentPage * 8, currentPage * 8 + 8)
    .map((country) => (
      <CountryItem
        key={country.name}
        {...country}
        darkMode={darkMode}
        homePage={homePage}
      />
    ));

// main component
const CountryList = ({
  filteredCountries,
  scrollTo,
  regionFilter,
  countrySearchField,
}) => {
  // context
  const { loading, isUsingDarkMode, totalCountries } = useContext(AppContext);

  // state
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // life cycle hooks
  useEffect(() => {
    setTotalPages(
      filteredCountries?.length > 8
        ? Math.ceil(filteredCountries.length / 8)
        : 1
    );
  }, [filteredCountries]);

  useEffect(() => {
    setCurrentPage(0);
  }, [filteredCountries]);

  return (
    <section className={styles.countryList}>
      {loading ? (
        <Loading />
      ) : (regionFilter || countrySearchField) &&
        filteredCountries?.length === 0 ? (
        <p className={styles.error}>
          Oops, we have no idea what you're talking about
          <br />
          Search for something else
        </p>
      ) : (
        <React.Fragment>
          <div>
            {countryItemCreator(
              !regionFilter && !countrySearchField
                ? totalCountries
                : filteredCountries,
              currentPage,
              isUsingDarkMode,
              baseUrl
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            scrollTo={scrollTo}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </React.Fragment>
      )}
    </section>
  );
};
export default CountryList;
