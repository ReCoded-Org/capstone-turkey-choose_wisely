import React from "react"; // , { useEffect }
import Home from "./containers/Home";
import Universities from "./containers/Universities";
import NotFound from "./containers/NotFound";
import Contact from "./containers/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/PreLoad";

import { Route, Switch, Router } from "react-router-dom";
import history from "./history";

import "./App.scss";
import "./style/style.css";
import RessourcesPage from "./containers/RessourcesPage";

function App() {
  return (
    <Router history={history}>
      <Preloader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ressources" component={RessourcesPage} />
        <Route exact path="/universities" component={Universities} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/ressources" component={RessourcesPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
