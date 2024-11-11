import React from "react";
import Navbar from "./Navbar";

const Wrapper = ({ children }) => {
  return (
    <div className="main-container">
      <Navbar />
      {children}
    </div>
  );
};

export default Wrapper;
