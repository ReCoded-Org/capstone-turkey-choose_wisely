import React from "react"; // , { useEffect }
import Home from "./containers/Home";
import Universities from "./containers/Universities";
import NotFound from "./containers/NotFound";
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
<<<<<<< HEAD
        <Route exact path="/universities" component={Universities} />
        <Route component={NotFound} />
=======
        <Route exact path="/ressources" component={RessourcesPage} />
>>>>>>> f12fbb44da3a3b54fc9d9f33b657240279b8c5e7
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
