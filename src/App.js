import React from "react"; // , { useEffect }
// import { useTranslation } from "react-i18next";
import "./style/style.css";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import Home from "./containers/Home";
import Footer from "./components/Footer";

import { Route, Switch, Router } from "react-router-dom";
import history from "./history";
import "./App.scss";
import Blog from "./containers/Blog";
import "./style/style.css";

//  const { t, i18n } = useTranslation();

// const changeLanguage = (lng) => {
//   i18n.changeLanguage(lng);
// };

function App() {
  return (
    <Router history={history}>
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
