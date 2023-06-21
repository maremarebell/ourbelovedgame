'use client';

import React from "react";
import { playerData } from "../data-17";
import { PlayerTile } from "../PlayerTile";

interface Player {
  player_status: string;
}

export default function Players() {
  // Group the players based on player_status
  const groupedPlayers = playerData.reduce<{ [key: string]: Player[] }>((groups, player) => {
    const { player_status } = player;
    if (!groups[player_status]) {
      groups[player_status] = [];
    }
    groups[player_status].push(player);
    return groups;
  }, {});

  // Define the order of groups
  const groupOrder = ["active", "unannounced", "eliminated", "sidelined"];

  return (
    <>
      <div className="player-container">
        <h2 className="update-notice">Website last updated: 6/21 9:30AM ET right before Episode 3</h2>
        <h1 className="all-player__title">The Players</h1>

        <ul className="all-players__list">
          {groupOrder.map((status) => (
            <React.Fragment key={status}>
              {groupedPlayers[status] && (
                <div className={`players-group ${status}`}>
                  <ul className="all-players__list">
                    {groupedPlayers[status].map((player, index) => (
                      <PlayerTile key={index} data={player} />
                    ))}
                  </ul>
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}
