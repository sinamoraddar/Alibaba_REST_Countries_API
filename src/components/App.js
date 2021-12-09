import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Dashboard from "./Dashboard/Dashboard";
import CountryDetails from "./CountryDetails/CountryDetails";
import NotFound from "./NotFoundPage/NotFound";
import { AppContext } from "../contexts/AppContext";

//determine the homepage path based on the development mode
const homePage =
  process.env.NODE_ENV === "development"
    ? "/"
    : "/REST-Countries-API-with-color-theme-switcher/";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isUsingDarkMode, setIsUsingDarkMode] = useState(true);
  const [totalCountries, setTotalCountries] = useState([]);
  // //change the darkmode state based on user interaction
  const appModeChanger = useCallback(() => {
    setIsUsingDarkMode((isUsingDarkMode) => !isUsingDarkMode);
  }, []);

  useEffect(() => {
    // fetch the countrylist's data from the api
    // we saved the json file in another repository on github cause the original api was broken somehow
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setTotalCountries(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={homePage}
            render={(routeProps) => (
              <Dashboard
                {...routeProps}
                appModeChanger={appModeChanger}
                darkMode={isUsingDarkMode}
                homePage={homePage}
                totalCountries={totalCountries}
              />
            )}
          />
          <Route
            exact
            path={`${homePage}countries/:countryName`}
            render={(routeProps) => (
              <CountryDetails
                {...routeProps}
                darkMode={isUsingDarkMode}
                homePage={homePage}
                appModeChanger={appModeChanger}
                totalCountries={totalCountries}
              />
            )}
          />
          <Route
            render={(routeProps) => (
              <NotFound
                {...routeProps}
                darkMode={isUsingDarkMode}
                homePage={homePage}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
