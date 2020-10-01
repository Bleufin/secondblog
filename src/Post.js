import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getFirebase } from "./firebase";
import "./Post.css";

const Post = () => {
  const slug = useParams().slug;
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  if (loading && !currentPost) {
    getFirebase()
      .database()
      .ref()
      .child(`/posts/${slug}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        setLoading(false);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const postDoesNotExist = !currentPost;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  return (
    <div className="post">
      <h1>{currentPost.title}</h1>
      <div className="date">{currentPost.datePretty}</div>
      <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
    </div>
  );
};

export default Post;
