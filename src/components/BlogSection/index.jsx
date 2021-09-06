import React, { useEffect, useState } from "react";
import { db } from "./../../firebase";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./style.scss";
import SectionTitle from "../SectionTitle";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    setLoading(true);
    const fetchBlogs = () => {
      try {
        db.collection("Blog")
          .where("lang", "==", `${i18n.language}`)
          .get()
          .then((querySnapshot) => {
            const blogInfo = querySnapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            });
            setPosts(blogInfo);
            setLoading(false);
          });
      } catch (error) {
        setLoading(false);
      }
    };
    fetchBlogs();
    // eslint-disable-next-line
  }, [i18n?.language]);

  return (
    <div className="blog">
      <Container>
        <SectionTitle
          title={t("home.blog.title")}
          subText={t("home.blog.subText")}
        />
        <Row className="blog_cards">
          {loading
            ? `${t("loading")}`
            : posts.length > 0
            ? posts.map(({ id, data }) => (
                <Col key={id} lg={4} sm={12}>
                  <Card>
                    <Card.Body className="card_body">
                      <span className="art_date">{data.date}</span>
                      <Card.Title className="art_title">
                        {data.title}
                      </Card.Title>
                      <Card.Text className="art_text">{data.text}</Card.Text>
                      <Link className="btn art_btn12" to="/">
                        {t("home.blog.readMore")}
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : `${t("notData")}`}
        </Row>
        <Link className="btn art_btn12" to="/">
          {t("home.blog.seeAll")}
        </Link>
      </Container>
    </div>
  );
};

export default Blog;
