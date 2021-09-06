import React, { useState } from "react";
import "./style.scss";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../utilities/helpers";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../firebase";
import { FETCH_UNIVERSITIES, LOADING } from "./../../utilities/types";

const University = ({
  logo,
  name,
  location,
  url,
  type,
  isApplied,
  isLoggedIn,
  uniId,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [applicationStat, setApplicationStat] = useState(isApplied);
  const { userInfo } = useSelector((state) => state.user);
  const apply = async (email, uniId, stat) => {
    if (stat !== false) {
      try {
        const specific = stat.find((uni) => uni.data.email === email);
        const { id } = specific;
        await db
          .collection("universities")
          .doc(uniId)
          .collection("users")
          .doc(id)
          .delete();
        setApplicationStat(false);
        fetchAllUniversities();
      } catch (error) {
        console.log("error :", error);
      }
    } else if (stat === false) {
      try {
        var date = new Date("2010-10-11T00:00:00+05:30");
        const data = {
          email: email,
          status: "pending",
          date: `${
            date.getMonth() > 8
              ? date.getMonth() + 1
              : "0" + (date.getMonth() + 1)
          } ${
            "/" + (date.getDate() > 9 ? date.getDate() : "0" + date.getDate())
          } '/' ${date.getFullYear()}`,
        };
        await db
          .collection("universities")
          .doc(uniId)
          .collection("users")
          .add(data)
          .then((doc) => {
            setApplicationStat({ id: doc.id, data: data });
          });

        fetchAllUniversities();
      } catch (error) {
        console.log("error:", error);
      }
    }
  };

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
    <div className="university">
      <Row>
        <Col>
          <div className="university_details">
            <Row>
              <Col sm={12} lg={5} className="university_details__logo">
                <img
                  className="university_logo"
                  src={getImageUrl(logo)}
                  alt={name}
                />
                <div className="university_details__info">
                  <h3 className="university_name">{name}</h3>
                  {url ? (
                    <Link
                      className="info_url underline"
                      to={{ pathname: `https://${url}` }}
                      target="_blank"
                    >
                      {url}
                    </Link>
                  ) : (
                    <span className="info_url">
                      {/* {t("universities.lists.unknown")} */}
                      {t("universities.lists.unknown")}
                    </span>
                  )}
                </div>
                {/* </div> */}
              </Col>
              <Col sm={12} lg={7} className="university_details__data">
                {/* <div className="university_details__data"> */}
                <span className="university_data">{location}</span>
                <span className="university_data">{type}</span>
                {isLoggedIn && (
                  <span
                    onClick={(e) =>
                      apply(userInfo.email, uniId, applicationStat)
                    }
                    className={`university_data application ${
                      applicationStat !== false && "applied"
                    }`}
                  >
                    {applicationStat !== false
                      ? `${t("universities.lists.applied")}`
                      : `${t("universities.lists.notApplied")}`}
                  </span>
                )}

                {/* <span>{isApplied}</span> */}
                {/* </div> */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default University;
