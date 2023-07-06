import React, { useEffect, useState } from 'react';
import Episode from './Episode';
import { textWithLinks } from '../utils/textUtils';
import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Stats({ data, player }) {
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    const fetchStatsData = async () => {
      try {
        // Fetch stats data from JSON file 
        const response = await fetch(`/data/data-20-epi-1.json`);
        const data = await response.json();

        const statsForPlayer = data.find((data) => data.slug === player.slug);
    
        setStatsData(statsForPlayer); // Update the statsData state with the fetched data

      } catch (error) {
        console.error('Error fetching episode data:', error);
      }
    };

    fetchStatsData();
  }, []);

  return (
    <section className="profile__section">
      <h3 className={sgfont.className}>📊 Season Stats</h3>
      <div className="stats">
        <div className="stats__row">
          <div className="stat">
            <span className="stat__title">Dates</span>
            <span className="stat__value">{statsData.dates_count || 0}</span>
            <span className="stat_detail"></span>
          </div>
          <div className="stat">
            <span className="stat__title">Kisses</span>
            <span className="stat__value">{statsData.kisses || 0}</span>
            <span className="stat_detail"></span>
          </div>
          <div className="stat">
            <span className="stat__title">PTCs</span>
            <span className="stat__value">{statsData.ptc_count || 0}</span>
            <span className="stat_detail"></span>
          </div>
          <div className="stat">
            <span className="stat__title">Awards</span>
            <span className="stat__value">{statsData.gor_awards ? statsData.gor_awards.split(';').length : 0}</span>
            <span className="stat_detail"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
