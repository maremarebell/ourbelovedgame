'use client';

import React, { useState } from 'react';
import playerData from "../data/data-20-players.json";
import { PlayerTile } from "../components/PlayerTile";
import { PlayerLine } from "../components/PlayerLine";
import { PlayerDetailed } from "../components/PlayerDetailed";
import Link from 'next/link';
import { Schibsted_Grotesk } from 'next/font/google'
import { ReorderIcon } from '../utils/logos.js';
import { ListIcon } from '../utils/logos.js';
import { GalleryIcon } from '../utils/logos.js';
import { FullscreenIcon } from '../utils/logos.js';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

interface Player {
  player_status: string;
  slug: string;
  gorder: number;
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

  const [isGorder, setGorder] = useState(false); // State to track the order
  const [selectedOption, setSelectedOption] = useState("tile");

  const handleToggle = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  const toggleOrder = () => {
    setGorder(!isGorder);
  };

  // Create a new array with players in the desired order
  const orderedPlayers = groupOrder.reduce<Player[]>((ordered, status) => {
    if (groupedPlayers[status]) {
      ordered.push(...groupedPlayers[status]);
    }
    return ordered;
  }, []);

  // Sort the players in the GOR order if the state is set to GOR order
  if (isGorder) {
    orderedPlayers.sort((a, b) => a.gorder - b.gorder);
  }

  return (
    <>
      <div className="container">
        <div className="players__header">
          <h1 className={sgfont.className}>Season 20 Players</h1>
          <p className="players__header__message">Click headshots to see players profiles.</p>
          <p className="players__header__update-notice">Last updated: 6/25 10:00PM ET 2023</p>

          <div className="controls">
            <div className="toggle">
              <button
                className={`button button--toggle ${selectedOption === "tile" ? 'toggle__option--active' : ''}`}
                onClick={() => handleToggle("tile")}
              >
                <GalleryIcon />
              </button>
              <button
                className={`button button--toggle ${selectedOption === "line" ? 'toggle__option--active' : ''}`}
                onClick={() => handleToggle("line")}
              >
                <ListIcon />
              </button>
              <button
                className={`button button--toggle ${selectedOption === "detailed" ? 'toggle__option--active' : ''}`}
                onClick={() => handleToggle("detailed")}
              >
                <FullscreenIcon />
              </button>
            </div>

            <button onClick={toggleOrder} className="button button--reorder">
              <ReorderIcon />
              {isGorder ? 'Reorder alphabteically' : 'Reorder by GOR analyses'}
            </button>
          </div>
        </div>

        <ul className="players">
          {selectedOption === "tile" && (
            orderedPlayers.map((player, index) => (
              <PlayerTile key={index} data={player} index={index} />
            ))
          )}

          {selectedOption === "line" && (
            orderedPlayers.map((player, index) => (
              <PlayerLine key={index} data={player} index={index} />
            ))
          )}

          {selectedOption === "detailed" && (
            orderedPlayers.map((player, index) => (
              <PlayerDetailed key={index} player={player} index={index} />
            ))
          )}
        </ul>

        <Link href="/season-17" className="previous-season">
          Check out previous players of Season 17
        </Link>
      </div>
    </>
  );
}
