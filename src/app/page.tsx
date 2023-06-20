'use client';

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Players } from './Players';
import { Player } from "./Player";
import { playerData } from "./data";
import { useParams } from "react-router-dom";

interface PlayerData {
  name: string;
  name_full: string;
  slug: string;
  age: string;
  job: string;
  location: string;
  origin: string;
  tags: string[];
  player_status: string;
  player_status_last_update: string;
  gor?: {
    gor_assessment_epi?: string;
    gor_assessment_timestamp?: string;
    predictions: {
      limo_exit?: string;
      gameplay?: string;
      game_length?: string;
      notes?: string;
    };
  };
  season_stats: {
    season: string;
    roses: number;
    hujus: number;
    ptcs: number;
  };
  social_media: {
    instagram_url: string;
    instagram_handle: string;
    tiktok_url: string;
    tiktok_handle: string;
    instagram_scrubbed: boolean;
    abc_profile: string;
    linkedin_url: string;
    linkedin_job: string;
  };
}

const PersonPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const player = playerData.find((player: PlayerData) => player.slug === slug);

  return (
    <div className="App">
      {player ? <Player data={player} /> : <p>Player not found</p>}
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
            <Route path='/player/:slug' element={<PersonPage />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
};

export default App;
