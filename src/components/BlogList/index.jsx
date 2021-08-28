import React, { useEffect, useState } from "react";
import BlogDetails from "../BlogDetails";
import { useTranslation } from "react-i18next";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const posts = await fetch(
          `https://public-api.wordpress.com/wp/v2/sites/choosewisely834444303.wordpress.com/posts?_embad`
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
  }, []);

  const categories = [
    { key: 1342, value: "Education" },
    { key: 103, value: "News" },
    { key: 405, value: "Campus" },
    { key: 3072, value: "IT" },
  ];

  return (
    <div>
      <div>
        <h1 className="header">{t("blogs.header")}</h1>
        <p className="blogsParagraph">{t("blogs.title")}</p>
      </div>

      {posts.map((post) => {
        const categoryObject = categories.find(
          (el) => el.key === post.categories[0]
        );
        post.category = categoryObject.value;
        return <BlogDetails post={post} />;
      })}
    </div>
  );
};

export default BlogList;
