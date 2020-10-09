import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Accounts from './containers/accounts/index';
import Networks from './containers/networks/index';
import Subscribers from './containers/subscribers/index';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accounts</Link>
            </li>
            <li>
              <Link to="/networks">Networks</Link>
            </li>
            <li>
              <Link to="/subscribers">Subscribers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/networks">
            <Networks />
          </Route>
          <Route path="/subscribers">
            <Subscribers />
          </Route>
          <Route path="/">
            <Accounts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}