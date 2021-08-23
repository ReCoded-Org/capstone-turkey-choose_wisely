import React from "react"; // , { useEffect }

// import { useTranslation } from "react-i18next";
import "./App.scss";

// import { db } from "./firebase";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";
import Home from "./containers/Home/MyCard";

export default function App() {
  // const { t, i18n } = useTranslation();
  // const dispatch = useDispatch();
  // const clicksReducer = useSelector((state) => state.clicks);
  // // const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    // initial container from bootstrap
    <Router history={history}>
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
