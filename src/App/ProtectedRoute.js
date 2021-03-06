import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

import { AuthContext } from "../component/AuthContex";

function ProtectedRoute({ children, exact, path, component }) {
  const { isAuth, loading } = useContext(AuthContext);

  if (isAuth && !loading) {
    return (
      <Route exact={exact} path={path} component={component}>
        {children}
      </Route>
    );
  }
  return <Redirect to="/" />;
}
ProtectedRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string,
  component: PropTypes.node,
};

ProtectedRoute.defaultProps = {
  exact: false,
  path: "/",
  component: <></>,
};

export default ProtectedRoute;
