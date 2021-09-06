import React, { useEffect } from "react";

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
import SingleBlog from "./containers/SingleBlog";
import Status from "./containers/Status";
import UserProfilePage from "./containers/UserProfilePage";

import { useDispatch, useSelector } from "react-redux";
import { FETCH_UNIVERSITIES, LOADING } from "./utilities/types";
import { db } from "./firebase";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const { userInfo, isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      await fetchAllUniversities();
    })();
    // eslint-disable-next-line
  }, [dispatch, isLoggedIn]);

  const fetchAllUniversities = async () => {
    try {
      dispatch({ type: LOADING });
      await db.collection("universities").onSnapshot(async (querySnapshot) => {
        const universities = querySnapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        });
        if (isLoggedIn) {
          const withStat = await userAuthenticated(userInfo, universities);
          dispatch({ type: FETCH_UNIVERSITIES, payload: withStat });
        } else {
          dispatch({ type: FETCH_UNIVERSITIES, payload: universities });
        }
      });
    } catch (error) {
      console.log("error fetch universities:", error);
    }
  };

  const userAuthenticated = async (userInfo, universities) => {
    const { email } = userInfo;
    return await Promise.all(
      universities.map(async (university) => {
        const status = await db
          .collection("universities")
          .doc(university.id)
          .collection("users")
          .where("email", "==", email)
          .get()
          .then(async (querySnapshot) => {
            return querySnapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            });
            // querySnapshot.docs.map((doc) => {
            //   return { id: doc.id, data: doc.data() };
            // });
          });

        if (status.length > 0) {
          university = {
            ...university,
            data: { ...university.data, status: status },
          };
        } else {
          university = {
            ...university,
            data: { ...university.data, status: false },
          };
        }
        return university;
      })
    );
  };

  return (
    <>
      <Router history={history}>
        <Preloader />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/resources" component={ResourcesPage} />
          <Route exact path="/Universities" component={Universities} />
          <Route exact path="/Profile" component={UserProfilePage} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/status" component={Status} />
          <Route exact path="/SingleBlog/:cat/:slug" component={SingleBlog} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
      <div className="chat">
        <MessengerCustomerChat
          pageId="234946631767823"
          appId="371633314425332"
        />
      </div>
    </>
  );
}

export default App;
