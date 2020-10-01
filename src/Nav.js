import React from "react";
import "./Nav.css";
import requests from "./requests";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.allPosts)}>All Posts</h2>
      <h2 onClick={() => setSelectedOption(requests.storageVirtualization)}>Storage Virtualization</h2>
      <h2 onClick={() => setSelectedOption(requests.networkVirtualization)}>Network Virtualization</h2>
      <h2 onClick={() => setSelectedOption(requests.createPost)}>Create post</h2>
    </div>
  );
}

export default Nav;
