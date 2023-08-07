import React, { useEffect, useState } from 'react';
import { Schibsted_Grotesk } from 'next/font/google';
import './stats.scss';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function StatsTotals({ playerData, episodesData }) {
  const playerSlug = playerData.slug;

  // Flatten the episodesData array into a single array of episodes
  const allEpisodes = episodesData.flat();

  // Filter the episodes for the specific player
  const playerEpisodes = allEpisodes.filter((episode) => episode.slug === playerSlug);

  // Helper function to calculate the total count for a specific emoji (e.g., '😟', '👤')
  const calculateTotalCount = (emoji) => {
    const totalCount = playerEpisodes.reduce((total, episode) => {
      if (episode.notes) {
        const notesArray = episode.notes.split(';').map((note) => note.trim());
        const count = notesArray.filter((note) => note.includes(emoji)).length;
        return total + count;
      } else {
        return total;
      }
    }, 0);
    return totalCount;
  };

  // Calculate the total number of PTCs for the player
  const totalPTCs = calculateTotalCount('😟');

  // Calculate the total number of 1:1s for the player
  const totalOneonOnes = calculateTotalCount('👤');

  // Calculate the total number of awards for the player
  const totalAwards = calculateTotalCount('🏅');

  // Calculate the total number of roses for the player
  const totalRoses = calculateTotalCount('🌹');

  // Calculate the total number of errors for the player
  const totalErrors = calculateTotalCount('🚫');

  // Calculate the total number of kisses for the player
  const totalKisses = playerEpisodes.reduce((total, episode) => {
    const kissesCount = typeof episode.kisses === 'number' && !isNaN(episode.kisses) ? episode.kisses : 0;
    return total + kissesCount;
  }, 0);

  return (
    <div className="epi-stats epi-stats--total">
      <div className={`epi-stats__metric ${totalOneonOnes === 0 ? 'epi-stats__metric--nothing' : ''}`}>
        <span>💋</span>
        <span>{totalKisses}</span>
      </div>
      <div className={`epi-stats__metric ${totalOneonOnes === 0 ? 'epi-stats__metric--nothing' : ''}`}>
        <span>👤</span>
        <span>{totalOneonOnes}</span>
      </div>
      <div className={`epi-stats__metric ${totalPTCs === 0 ? 'epi-stats__metric--nothing' : ''}`}>
        <span>😟</span>
        <span>{totalPTCs}</span>
      </div>
      <div className={`epi-stats__metric ${totalAwards === 0 ? 'epi-stats__metric--nothing' : ''}`}>
        <span>🏅</span>
        <span>{totalAwards}</span>
      </div>
      <div className={`epi-stats__metric ${totalRoses === 0 ? 'epi-stats__metric--nothing' : ''}`}>
        <span>🌹</span>
        <span>{totalRoses}</span>
      </div>
      <div className={`epi-stats__metric ${totalErrors === 0 ? 'epi-stats__metric--nothing' : ''}`}>
        <span>🚫</span>
        <span>{totalErrors}</span>
      </div>
    </div>
  );
}

export default StatsTotals;
