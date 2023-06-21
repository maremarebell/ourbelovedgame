'use client';

import React from "react";
import { playerData } from "./data";
import { PlayerTile } from "./PlayerTile";

export default function Players() {
  return (
    <>
      <div className="player-container">
        {/* <h2 className="update-notice">Website last updated: 6/21 9:30AM ET right before Episode 3</h2> */}
        <h1 className="all-player__title">UNDER CONSTRUCTION!</h1>
        
        {/* <ul className="all-players__list">
          {playerData.map((data, key) => (
            <PlayerTile data={data} key={key} />
          ))}
        </ul> */}
      </div>
    </>
  );
};
