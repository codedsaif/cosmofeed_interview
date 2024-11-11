import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (username, password) => {
    const storedCredentials = JSON.parse(
      localStorage.getItem("userCredentials")
    );

    if (
      storedCredentials &&
      storedCredentials.username === username &&
      storedCredentials.password === password
    ) {
      setIsAuthenticated(true);
      navigate("/"); // Redirect to home page on successful login
      return true; // Indicate successful login
    } else {
      alert("Invalid credentials. Redirecting to the registration page.");
      setTimeout(() => {
        navigate("/register"); // Redirect to registration page if credentials are invalid
      }, 100);
      return false; // Indicate failed login
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
