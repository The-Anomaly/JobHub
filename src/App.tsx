import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/dashboard";
import Start from "./Components/External/Start/StartPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Start} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
