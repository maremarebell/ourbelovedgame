'use client';

import React from "react";
import { playerData } from "./season-17/data-17";
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
    <>
      <div className="player-container">
        <h2 className="update-notice">Website last updated: 6/21 11:15AM ET 2023</h2>
        <h1 className="all-player__title">UNDER CONSTRUCTION!</h1>
        <br/><br/><br/>
        <Link href={`/season-17`}>
          Check out previous players of Season 17
        </Link>
      </div>
    </>
  );
}
