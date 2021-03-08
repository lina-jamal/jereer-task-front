import PropTypes from "prop-types";
import React, { useEffect, useState, createContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import firebase from "../firebase/config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();

  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAuth = async () => {
      try {
        const { user } = await firebase
          .auth()
          .signInWithCustomToken(localStorage.getItem("userToken"));
        const tokonId = await user.getIdToken();
        await Axios.post(`https://jereer-back.herokuapp.com/api/v1/auth`, {
          tokonId,
        });
        setIsAuth(true);
        setLoading(false);
      } catch (error) {
        // history.push("/login");
        setIsAuth(false);
        setLoading(false);
      }
    };
    getAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = { children: PropTypes.node.isRequired };

export default AuthProvider;
