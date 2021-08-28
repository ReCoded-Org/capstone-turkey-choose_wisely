import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";
import Avatar from "@material-ui/core/Avatar";

const BlogDetails = ({ post }) => {
  console.log(post);
  return (
    <div className="blog">
      <Link to={`singleBlog/${post.id}`} className="title">
        <Container className=" justify-content-center  ">
          <Row xs={1}>
            <Col md={6}>
              <img
                src={post.jetpack_featured_media_url}
                alt="featcherd"
                className="image"
              />
            </Col>
            <Col md={6} className="TextSection">
              <h2
                dangerouslySetInnerHTML={{ __html: post.category }}
                className="category"
              ></h2>
              <h1
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                className="HeaderText"
              ></h1>
              {/* the html because it was fetching the tags also  */}
              {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} ></p> */}
              <Row xs={2} className="AutherAndAvatar">
                <Col md={1}>
                  <Avatar className="Avatar" alt="Remy Sharp" />
                </Col>
                <Col md={1}>
                  <h6
                    dangerouslySetInnerHTML={{
                      __html: post.author === 210641422 && "Khadija",
                    }}
                    className="auther"
                  ></h6>
                </Col>
              </Row>
              {/* <Link to={`/post/${post.slug}`}>
           Contenui Reading "{post.slug}"
         </Link> */}
            </Col>
          </Row>
        </Container>
      </Link>
    </div>
  );
};

export default BlogDetails;
