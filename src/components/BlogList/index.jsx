import React, { useEffect, useState } from "react";
import BlogDetails from "../BlogDetails";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { LANGUAGES } from "./../../utilities/variables";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const [language] = LANGUAGES.filter(
          (language) => language.code === i18n.language
        );
        const posts = await fetch(
          `https://public-api.wordpress.com/wp/v2/sites/choosewisely834444303.wordpress.com/posts?tags=${language.key}`
        );
        const data = await posts.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostData();

    setTimeout(() => {
      const aNods = document.querySelectorAll(".more-link");
      const array = Array.from(aNods);
      array.forEach((element) => {
        element.remove();
      });
    }, 900);
    // eslint-disable-next-line
  }, [i18n?.language]);

  const categories = [
    { key: 1342, value: "Education" },
    { key: 103, value: "News" },
    { key: 405, value: "Campus" },
    { key: 3072, value: "IT" },
  ];

  return (
    <div>
      <Container>
        <div>
          <Row>
            <Col lg={12}>
              <h1 className="header">{t("blogs.header")}</h1>
            </Col>

            <Col lg={6} md={12}>
              <p className="blogsParagraph">{t("blogs.title")}</p>
            </Col>
          </Row>
        </div>

        {posts.map((post) => {
          const categoryObject = categories.find(
            (el) => el.key === post.categories[0]
          );
          post.category = categoryObject.value;
          return <BlogDetails post={post} />;
        })}
      </Container>
    </div>
  );
};

export default BlogList;
