import React from "react"; // , { useEffect }
import Home from "./containers/Home/Home";
import Footer from "./components/Footer";

import { Route, Switch, Router } from "react-router-dom";
import history from "./history";

import "./App.scss";
import "./style/style.css";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
