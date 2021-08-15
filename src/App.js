import React from "react"; // , { useEffect }
// import { useTranslation } from "react-i18next";
import "./App.scss";
import "./style/style.css";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";
import Home from "./containers/Home";

function App() {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
