import React from "react";
import spinner from "../../img/ajax-loader.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "30px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
