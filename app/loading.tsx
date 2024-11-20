import React from "react";

const loading = () => {
  return (
    <div id="preloader">
      <div id="spinner">
        <div className="floating">
          <img src="images/logo.svg" alt="" className="img-responsive" />
        </div>
      </div>
    </div>
  );
};

export default loading;
