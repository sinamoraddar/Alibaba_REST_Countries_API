import React, { useContext, useEffect, useState } from "react";
import Numeral from "numeral";
import { Link, useLocation, useParams } from "react-router-dom";
// components
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import BorderCountries from "./BorderCountries/BorderCountries";
// context
import { AppContext } from "../../contexts/AppContext";
// api
import { baseUrl } from "../../_api/config";
import { getCountryList } from "../../_api/methods";
// styles
import styles from "./CountryDetails.module.scss";

const CountryDetails = () => {
  // third party hooks
  const location = useLocation();
  const params = useParams();

  // context
  const { loading, setLoadingValue, isUsingDarkMode, totalCountries } =
    useContext(AppContext);

  // state
  const [countryDetails, setCountryDetails] = useState(null);

  // callbacks
  const fetchCountryDetails = () => {
    setLoadingValue(true);
    getCountryList()
      .then((response) => {
        handleCountryDetails(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoadingValue(false);
      });
  };

  const handleCountryDetails = (totalCountries) => {
    setCountryDetails(
      totalCountries.find((country) => country.name === params.countryName)
    );
  };

  // life cycle hooks
  useEffect(() => {
    document.title = params.countryName;
  }, [params]);

  useEffect(() => {
    if (totalCountries?.length > 0) {
      handleCountryDetails(totalCountries);
    } else {
      fetchCountryDetails();
    }
  }, [location.key, totalCountries]);

  return (
    <>
      <header
        className={`${styles.countryDetails} ${
          isUsingDarkMode ? `dark` : `light`
        }`}
      >
        <NavBar />
        <Link
          to={baseUrl}
          className={`${styles.backButton} ${
            isUsingDarkMode ? "dark darkElements" : "light lightElements"
          }`}
        >
          <i className="fas fa-arrow-left" />
          Back
        </Link>
      </header>
      <main
        className={`${styles.countryDetails} ${styles.main}  ${
          isUsingDarkMode ? `dark` : `light`
        }`}
      >
        {loading || countryDetails === null ? (
          <Loading />
        ) : countryDetails === undefined ? (
          <p className={styles.error}>
            Sorry we we have no idea about the thing you're looking for
          </p>
        ) : (
          <>
            <div className={styles.flag}>
              <img
                src={countryDetails?.flag}
                alt={`${countryDetails.name} flag`}
              />
            </div>
            <div className={styles.details}>
              <h1> {params.countryName}</h1>
              <div className={styles.detailsContainer}>
                <div className={styles.mainDetails}>
                  <p>
                    Native Name:{" "}
                    <span
                      className={
                        isUsingDarkMode
                          ? styles.darkDetails
                          : styles.lightDetails
                      }
                    >
                      {countryDetails.nativeName}{" "}
                    </span>
                  </p>
                  <p>
                    Population:{" "}
                    <span
                      className={
                        isUsingDarkMode
                          ? styles.darkDetails
                          : styles.lightDetails
                      }
                    >
                      {Numeral(countryDetails.population).format(0, 0)}
                    </span>
                  </p>
                  <p>
                    Region:{" "}
                    <span
                      className={
                        isUsingDarkMode
                          ? styles.darkDetails
                          : styles.lightDetails
                      }
                    >
                      {countryDetails.region}
                    </span>
                  </p>
                  <p>
                    Sub Region:{" "}
                    <span
                      className={
                        isUsingDarkMode
                          ? styles.darkDetails
                          : styles.lightDetails
                      }
                    >
                      {" "}
                      {countryDetails.subregion}
                    </span>
                  </p>
                  <p>
                    Capital:{" "}
                    <span
                      className={
                        isUsingDarkMode
                          ? styles.darkDetails
                          : styles.lightDetails
                      }
                    >
                      {" "}
                      {countryDetails.capital || "-"}
                    </span>
                  </p>
                </div>
                <div className={styles.additionalDetails}>
                  <p>
                    Top Level Domain:{" "}
                    <span
                      className={
                        isUsingDarkMode
                          ? styles.darkDetails
                          : styles.lightDetails
                      }
                    >
                      {countryDetails.topLevelDomain}
                    </span>
                  </p>
                  <p>
                    Currencies:
                    <span
                      className={
                        isUsingDarkMode
                          ? styles.darkDetails
                          : styles.lightDetails
                      }
                    >
                      {" "}
                      {countryDetails?.currencies
                        ? countryDetails?.currencies[0]?.name
                        : "-"}
                    </span>
                  </p>
                  <p className={styles.languages}>
                    Languages :
                    {countryDetails.languages.map(({ name }) => (
                      <span
                        className={
                          isUsingDarkMode
                            ? styles.darkDetails
                            : styles.lightDetails
                        }
                        key={name}
                      >
                        {name}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <BorderCountries {...{ countryDetails, fetchCountryDetails }} />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default CountryDetails;
