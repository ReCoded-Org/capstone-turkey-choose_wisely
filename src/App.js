import React from "react"; // , { useEffect }
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COUNT, REDUCE_COUNT } from "./utilities/types";
import { Container, Row, Button, Col, ListGroup } from "react-bootstrap";
import "./App.scss";
import "./style/style.css";
// import { db } from "./firebase";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";

function App() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const clicksReducer = useSelector((state) => state.clicks);

  // useEffect(() => {
  //   try {
  //     (async () => {
  //       try {
  //         await db.collection("collection").onSnapshot((snapShot) => {
  //           const docs = snapShot.docs.map((doc) => {
  //             return { id: doc.id, data: doc.data() };
  //           });
  //           console.log("docs :", docs);
  //         });
  //       } catch (error) {
  //         console.log("inside async error :", error);
  //       }
  //     })();
  //   } catch (error) {
  //     console.log("inside useEffect error :", error);
  //   }

  //   return () => {
  //     console.log("cleanUp");
  //   };
  // }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    // initial container from bootstrap
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Container>
            {/* initial html element styled with scss */}
            <div className="app">
              <span className="app__text">test scss</span>
            </div>
            {/* list of libraries */}
            <Row>
              <Col lg={12}>
                in this application i have added the ...
                <ListGroup>
                  <ListGroup.Item>react-bootstrap</ListGroup.Item>
                  <ListGroup.Item>i8next</ListGroup.Item>
                  <ListGroup.Item>redux</ListGroup.Item>
                  <ListGroup.Item>redux thunk</ListGroup.Item>
                  <ListGroup.Item>redux react</ListGroup.Item>
                  <ListGroup.Item>Scss</ListGroup.Item>
                  <ListGroup.Item>
                    firebase (auth, db, google services)
                  </ListGroup.Item>
                </ListGroup>
                {/* buttons for usage of reducers and languages */}
                <div className="buttons">
                  <div className="buttons__wrapper">
                    <div>
                      <Button onClick={(e) => dispatch({ type: ADD_COUNT })}>
                        {clicksReducer?.clicks} Add Click
                      </Button>
                      <Button onClick={(e) => dispatch({ type: REDUCE_COUNT })}>
                        {clicksReducer?.clicks} Reduce Click
                      </Button>
                    </div>
                    <div>
                      <Button onClick={(e) => changeLanguage("tr")}>
                        Translate to Turkish
                      </Button>
                      <Button
                        className="btn"
                        onClick={() => changeLanguage("en")}
                      >
                        Translate to English
                      </Button>
                    </div>
                  </div>
                </div>
                {/* some text to be translated */}
                <p>{t("home.hero.greeting")}</p>
              </Col>
            </Row>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
