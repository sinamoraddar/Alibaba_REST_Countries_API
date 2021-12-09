import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const Loading = () => {
  const { isUsingDarkMode } = useContext(AppContext);
  return (
    <img
      className="loadingGif"
      src={`${process.env.PUBLIC_URL}/assets/pics/loading--${
        isUsingDarkMode ? `dark` : `light`
      }.svg`}
      alt="loading"
    />
  );
};
export default Loading;
