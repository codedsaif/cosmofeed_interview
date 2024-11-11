import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper } from "../components";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call login and check if it was successful
    const isLoggedIn = login(username, password);

    // If login is successful, navigate to the previously stored path or the home page
    if (isLoggedIn) {
      const redirectPath = location.state?.from?.pathname || "/";
      navigate(redirectPath);
    }
  };

  return (
    <Wrapper>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </Wrapper>
  );
};

export default Login;
