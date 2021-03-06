import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const isAuthenticated = useState(null);
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
      setLoading(true);
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading ..!</p>
      ) : (
        <AuthContext.Provider value={{ isAuthenticated, userInfo }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

AuthProvider.propTypes = { children: PropTypes.node.isRequired };

// const AuthConsumer = AuthContext.Consumer

export default AuthProvider;
