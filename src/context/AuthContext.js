import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    // Имитация успешной авторизации
    if (email === 'test@example.com' && password === 'password') {
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  const register = (email, password) => {
    // Имитация успешной регистрации
    if (email && password) {
      return true;
    } else {
      return false;
    }
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;