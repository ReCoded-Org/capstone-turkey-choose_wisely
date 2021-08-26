import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBox from "../../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import {
  FETCH_UNIVERSITIES,
  SEARCH_UNIVERSITIES,
  FILTER_UNIVERSITIES,
  LOADING,
} from "../../utilities/types";
import { db } from "./../../firebase";
const Universities = () => {
  const dispatch = useDispatch();
  const { universities, loading } = useSelector((state) => state.universities);

  const [filter, setFilter] = useState({
    name: true,
    province: false,
    type: false,
    status: false,
  });
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchAllUniversities();
    // await db.collection("universities").doc().set(uni);
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
    dispatch({ type: FILTER_UNIVERSITIES, payload: term });
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
                    filter.name && filterUniversities("name");
                    setFilter({ ...filter, name: !filter.name });
                  }}
                  className={`toggle ${filter.name && "active"} `}
                >
                  University Name
                </button>
                <button
                  onClick={(e) => {
                    setFilter({ ...filter, province: !filter.province });
                    filterUniversities("province");
                  }}
                  className={`toggle ${filter.province && "active"} `}
                >
                  Province
                </button>
                <button
                  onClick={(e) => {
                    setFilter({ ...filter, type: !filter.type });
                    filterUniversities("type");
                  }}
                  className={`toggle ${filter.type && "active"} `}
                >
                  Type
                </button>
                <button
                  onClick={(e) => {
                    setFilter({ ...filter, status: !filter.status });
                    filterUniversities("status");
                  }}
                  className={`toggle ${filter.status && "active"} `}
                >
                  Application Status
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {loading ? "Loading" : notFound ? "No Results" : universities.length}
    </div>
  );
};

export default Universities;
