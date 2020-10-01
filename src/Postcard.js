import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import "./Postcard.css";

const Postcard = forwardRef(({ post }, ref) => {
  return (
    <Link to={`/${post.slug}`} style={{ textDecoration: "none" }}>
      <div key={post.slug} ref={ref} className="postcard">
        <img src={post.coverImage} alt={post.coverImageAlt} />
        <TextTruncate line={1} element="p" truncateText="..." text={post.content} />
        <h2>{post.title}</h2>
        <p className="postcard__stats">
          {`${post.category} \u2022 `}
          {post.datePretty} {"\u2022"}
        </p>
      </div>
    </Link>
  );
});

export default Postcard;
