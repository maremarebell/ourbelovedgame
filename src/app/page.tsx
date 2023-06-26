'use client';

import React, { useState } from 'react';
import playerData from "./data-20.json";
import { PlayerTile } from "./PlayerTile";
import { PlayerLine } from "./PlayerLine"; 
import Link from 'next/link';
import { Schibsted_Grotesk } from 'next/font/google'
import { ReorderIcon } from './utils/logos.js';
import { ListIcon } from './utils/logos.js';
import { GalleryIcon } from './utils/logos.js';


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

  const [isAlphabetical, setIsAlphabetical] = useState(true); // State to track the order
  const [isPlayerTile, setIsPlayerTile] = useState(true); // State to track the selected component type

  const toggleOrder = () => {
    setIsAlphabetical((prevState) => !prevState);
  };

  const toggleComponent = () => {
    setIsPlayerTile((prevState) => !prevState);
  };

  // Create a new array with players in the desired order
  const orderedPlayers = groupOrder.reduce<Player[]>((ordered, slug) => {
    if (groupedPlayers[slug]) {
      ordered.push(...groupedPlayers[slug]);
    }
    return ordered;
  }, []);

  // Sort the players alphabetically if the state is set to alphabetical
  if (isAlphabetical) {
    orderedPlayers.sort((a, b) => a.slug.localeCompare(b.slug));
  }

  return (
    <>
      <div className="container">
        <div className="players__header">
          <h1 className={sgfont.className}>Season 20 Players</h1>
          <p className="players__header__message">Click headshots to see players profiles.</p>
          <p className="players__header__update-notice">Last updated: 6/25 10:00PM ET 2023</p>

          <button onClick={toggleOrder} className="button button--reorder">
            <ReorderIcon />
            {isAlphabetical ? 'Reorder by GOR IG anlyses' : 'Reorder alphabteically'}
          </button>

          <button onClick={toggleComponent} className="toggle button">
            {isPlayerTile ? (
              <>
                <span className="toggle__option toggle__option--right toggle__option--active"><GalleryIcon /></span>
                <span className="toggle__option toggle__option--left "><ListIcon /></span>
              </>
            ) : (
              <>
                <span className="toggle__option toggle__option--right"><GalleryIcon /></span>
                <span className="toggle__option toggle__option--left toggle__option--active"><ListIcon /></span>
                
              </>
            )}
          </button>
        </div>

        <ul className="players">
          {orderedPlayers.map((player, index) => (
            // Conditionally render the component based on the value of isPlayerTile
            isPlayerTile ? (
              <PlayerTile key={index} data={player} index={index} />
            ) : (
              <PlayerLine key={index} data={player} index={index} />
            )
          ))}
        </ul>

        <Link href="/season-17" className="previous-season">
          Check out previous players of Season 17
        </Link>
      </div>
    </>
  );
}
