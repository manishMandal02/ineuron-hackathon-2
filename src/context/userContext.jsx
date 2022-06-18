import React, { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext({
  user: 'manish',
  setUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '', profilePic: '', token: '' });

  useEffect(() => {
    setUser({ firstName: 'Manish', lastName: 'Mandal', email: '' });
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
