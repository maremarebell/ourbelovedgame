import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Players } from './Players';
import { playerData } from "./data";
import "./App.css";

var _ = require('underscore');

const PersonPage = ({ match }) => {

  const {
    params: { slug },
  } = match;

  const [data, setData] = useState();

  var players = _.indexBy(playerData, 'slug');

  return (
    <>
      age= {players.[slug].age}
    </>
  );
};

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://swapi.dev/api/people/", {})
      .then((res) => res.json())
      .then((response) => {
        setData(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Players />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/player/:slug" component={PersonPage} />
      </Router>
    </>
  );
};

export default App;