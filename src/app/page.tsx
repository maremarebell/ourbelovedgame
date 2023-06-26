'use client';

import React, { useEffect } from 'react';
import playerData from "./data-20.json";
import { PlayerTile } from "./PlayerTile";
import Link from 'next/link';
import { Schibsted_Grotesk } from 'next/font/google'
import Head from 'next/head';
import { initGA, logPageView } from './analytics';


const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

interface Player {
  player_status: string;
}

export default function Players() {

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

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
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/og-charity.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Beloved Game 🌹" />
        <meta name="twitter:description" content="Check out the men of Katie's Season 17 of the Bachelorette." />
        <meta name="twitter:image" content="https://ourbelovedgame.com/twitter-charity.png" />
      </Head>

      <div className="container">
        <h1 className={sgfont.className}>Season 20 Players</h1>
        <p className="message">Click headshots to see the players&apos; profiles.</p>
        <p className="update-notice">Last updated: 6/25 10:00PM ET 2023</p>

        <ul className="players">
          {groupOrder.map((status) => (
            <React.Fragment key={status}>
              {groupedPlayers[status] && groupedPlayers[status].map((player, index) => (
                <PlayerTile key={index} data={player} index={index} />
              ))}
            </React.Fragment>
          ))}
        </ul>

        <Link href="/season-17" className="previous-season">
          Check out previous players of Season 17
        </Link>
      </div>
    </>
  );
}
