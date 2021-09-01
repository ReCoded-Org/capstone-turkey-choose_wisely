import React from "react";

import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

// import componentes
import NavBar from "./components/NavBar";

// slider links
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.scss";


// import pages
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import RessourcesPage from "./containers/RessourcesPage";
import Universities from "./containers/Universities";
import Blog from "./containers/Blog";
import NotFound from "./containers/NotFound";
import Footer from "./components/Footer";
import Preloader from "./components/PreLoad";

function App() {
  return (
    <Router history={history}>
      <Preloader />
      <NavBar />

      {/* Routing part */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/ressources" component={RessourcesPage} />
        <Route exact path="/Universities" component={Universities} />
        <Route exact path="/Blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
