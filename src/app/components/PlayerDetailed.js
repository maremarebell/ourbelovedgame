import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Schibsted_Grotesk } from 'next/font/google'
import Stats from "./Stats";
import './player-detailed.scss';
import { fetchEpisodesData } from '../utils/api';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

export const PlayerDetailed= ({player, index}) => {

  const imagePath = `/assets/players/${player.slug}.png`;
  const blurImagePath = `/assets/players/${player.slug}-blur.png`;

  const [episodesData, setEpisodesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEpisodesData();
        setEpisodesData(data);
      } catch (error) {
        console.error('Error in fetchEpisodesData');
      }
    };

    fetchData();
  }, []);

  if (episodesData.length === 0) {
    return <p>Loading...</p>; // Or any other loading indicator
  }

  return (
    <li className={`player player--detailed player--${player.player_status}`}>

      <Link className="player__link" href={`/player/${player.slug}`}></Link>

      <span className={`player__name ${sgfont.className}`}>{player.name}</span>

      <div className="player__details">
        {player.age} | {player.job} | {player.location}
      </div>

      <div className="player__headshot-container">
        <img
          src={imagePath}
          alt={`headshot of ${player.name}`}
          className="player__headshot"
        />
      </div>

      <Stats key={index} playerData={player} episodesData={episodesData} />  
    </li>
  );
};
