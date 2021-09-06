import React from "react";
import BlogList from "../../components/BlogList";
import "./style.scss";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t("navbar.chooseWisely")} | {t("navbar.blog")}
        </title>
      </Helmet>
      <BlogList />
    </div>
  );
};

export default Blog;
