import React from "react";
import { playerData } from "./data";
import { PlayerTile } from "./PlayerTile";

export const Players = () => {
  const playersBySlug = playerData.reduce((acc, data) => {
    acc[data.slug] = data;
    return acc;
  }, {});

  const playersByStatus = Object.entries(playersBySlug).reduce((acc, [slug, data]) => {
    if (!acc[data.player_status]) {
      acc[data.player_status] = [];
    }
    acc[data.player_status].push({ slug, ...data });
    return acc;
  }, {});

  return (
    <>
      <div className="player-container">
        <h2 className="update-notice">Website last updated: 6/21 9:30AM ET right before Episode 3</h2>
        <h1 className="all-player__title">Players of the Game</h1>
        <ul className="all-players__list">
          {playersByStatus.active.map((data, key) => (
            <PlayerTile data={data} key={key} />
          ))}

          {playersByStatus.unannounced.map((data, key) => (
            <PlayerTile data={data} key={key} />
          ))}

          {playersByStatus.eliminated.map((data, key) => (
            <PlayerTile data={data} key={key} />
          ))}

          {playersByStatus.sidelined.map((data, key) => (
            <PlayerTile data={data} key={key} />
          ))}
        </ul>
      </div>
    </>
  );
};
