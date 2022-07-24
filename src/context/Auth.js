import { createContext, useState } from "react";

export const User = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState(false);
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default Auth;
