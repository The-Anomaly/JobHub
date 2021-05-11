import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import Start from "./Components/External/Start/StartPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/start" component={Start} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
