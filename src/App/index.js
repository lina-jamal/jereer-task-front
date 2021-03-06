import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Login, SignUp, Landing } from "../pages";
import Menu from "../component/common/Menu";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Switch>
          <ProtectedRoute component={Landing} />
          <Route exact path="/"></Route>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />

          <Route>
            <h1>page not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
