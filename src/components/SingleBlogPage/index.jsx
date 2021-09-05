import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Avatar from "react-avatar";

import "./style.scss";

export default function SingleBlogPage({ postCat, postSlug }) {
  const [post, setpost] = useState({});

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const posts = await fetch(
          `https://public-api.wordpress.com/wp/v2/sites/choosewisely834444303.wordpress.com/posts?slug=${postSlug}`
        );
        const [data] = await posts.json();
        setpost(data);
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
  }, []);

  return (
    <div className="single_post">
      <Container>
        <Row>
          <Col>
            <div className="single_post_wrapper">
              <p className="sighle_post_catgeory">{postCat}</p>
              <h1
                dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
                className="single_blog_title"
              ></h1>
              <div className="post_image_header">
                <img
                  src={post.jetpack_featured_media_url}
                  alt={`post_image`}
                  className="post_image"
                />
              </div>
              <p
                dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
                className="single_post_content"
              ></p>
              <div className="auther_single_post">
                <Avatar name="Khadija" size="45" round={true} />
                <div className="post_auther_details">
                  <h6
                    dangerouslySetInnerHTML={{
                      __html: post.author === 210641422 && "Khadija",
                    }}
                    className="single_post_auther"
                  ></h6>
                  <p className="single_post_date">{post.date}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
