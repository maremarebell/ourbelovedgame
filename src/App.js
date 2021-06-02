import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Players } from './Players';
import { Player } from './Player';
import { playerData } from "./data";

var _ = require('underscore');

const PersonPage = ({ match }) => {

  const {
    params: { slug },
  } = match;

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
      <br/>
      <br/>
      <iframe title="Countdown" src="https://free.timeanddate.com/countdown/i7tynpyi/n179/cf100/cm0/cu4/ct0/cs0/cac000/cr0/ss0/cacfff/cpcfff/pct/tcfff/fs130/tatCountdown%20to%20Katie's%20Season/tacfff/tptTime%20Since%20Katie's%20Season%20Began/tpcfff/macfff/mpc000/iso2021-06-07T20:00:00" allowtransparency="true" frameborder="0" width="320" height="125"></iframe>
      <br/>
      <br/>
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