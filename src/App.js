import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Players } from './Players';
import { Player } from './Player';
import { playerData } from "./data";

var _ = require('underscore');

const PersonPage = ({ match }) => {

  const {
    params: { slug },
  } = match;

  const [data, setData] = useState();

  var players = _.indexBy(playerData, 'slug');

  var singlePlayerData = players.[slug];

  return (
    <div className="App">
      <Player singlePlayerData={singlePlayerData} />
    </div>
  );
};

const HomePage = () => {
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