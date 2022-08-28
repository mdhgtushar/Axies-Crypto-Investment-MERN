import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [Login, setLogin] = useState(undefined);
  const getdata = async () => {
    axios.defaults.withCredentials = true;
    const getdatax = await axios.get("http://localhost:5000/api/user/auth");

    if (getdatax.data) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return <AuthContext.Provider value={Login}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
