import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [log, setLog] = useState(false);


  //default axios
 
  useEffect(() => {
    const data = sessionStorage.getItem("userInfo");
     
    if (data) {
      const parseData = JSON.parse(data);
      console.log(parseData)
      setAuth({
        ...auth,
        user: parseData.username,
        token: parseData.token,
      });
      //console.log(auth)
    }
       
    
  }, [auth]);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

{/*import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

 
const useAuth = () => 
useContext(AuthContext);



const AuthProvider = ({ props }) => {
  const [auth, setAuth] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    const data = sessionStorage.getItem("userInfo");
    if (data) {
      setAuth(data);
      setLoggedIn(true);
    } else {
      setAuth(null);
      setLoggedIn(false);
    }
  }, []);
  //axios.defaults.headers.common["Authorization"] = authUser?.token;

  const value={
    auth,
    setAuth,
  loggedIn,
  setLoggedIn  }



  return (
    <AuthContext.Provider value={value}>
      {props}
    </AuthContext.Provider>
  );
};

// custom hook

export { useAuth, AuthProvider };*/}