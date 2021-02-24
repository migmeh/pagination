import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TutorialsList from "./components/list.component";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <h1 className='mytitle'>Welcome to my website</h1>
            </nav>

            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/tutorials"]} component={TutorialsList} />

              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
