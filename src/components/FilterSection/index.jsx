import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBox from "../../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import {
  FETCH_UNIVERSITIES,
  SEARCH_UNIVERSITIES,
  FILTER_UNIVERSITIES_BY_NAME,
  FILTER_UNIVERSITIES_BY_STATUS,
  FILTER_UNIVERSITIES_BY_TYPE,
  FILTER_UNIVERSITIES_BY_PROVINCE,
  UNDO_FILTER_UNIVERSITIES_BY_NAME,
  UNDO_FILTER_UNIVERSITIES_BY_TYPE,
  UNDO_FILTER_UNIVERSITIES_BY_PROVINCE,
  LOADING,
  FOUND,
  NOTFOUND,
} from "../../utilities/types";
import { db } from "./../../firebase";
import { useTranslation } from "react-i18next";
const FilterSection = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const { userInfo, isLoggedIn } = useSelector((state) => state.user);

  const { t } = useTranslation();

  const [filter, setFilter] = useState({
    name: false,
    province: false,
    type: false,
    status: false,
  });
  // eslint-disable-next-line
  // const [notFound, setNotFound] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     await fetchAllUniversities();
  //   })();
  //   // eslint-disable-next-line
  // }, [dispatch, isLoggedIn]);

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
          .onSnapshot(async (querySnapshot) => {
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

  const searchKeyWord = async (field, term) => {
    const foundUniversities = await db
      .collection("universities")
      .where(`${field}`, "==", `${term}`)
      .get()
      .then((querySnapshot) => {
        const universities = querySnapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        });
        return universities;
      });
    return foundUniversities;
  };

  const searchUniversities = async (term) => {
    try {
      if (term.length < 1) {
        fetchAllUniversities();
        // setNotFound(false);
        dispatch({ type: FOUND });
        return;
      }

      dispatch({ type: LOADING });
      // check to name in english
      let results = [];
      results = await searchKeyWord("enName", term);

      if (results.length > 0) {
        // setNotFound(false);
        dispatch({ type: FOUND });
        dispatch({ type: SEARCH_UNIVERSITIES, payload: results });
        return;
      } else {
        dispatch({ type: NOTFOUND });
      }
      // check to name in turkish
      results = await searchKeyWord("trName", term);
      if (results.length > 0) {
        // setNotFound(false);
        dispatch({ type: FOUND });
        dispatch({ type: SEARCH_UNIVERSITIES, payload: results });
        return;
      } else {
        dispatch({ type: NOTFOUND });
      }

      dispatch({ type: SEARCH_UNIVERSITIES, payload: [] });
      // setNotFound(true);
      dispatch({ type: NOTFOUND });
    } catch (error) {
      console.log("error search universities:", error);
    }
  };

  const filterUniversities = (term) => {
    dispatch({ type: LOADING });
    switch (term) {
      case "name":
        dispatch({ type: FILTER_UNIVERSITIES_BY_NAME });
        break;
      case "type":
        dispatch({ type: FILTER_UNIVERSITIES_BY_TYPE });
        break;
      case "status":
        dispatch({ type: FILTER_UNIVERSITIES_BY_STATUS });
        break;
      case "province":
        dispatch({ type: FILTER_UNIVERSITIES_BY_PROVINCE });
        break;
      default:
        break;
    }
  };

  return (
    <div className="filter_section">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={5} md={6} sm={12}>
            <div className="search_bar_section">
              <SearchBox search={searchUniversities} />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <div className="filter_wrapper">
              <button
                onClick={(e) => {
                  setFilter({ ...filter, name: !filter.name });
                  !filter.name
                    ? filterUniversities("name")
                    : dispatch({ type: UNDO_FILTER_UNIVERSITIES_BY_NAME });
                }}
                className={`toggle ${filter.name && "active"} `}
              >
                {t("universities.filter.universityName")}
              </button>
              <button
                onClick={(e) => {
                  setFilter({ ...filter, province: !filter.province });
                  !filter.province
                    ? filterUniversities("province")
                    : dispatch({ type: UNDO_FILTER_UNIVERSITIES_BY_PROVINCE });
                }}
                className={`toggle ${filter.province && "active"} `}
              >
                {t("universities.filter.province")}
              </button>
              <button
                onClick={(e) => {
                  setFilter({ ...filter, type: !filter.type });
                  !filter.type
                    ? filterUniversities("type")
                    : dispatch({ type: UNDO_FILTER_UNIVERSITIES_BY_TYPE });
                }}
                className={`toggle ${filter.type && "active"} `}
              >
                {t("universities.filter.type")}
              </button>
              {isLoggedIn && (
                <button
                  onClick={(e) => {
                    setFilter({ ...filter, status: !filter.status });
                    !filter.status && filterUniversities("status");
                  }}
                  className={`toggle ${filter.status && "active"} `}
                >
                  {t("universities.filter.applicationStatus")}
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FilterSection;
