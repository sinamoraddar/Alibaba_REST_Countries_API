import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from "react";
import styles from "./FilterBar.module.scss";
import { AppContext } from "../../../contexts/AppContext";

const FilterBar = ({
  countrySearchField,
  regionFilter,
  onCountrySearchFieldChange,
  onRegionChange,
  scrollTo,
}) => {
  // context
  const { isUsingDarkMode } = useContext(AppContext);

  // state
  const [dropDownFilterStatus, setDropDownFilterStatus] = useState(false);

  // ref
  const regionFilterRef = useRef(null);

  // callbacks
  const handleClickOutside = (event) => {
    if (
      regionFilterRef.current &&
      !regionFilterRef.current.contains(event.target)
    ) {
      setDropDownFilterStatus(false);
    }
  };

  const onSearchFieldChange = useCallback(
    (e) => onCountrySearchFieldChange(e.target.value),
    []
  );

  const toggleDropDown = useCallback(
    () =>
      setDropDownFilterStatus((dropDownFilterStatus) => !dropDownFilterStatus),
    []
  );

  const resetRegion = useCallback((e) => {
    e.stopPropagation();
    onRegionChange("");
  }, []);

  const openDropDown = useCallback(
    (e) => {
      onRegionChange(e.target.innerHTML);
      toggleDropDown();
    },

    []
  );

  // life cycle hooks
  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={scrollTo}
      className={`${styles.filterBar} ${styles.container} ${
        isUsingDarkMode ? `dark` : `light`
      }`}
    >
      <span className={isUsingDarkMode ? `darkElements` : `lightElements`}>
        <i className="fas fa-search" />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={onSearchFieldChange}
          value={countrySearchField}
        />
      </span>
      <div className={styles.regionFilter} ref={regionFilterRef}>
        <div
          className={isUsingDarkMode ? `darkElements` : `lightElements`}
          onClick={toggleDropDown}
        >
          <span>
            {regionFilter && (
              <button
                className={isUsingDarkMode ? `darkElements` : `lightElements`}
                onClick={resetRegion}
              >
                <i className="fas fa-times" />
              </button>
            )}
            {regionFilter
              ? regionFilter.charAt(0).toUpperCase() + regionFilter.slice(1)
              : "Filter by Region"}
          </span>
          <i
            className={`fas fa-arrow-left ${
              dropDownFilterStatus ? styles.arrow__Up : styles.arrow__Down
            }`}
          />
        </div>
        {dropDownFilterStatus && (
          <ul
            className={isUsingDarkMode ? `darkElements` : `lightElements`}
            onClick={openDropDown}
          >
            <li>africa</li>
            <li>americas</li>
            <li>asia</li>
            <li>europe</li>
            <li>oceania</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
