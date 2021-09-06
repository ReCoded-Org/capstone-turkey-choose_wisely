import React from "react";
import SingleBlogPage from "./../../components/SingleBlogPage";
import { useParams } from "react-router-dom";

export default function SingleBlog() {
  let { cat, slug } = useParams();

  return (
    <div>
      <SingleBlogPage postCat={cat} postSlug={slug} />
    </div>
  );
}
