import React, { useEffect, useState } from "react";
import "./Home.css";
import { getFirebase } from "./firebase";
import Posts from "./Posts";

function Home({ selectedOption }) {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchData() {
      if (loading && !posts.length) {
        getFirebase()
          .database()
          .ref("/posts")
          .orderByChild("created")
          .once("value")
          .then(snapshot => {
            const posts = [];
            snapshot.forEach(childSnapshot => {
              const post = childSnapshot.val();
              let id = childSnapshot.ref_.path.pieces_[1];
              posts.push({ id, ...post });
            });

            const newestFirst = posts.reverse();
            setPosts(newestFirst);
            setAllPosts(newestFirst);
            setLoading(false);
          });
      } else {
        if (selectedOption === "allPosts") {
          setPosts(allPosts);
        } else {
          const selected = allPosts.filter(item => item.category === selectedOption);
          setPosts(selected);
        }
      }
    }
    fetchData();
  }, [selectedOption]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <Posts posts={posts} />;
}

export default Home;
