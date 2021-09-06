import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import "./style.scss";
import { useTranslation } from "react-i18next";

const BlogDetails = ({ post }) => {
  const { t } = useTranslation();
  return (
    <div className="blog">
      <Link to={`SingleBlog/${post.category}/${post.slug}`} className="title">
        <Row>
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
                <Avatar name="Khadija" size="45" round={true} />
                <div className="auther_name_title">
                  <h6
                    dangerouslySetInnerHTML={{
                      __html: post.author === 210641422 && "Khadija",
                    }}
                    className="auther_name"
                  ></h6>
                  <span className="auther_job_title">
                    {t("blogs.blogPageAutherDetails")}
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default BlogDetails;
