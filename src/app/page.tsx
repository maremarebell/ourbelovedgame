'use client';

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import { Players } from './Players';
import { Player } from "./Player";
import { playerData } from "./data";
// import ScrollToTop from "./ScrollToTop";


const PersonPage = () => {
  const { slug } = useParams();
  
  const players: { [key: string]: any } = playerData.reduce((acc, player) => {
    acc[player.slug] = player;
    return acc;
  }, {});

  const player = players[slug];

  return (
    <div className="App">
      <Player data={player} />
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
          {/* <ScrollToTop /> */}
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/player/:slug' element={<PersonPage/>} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
};

export default App;
