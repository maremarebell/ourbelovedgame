import React from "react";
import { playerData } from "./data";
import { PlayerTile } from "./PlayerTile";


export const Players = () => {

  var _ = require('underscore');

  let players = _.indexBy(playerData, 'slug');

  players = _.groupBy(players, 'player_status');

  return (
    <>
      <div className="player-container">

        <h2 className="update-notice">Website last updated: 6/21 9:30AM ET right before Episode 3</h2>

        <h1 className="all-player__title">Players of the Game</h1>

        <ul className="all-players__list">
          {players.active.map((data, key) => {
            return (
              <PlayerTile data={data} />
            );
          })}

          {players.unannounced.map((data, key) => {
            return (
              <PlayerTile data={data} />
            );
          })}

          {players.eliminated.map((data, key) => {
            return (
              <PlayerTile data={data} />
            );
          })}

          {players.sidelined.map((data, key) => {
            return (
              <PlayerTile data={data} />
            );
          })}

        </ul>
      </div>
    </>
  );
};

