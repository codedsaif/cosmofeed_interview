import React from "react";
import { Wrapper } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <div>
        <h1>Welcome Home!</h1>
        <p>
          This is your secure home page. As an authenticated user, you have
          access to all the features and resources of this application.
        </p>
        <p>
          Take a look around, and let us know if you have any questions. We’re
          here to help you make the most out of this app!
        </p>
      </div>
    </Wrapper>
  );
};

export default Home;
