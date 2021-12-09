import React from "react";
import styles from "./BorderCountries.module.scss";
import BorderMaker from "./_components/BorderMaker";

const BorderCountries = (props) => (
  <div
    className={`${styles.borderCountries} ${props.darkMode ? "dark" : "light"}`}
  >
    <BorderMaker {...props} />
  </div>
);

export default BorderCountries;
