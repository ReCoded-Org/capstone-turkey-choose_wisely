import React from "react"; // , { useEffect }
// import { useTranslation } from "react-i18next";

import Home from "./containers/Home";
import Universities from "./containers/Universities";
import NotFound from "./containers/NotFound";
import Contact from "./containers/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/PreLoad";

import { Route, Switch, Router } from "react-router-dom";
import history from "./history";
import "./App.scss";
import Blog from "./containers/Blog";


import RessourcesPage from "./containers/RessourcesPage";

//  const { t, i18n } = useTranslation();

// const changeLanguage = (lng) => {
//   i18n.changeLanguage(lng);
// };

function App() {
  return (
    <Router history={history}>
      <Preloader />
      <Switch>
        <Route exact path="/" component={Home}>
          {/* <div>
                      <Button onClick={(e) => changeLanguage("tr")}>
                        Translate to Turkish
                      </Button>
                      <Button
                        className="btn"
                        onClick={() => changeLanguage("en")}
                      >
                        Translate to English
                      </Button>
                    </div> */}
        </Route>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="singlePost/:id" />
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
