'use client';

import React from "react";
import playerData from "./data-20.json";
import { PlayerTile } from "./PlayerTile";
import Link from 'next/link';

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
    <div className="container">
      <h1>Season 20 Players</h1>
      <p className="update-notice">Last updated: 6/21 11:15AM ET 2023</p>

      <Link href="/season-17" className="previous-season">
        Check out previous players of Season 17
      </Link>

      <ul className="players">
        {groupOrder.map((status) => (
          <React.Fragment key={status}>
            {groupedPlayers[status] && groupedPlayers[status].map((player, index) => (
              <PlayerTile key={index} data={player} />
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
