import React from "react";

import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import "./App.scss";

// import pages
import NavBar from "./components/NavBar";

import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import ResourcesPage from "./containers/ResourcesPage";
import Universities from "./containers/Universities";
import Blog from "./containers/Blog";
import NotFound from "./containers/NotFound";
import Footer from "./components/Footer";
import Preloader from "./components/PreLoad";
import UserProfilePage from "./containers/UserProfilePage";

// const { t, i18n } = useTranslation();

// const changeLanguage = (lng) => {
//   i18n.changeLanguage(lng);
// };

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
        <Route exact path="/resources" component={ResourcesPage} />
        <Route exact path="/Universities" component={Universities} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Profile" component={UserProfilePage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
