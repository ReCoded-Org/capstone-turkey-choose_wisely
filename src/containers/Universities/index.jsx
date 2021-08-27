import React, { useState, useEffect } from "react";
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
  LOADING,
} from "../../utilities/types";
import { db } from "./../../firebase";
import { useTranslation } from "react-i18next";

const Universities = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const { universities, loading } = useSelector((state) => state.universities);

  const { t } = useTranslation();

  const [filter, setFilter] = useState({
    name: false,
    province: false,
    type: false,
    status: false,
  });
  // eslint-disable-next-line
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchAllUniversities();
    // eslint-disable-next-line
  }, [dispatch]);

  const fetchAllUniversities = async () => {
    try {
      dispatch({ type: LOADING });
      db.collection("universities")
        .get()
        .then((querySnapshot) => {
          const universities = querySnapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          });
          dispatch({ type: FETCH_UNIVERSITIES, payload: universities });
        });
    } catch (error) {
      console.log("error fetch universities:", error);
    }
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
        setNotFound(false);
      } else {
        dispatch({ type: LOADING });
        // check to name in english
        const results = await searchKeyWord("enName", term);
        if (results.length > 0) {
          setNotFound(false);
          dispatch({ type: SEARCH_UNIVERSITIES, payload: results });
        } else {
          // check to name in turkish
          const results = await searchKeyWord("trName", term);
          if (results.length > 0) {
            setNotFound(false);
            dispatch({ type: SEARCH_UNIVERSITIES, payload: results });
          } else {
            dispatch({ type: SEARCH_UNIVERSITIES, payload: [] });
            setNotFound(true);
          }
        }
      }
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
    <div className="universities">
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
                    !filter.name && filterUniversities("name");
                  }}
                  className={`toggle ${filter.name && "active"} `}
                >
                  {t("universities.filter.universityName")}
                </button>
                <button
                  onClick={(e) => {
                    setFilter({ ...filter, province: !filter.province });
                    !filter.province && filterUniversities("province");
                  }}
                  className={`toggle ${filter.province && "active"} `}
                >
                  {t("universities.filter.province")}
                </button>
                <button
                  onClick={(e) => {
                    setFilter({ ...filter, type: !filter.type });
                    !filter.type && filterUniversities("type");
                  }}
                  className={`toggle ${filter.type && "active"} `}
                >
                  {t("universities.filter.type")}
                </button>
                <button
                  onClick={(e) => {
                    setFilter({ ...filter, status: !filter.status });
                    !filter.status && filterUniversities("status");
                  }}
                  className={`toggle ${filter.status && "active"} `}
                >
                  {t("universities.filter.applicationStatus")}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* {loading ? "Loading" : notFound ? "No Results" :  
      universities.map(university => {
        return <p key={university.id}>{university.data.enName}</p>
      })
      } */}
    </div>
  );
};

export default Universities;
