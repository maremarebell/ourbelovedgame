'use client';

import React, { useState } from 'react';
import playerData from "./data/data-golden-1-players.json";
import { GoldenPlayerTile } from "./components/GoldenPlayerTile";
import Link from 'next/link';
import { Schibsted_Grotesk } from 'next/font/google'

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

interface Player {
  player_status: string;
  slug: string;
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

  const [selectedOption, setSelectedOption] = useState("tile");

  const handleToggle = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  // Create a new array with players in the desired order
  const orderedPlayers = groupOrder.reduce<Player[]>((ordered, status) => {
    if (groupedPlayers[status]) {
      ordered.push(...groupedPlayers[status]);
    }
    return ordered;
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className={sgfont.className + " header__headline"}>Golden Bachelor Season 1 Players</h1>
          <p className="header__notice">Last updated: 9/29 10:00PM ET 2023</p>
        </div>

        <ul className="players">
          {selectedOption === "tile" && (
            orderedPlayers.map((player, index) => (
              <GoldenPlayerTile key={index} data={player} index={index} />
            ))
          )}
        </ul>

        <Link href="/bachelorette-season-20" className="previous-season">
          Check out previous players of Bachelorette Season 20
        </Link>
        
        <Link href="/season-17" className="previous-season">
          Check out previous players of Bachelorette Season 17
        </Link>
      </div>
    </>
  );
}
