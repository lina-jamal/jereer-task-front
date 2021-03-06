import PropTypes from "prop-types";
import React, { useEffect, useState, createContext } from "react";
import Axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const { CancelToken } = Axios;
    const source = CancelToken.source();

    getAuth();
    return () => source.cancel("Operation canceled by the user.");
  }, []);

  const getAuth = async () => {
    try {
      const { data } = await Axios.get(
        `https://jereer-back.herokuapp.com/api/v1/auth`
      );
      setUserInfo({ data });
      setIsAuth(true);
      setLoading(false);
    } catch (error) {
      setIsAuth(false);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading ..!</p>
      ) : (
        <AuthContext.Provider value={{ isAuth, setIsAuth, userInfo, loading }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

AuthProvider.propTypes = { children: PropTypes.node.isRequired };

export default AuthProvider;
