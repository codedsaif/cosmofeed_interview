import React from "react";
import { Wrapper } from "../components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you’re looking for doesn’t exist. It may have been
          moved or deleted.
        </p>
        <Link to="/">Go Back to Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
