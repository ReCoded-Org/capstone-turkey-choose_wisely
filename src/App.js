import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";

// import componentes
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// slider links
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.scss";
import "./style/style.css";

// import pages
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import RessourcesPage from "./containers/RessourcesPage";
import Universities from "./containers/Universities";
import Blog from "./containers/Blog";

function App() {
  return (
    <Router history={history}>
      <NavBar />
      {/* Routing part */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/ressources" component={RessourcesPage} />
        <Route exact path="/Universities" component={Universities} />
        <Route exact path="/Blog" component={Blog} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
