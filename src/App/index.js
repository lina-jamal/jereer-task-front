import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Login, SignUp, Landing } from "../pages";
import Menu from "../component/common/Menu";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AuthProvider from "../component/AuthContex";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Menu />

          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <ProtectedRoute component={Landing} />

            <Route>
              <h1>page not found</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
