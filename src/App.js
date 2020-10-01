import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import requests from "./requests";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Post from "./Post";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.allPosts);

  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/">
            <Nav setSelectedOption={setSelectedOption} />
            <Home selectedOption={selectedOption} />
          </Route>
          <Route path="/:slug">
            <Post selectedOption={selectedOption} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
