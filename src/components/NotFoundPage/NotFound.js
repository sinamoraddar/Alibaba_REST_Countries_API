import React, { useContext } from "react";
import { Link } from "react-router-dom";
// api
import { baseUrl } from "../../_api/config";
// context
import { AppContext } from "../../contexts/AppContext";
// styles
import styles from "./NotFound.module.scss";

const NotFound = () => {
  // context
  const { isUsingDarkMode } = useContext(AppContext);

  return (
    <main
      className={`${styles.notFoundPage} ${isUsingDarkMode ? `dark` : `light`}`}
    >
      Sorry, nothing was found !
      <Link
        to={baseUrl}
        className={isUsingDarkMode ? "darkElements" : "lightElements"}
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default NotFound;
