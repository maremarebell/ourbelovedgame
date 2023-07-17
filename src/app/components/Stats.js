import React, { useEffect, useState } from 'react';
import { Schibsted_Grotesk } from 'next/font/google';
import './stats.scss';


const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Stats({ playerData, episodesData }) {

  const playerSlug = playerData.slug;

  // Flatten the episodesData array into a single array of episodes
  const allEpisodes = episodesData.flat();

  // Filter the episodes for the specific player
  const playerEpisodes = allEpisodes.filter((episode) => episode.slug === playerSlug);

  // Calculate the total number of kisses for the player
  const totalKisses = playerEpisodes.reduce((total, episode) => total + episode.kisses, 0);

  // Calculate the total number of PTCs for the player
  const totalPTCs = playerEpisodes.reduce((total, episode) => total + episode.ptc_count, 0);

  // Calculate the total number of awards for the player
  const totalAwards = playerEpisodes.reduce((total, episode) => {
    if (episode.gor_awards) {
      const awards = episode.gor_awards.split(';').filter((award) => award.trim().length > 0).length;
      return total + awards;
    }
    return total;
  }, 0);

  // Calculate the total of 1_1_count for the player
  const total11Count = playerEpisodes.reduce((total, episode) => total + (episode['1_1_count'] || 0), 0);

  // Calculate the total of gd_count for the player
  const totalGDCount = playerEpisodes.reduce((total, episode) => total + (episode.gd_count || 0), 0);

  // Find the highest love_level_max among the episodes for the player
  const highestLoveLevel = Math.max(...playerEpisodes.map((episode) => episode.love_level_max));

  return (
    <div className="stats">
      <div className="stats__row">
        <div className="stat">
          <span className="stat__title">Dates</span>
          <span className="stat__subtitle">1:1 | GD</span>
          <span className="stat__value">
            {total11Count}
            <span className="stat__divider"></span>
            {totalGDCount}
          </span>
          <span className="stat_detail"></span>
        </div>
        <div className="stat">
          <span className="stat__title">Kisses</span>
          <span className="stat__spacer"></span>
          <span className="stat__value">{totalKisses}</span>
          <span className="stat_detail"></span>
        </div>
        <div className="stat">
          <span className="stat__title">PTCs</span>
          <span className="stat__spacer"></span>
          <span className="stat__value">{totalPTCs}</span>
          <span className="stat_detail"></span>
        </div>
        <div className="stat">
          <span className="stat__title">Awards</span>
          <span className="stat__spacer"></span>
          <span className="stat__value">{totalAwards}</span>
          <span className="stat_detail"></span>
        </div>
        <div className="stat">
          <span className="stat__title">Love Level</span>
          <span className="stat__spacer"></span>
          <span className="stat__value">{highestLoveLevel}</span>
          <span className="stat_detail"></span>
        </div>
      </div>
    </div>
  );
}

export default Stats;
