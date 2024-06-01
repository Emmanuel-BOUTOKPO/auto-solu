import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Charger l'utilisateur depuis le localStorage ou utiliser null par défaut
  const initialUser = JSON.parse(localStorage.getItem('user')) || null;
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = (username, password) => {
     
    if (username === 'admin' && password === 'admin@123') {
      setUser({ username, role: 'admin' });
    } else if (username === 'user' && password === 'user123') {
      setUser({ username, role: 'user' });
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
