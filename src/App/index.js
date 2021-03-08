import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Login, SignUp, Landing } from "../pages";
import Menu from "../component/common/Menu";
import { Switch, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import AuthProvider from "../component/AuthContex";
import { AuthContext } from "../component/AuthContex";
import "./App.css";
const Hello = () => {
  const { isAuth, loading } = useContext(AuthContext);
  return isAuth ? <h1>Hello</h1> : <h1>Looding..!</h1>;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/hello" component={Hello} />

            <Route>
              <h1>page not found</h1>
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
