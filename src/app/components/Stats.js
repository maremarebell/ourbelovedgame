import React, { useEffect, useState } from 'react';
import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Stats({ playerData, episodesData }) {

  const playerSlug = playerData.slug;

  // Flatten the episodesData array into a single array of episodes
  const allEpisodes = episodesData.flat();

  // Filter the episodes for the specific player
  const playerEpisodes = allEpisodes.filter((episode) => episode.slug === playerSlug);

  // Calculate the total number of kisses for the player
  const totalKisses = playerEpisodes.reduce((total, episode) => total + episode.kisses, 0);
  
  return (
    <section className="profile__section">
      <h3 className={sgfont.className}>📊 Season Stats</h3>
      <div className="stats">
        <div className="stats__row">
          <div className="stat">
            <span className="stat__title">Dates</span>
            {/* <span className="stat__value">{statsData.dates_count || 0}</span> */}
            <span className="stat_detail"></span>
          </div>
          <div className="stat">
            <span className="stat__title">Kisses</span>
            <span className="stat__value">{totalKisses}</span>
            <span className="stat_detail"></span>
          </div>
          <div className="stat">
            <span className="stat__title">PTCs</span>
            {/* <span className="stat__value">{statsData.ptc_count || 0}</span> */}
            <span className="stat_detail"></span>
          </div>
          <div className="stat">
            <span className="stat__title">Awards</span>
            {/* <span className="stat__value">{statsData.gor_awards ? statsData.gor_awards.split(';').length : 0}</span> */}
            <span className="stat_detail"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
