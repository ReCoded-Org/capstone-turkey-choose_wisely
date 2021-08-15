import React from "react"; // , { useEffect }
// import { useTranslation } from "react-i18next";
// import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import "./style/style.css";
// import { db } from "./firebase";
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
import history from "./history";

// import componentes
import NavBar from "./components/NavBar";

// import pages
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Universities from "./containers/Universities";
import Blog from "./containers/Blog";

function App() {
  // const { t, i18n } = useTranslation();
  // const dispatch = useDispatch();
  // const clicksReducer = useSelector((state) => state.clicks);

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    // initial container from bootstrap
    <Router history={history}>
      <NavBar />
      {/* Routing part */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Universities" component={Universities} />
          <Route path="/Blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    </Router>
  );
}

export default App;
