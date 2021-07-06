import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LocalButton from "./Button";

const App = () => (
  <BrowserRouter>
    <nav>
      <h1>App 2 (React {React.version})</h1>
      <ul>
        <li>
          <Link to="/app2/link-1">Link 1</Link>
        </li>
        <li>
          <Link to="/app2/link-2">Link 2</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/app2/link-1">
        <h2>Link 1</h2>
        <LocalButton />
      </Route>
      <Route path="/app2/link-2">
        <h2>Link 2</h2>
      </Route>
      <Route path="/app2/">
        <h2>Home</h2>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
