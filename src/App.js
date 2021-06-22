import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Players } from './Players';
import { Player } from './Player';
import { playerData } from "./data";
import  ScrollToTop  from "./ScrollToTop.js";

var _ = require('underscore');

const PersonPage = ({ match }) => {

  const {
    params: { slug },
  } = match;

  var players = _.indexBy(playerData, 'slug');

  var data = players.[slug];

  return (
    <div className="App">
      <Player data={data} />
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
        <Fragment>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/player/:slug" component={PersonPage} />
          </Switch>
        </Fragment>
      </Router>
    </>
  );
};

export default App;