import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Numeral from "numeral";
import { Link, Redirect } from "react-router-dom";
import styles from "./CountryDetails.module.scss";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import BorderCountries from "./BorderCountries/BorderCountries";
import { AppContext } from "../../contexts/AppContext";

const CountryDetails = (props) => {
  const { loading } = useContext(AppContext);
  const [countryDetails, setCountryDetails] = useState(null);
  const [notFoundStatus, setNotFoundStatus] = useState(null);
  const [redirect, setRedirect] = useState(null);
  const { darkMode, appModeChanger, totalCountries, homePage } = props;

  const onRedirect = () => {
    return redirect && <Redirect to="/404" />;
  };
  //get the country details
  const fetchCountryDetails = () => {
    axios
      .get(`https://restcountries.com/v2/all`)
      .then((response) => {
        //search for the current country in the countries list
        const tempCountryDetails = response.data.find(
          (country) => country.name === props.match.params.countryName
        );
        //do something whether the country was found or not
        if (tempCountryDetails) {
          setCountryDetails(tempCountryDetails);
        } else {
          // this.setState(() => ({ countryDetails: true, notFoundStatus: true }));
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    //set the document's title after the first render
    document.title = props.match.params.countryName;
  }, []);

  useEffect(() => {
    //set the document's title  whenever the component receives an update
    document.title = props.match.params.countryName;
  }, [props]);
  useEffect(() => {
    fetchCountryDetails();
  }, [props.location.key]);

  return (
    <>
      <header
        className={`${styles.countryDetails} ${darkMode ? `dark` : `light`}`}
      >
        <NavBar
          darkMode={darkMode}
          homePage={homePage}
          appModeChanger={appModeChanger}
        />
        <Link
          to={homePage}
          className={`${styles.backButton} ${
            darkMode ? "dark darkElements" : "light lightElements"
          }`}
        >
          <i className="fas fa-arrow-left" />
          Back
        </Link>
      </header>
      <main
        className={`${styles.countryDetails} ${styles.main}  ${
          darkMode ? `dark` : `light`
        }`}
      >
        {/* if the country details have not been fetched yet -> show the loading gif
              if they have-> show the details
          */}
        {countryDetails ? (
          /* show a message if the country ain't available in our database,
              otherwise show the content */
          notFoundStatus ? (
            <p className={styles.error}>
              sorry we we have no idea about the thing you're looking for
            </p>
          ) : (
            <React.Fragment>
              <div className={styles.flag}>
                <img
                  src={`https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/${countryDetails.alpha2Code.toLowerCase()}.svg`}
                  alt={`${countryDetails.name} flag`}
                />
              </div>
              <div className={styles.details}>
                <h1> {props.match.params.countryName}</h1>
                <div className={styles.detailsContainer}>
                  <div className={styles.mainDetails}>
                    <p>
                      Native Name:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {countryDetails.nativeName}{" "}
                      </span>
                    </p>
                    <p>
                      Population:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {/* filter the population number with numeral.js package */}
                        {Numeral(countryDetails.population).format(0, 0)}
                      </span>
                    </p>
                    <p>
                      Region:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {countryDetails.region}
                      </span>
                    </p>
                    <p>
                      Sub Region:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
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
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {" "}
                        {countryDetails.capital}
                      </span>
                    </p>
                  </div>
                  <div className={styles.additionalDetails}>
                    <p>
                      Top Level Domain:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {countryDetails.topLevelDomain}
                      </span>
                    </p>
                    <p>
                      Currencies:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {" "}
                        {countryDetails.currencies[0].name}
                      </span>
                    </p>
                    <p className={styles.languages}>
                      Languages :
                      {countryDetails.languages.map(({ name }) => (
                        <span
                          className={
                            darkMode ? styles.darkDetails : styles.lightDetails
                          }
                          key={name}
                        >
                          {name}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                {/* render the border countries */}
                {totalCountries && (
                  <BorderCountries
                    {...{ totalCountries, countryDetails, fetchCountryDetails }}
                    darkMode={darkMode}
                    homePage={homePage}
                  />
                )}
              </div>
            </React.Fragment>
          )
        ) : (
          <Loading darkMode={darkMode} homePage={homePage} />
        )}
      </main>
    </>
  );
};

export default CountryDetails;
