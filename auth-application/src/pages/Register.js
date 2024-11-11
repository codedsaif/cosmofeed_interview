import React, { useState } from "react";
import { Wrapper } from "../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if credentials already exist in localStorage
    const existingCredentials = JSON.parse(
      localStorage.getItem("userCredentials")
    );
    if (existingCredentials && existingCredentials.username === username) {
      alert("User already exists. Redirecting to login page.");
      navigate("/login");
      return;
    }

    // Save new credentials to localStorage
    localStorage.setItem(
      "userCredentials",
      JSON.stringify({ username, password })
    );
    alert("Registration successful! You can now log in.");
    navigate("/login"); // Redirect to login after successful registration
  };

  return (
    <Wrapper>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </Wrapper>
  );
};

export default Register;
