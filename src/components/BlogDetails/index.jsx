import React from "react";
<<<<<<< HEAD
import { Row, Col } from "react-bootstrap";
import "./style.scss";
// import Avatar from "@material-ui/core/Avatar";
import Avatar from "react-avatar";
=======
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";
import Avatar from "@material-ui/core/Avatar";
>>>>>>> e8607d2bf9dcd15f9ebcbaa9b57cf155105f0a40

const BlogDetails = ({ post }) => {
  return (
    <div className="blog">
      {/* <Link to={`singleBlog/${post.id}`} className="title"> */}
      {/* <Container className=" justify-content-center  "> */}
<<<<<<< HEAD
      <Row>
=======
      <Row
      // className="justify-content-center"
      >
>>>>>>> e8607d2bf9dcd15f9ebcbaa9b57cf155105f0a40
        <Col sm={12} md={6} lg={5}>
          <div className="post_show_case">
            <img
              src={post.jetpack_featured_media_url}
              alt="featcherd"
              className="blog_image"
            />
          </div>
        </Col>
        <Col sm={12} md={6} lg={5}>
          <div className="post_info">
            <h2
              dangerouslySetInnerHTML={{ __html: post.category }}
              className="category"
            ></h2>
            <h1
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              className="HeaderText"
            ></h1>

            <div className="auther_info">
<<<<<<< HEAD
              {/* <Avatar className="Avatar" alt="Remy Sharp" /> */}
              <Avatar name="Khadija" size="45" round={true} />
=======
              <Avatar className="Avatar" alt="Remy Sharp" />
>>>>>>> e8607d2bf9dcd15f9ebcbaa9b57cf155105f0a40
              <div className="auther_name_title">
                <h6
                  dangerouslySetInnerHTML={{
                    __html: post.author === 210641422 && "Khadija",
                  }}
                  className="auther_name"
                ></h6>
                <span className="auther_job_title">
                  Content Writing / IT Depatement
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
      {/* </Link> */}
    </div>
  );
};

export default BlogDetails;