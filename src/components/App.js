import React, { useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import Dashboard from "./Dashboard/Dashboard";
import CountryDetails from "./CountryDetails/CountryDetails";
import NotFound from "./NotFoundPage/NotFound";
// context
import { AppContext } from "../contexts/AppContext";
// api
import { baseUrl } from "../_api/config";
import { getCountryList } from "../_api/methods";
// styles
import "./App.scss";

const App = () => {
  // refs
  const _isMounted = useRef(true);

  // state
  const [loading, setLoading] = useState(true);
  const [isUsingDarkMode, setIsUsingDarkMode] = useState(true);
  const [totalCountries, setTotalCountries] = useState([]);

  // callbacks
  const toggleDarkMode = useCallback(() => {
    setIsUsingDarkMode((isUsingDarkMode) => !isUsingDarkMode);
  }, []);

  const setLoadingValue = useCallback((loading) => {
    if (typeof loading === "boolean") {
      setLoading(loading);
    } else throw new Error("loading value should be a boolean");
  }, []);

  // life cycle hooks
  useEffect(() => {
    setLoadingValue(true);
    getCountryList()
      .then((result) => {
        if (_isMounted.current) {
          setTotalCountries(result.data);
        }
      })
      .catch(console.error)
      .finally(() => {
        setLoadingValue(false);
      });

    return () => {
      _isMounted.current = false;
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoadingValue,
        toggleDarkMode,
        isUsingDarkMode,
        totalCountries,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path={baseUrl}>
            <Dashboard />
          </Route>
          <Route exact path={`${baseUrl}countries/:countryName`}>
            <CountryDetails />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
