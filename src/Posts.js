import React from "react";
import Postcard from "./Postcard";
import FlipMove from "react-flip-move";

function Posts({ posts }) {
  return (
    <div className="posts">
      <FlipMove>
        {posts.map(post => (
          <Postcard key={post.id} post={post} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Posts;
