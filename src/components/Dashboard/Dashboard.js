import React, { useContext, useEffect, useRef, useState } from "react";
// components
import NavBar from "../NavBar/NavBar";
import FilterBar from "./FilterBar/FilterBar";
import CountryList from "./CountryList/CountryList";
// context
import { AppContext } from "../../contexts/AppContext";
// styles
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  // context
  const { isUsingDarkMode, totalCountries } = useContext(AppContext);

  // ref
  const scrollTo = useRef(null);

  // state
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countrySearchField, setCountrySearchField] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  // callbacks
  const onCountrySearchFieldChange = (countrySearchField) => {
    setCountrySearchField(countrySearchField);
  };

  const onRegionChange = (regionFilter) => {
    setRegionFilter(regionFilter);
  };

  const updateFilteredCountries = () => {
    setFilteredCountries(() => {
      let filteredCountries = totalCountries.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(countrySearchField.toLowerCase());
      });

      if (regionFilter) {
        filteredCountries = filteredCountries.filter((country) => {
          return country.region.toLowerCase() === regionFilter.toLowerCase();
        });
      }

      return filteredCountries;
    });
  };

  // life cycle hooks
  useEffect(() => {
    //update the document's title right after the component is mounted
    document.title = "Where in the World ?";
  }, []);

  useEffect(() => {
    updateFilteredCountries();
  }, [regionFilter, countrySearchField, totalCountries]);

  return (
    <>
      <header className={styles.dashboard}>
        <NavBar />
        <FilterBar
          {...{
            scrollTo,
            onRegionChange,
            onCountrySearchFieldChange,
            regionFilter,
            countrySearchField,
          }}
        />
      </header>
      <main
        className={`${styles.container} ${styles.dashboard} ${
          styles.fillTheRemainingHeight
        } ${isUsingDarkMode ? `dark` : `light`}`}
      >
        <CountryList {...{ scrollTo, filteredCountries }} />
      </main>
    </>
  );
};
export default Dashboard;
