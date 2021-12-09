import React, { useContext } from "react";
import { Link } from "react-router-dom";
// styles
import styles from "./NavBar.module.scss";
// context
import { AppContext } from "../../contexts/AppContext";
// api
import { baseUrl } from "../../_api/config";

const NavBar = () => {
  const { isUsingDarkMode, toggleDarkMode } = useContext(AppContext);
  return (
    <>
      <nav
        className={`${styles.container} ${styles.navBar} ${
          isUsingDarkMode ? `dark darkElements` : `light lightElements`
        }`}
      >
        <Link to={baseUrl} className={styles.bold}>
          Where in the world?
        </Link>
        <button
          className={`${styles.semiBold} ${
            isUsingDarkMode ? `dark darkElements` : `light lightElements`
          }`}
          onClick={toggleDarkMode}
        >
          {/* change the icons based on isUsingDarkMode's state */}
          {isUsingDarkMode ? (
            <>
              <i className="fas fa-moon" /> Light Mode
            </>
          ) : (
            <>
              <i className="far fa-moon" /> Dark Mode
            </>
          )}
        </button>
      </nav>
    </>
  );
};

export default NavBar;
