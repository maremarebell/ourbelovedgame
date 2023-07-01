import React, { useEffect, useState } from 'react';
import Episode from './Episode';
import { textWithLinks } from '../utils/textUtils';
import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Stats({ data, player }) {
  const [episodesData, setEpisodesData] = useState([]);

  useEffect(() => {
    const fetchEpisodeData = async () => {
      try {
        const episodeNumbers = [1];
        const episodesData = await Promise.all(
          episodeNumbers.map(async (episodeNumber) => {
            const response = await fetch(`/data/data-20-epi-${episodeNumber}.json`);
            const data = await response.json();
            return data;
          })
        );
        setEpisodesData(episodesData);
      } catch (error) {
        console.error('Error fetching episode data:', error);
      }
    };

    fetchEpisodeData();
  }, []);

  return (
    <section className="profile__section">
      <h3 className={sgfont.className}>📊 Season Stats</h3>
      <div className="stats">
        <div className="stats__row">
          <div className="stat">
            <span className="stat__title">Dates</span>
            <span className="stat__value">0</span>
            <span className="stat_detail"></span>
          </div>
          <div className="stat">
            <span className="stat__title">Kisses</span>
            <span className="stat__value">0</span>
            <span className="stat_detail"></span>
          </div>
          <div className="stat">
            <span className="stat__title">PTCs</span>
            <span className="stat__value">0</span>
            <span className="stat_detail"></span>
          </div>
          <div className="stat">
            <span className="stat__title">Love Level</span>
            <span className="stat__value">0</span>
            <span className="stat_detail"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
