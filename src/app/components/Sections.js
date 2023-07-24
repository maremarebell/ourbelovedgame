import React, { useEffect, useState } from 'react';
import Episode from './Episode';
import { textWithLinks } from '../utils/textUtils';
import { Schibsted_Grotesk } from 'next/font/google';
import Stats from './Stats';
import { fetchEpisodesData } from '../utils/api';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Sections({ playerData }) {

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
  const reversedEpisodesData = [...episodesData].reverse();

  // Conditional rendering: Show loading or placeholder if episodesData is empty
  if (episodesData.length === 0) {
    return <p>Loading...</p>; // Or any other loading indicator
  }

  return (
    <div>
      <section className="profile__section">
        <h3 className={sgfont.className}>📊 Season Stats</h3>
        <Stats playerData={playerData} episodesData={episodesData} />
      </section>
  
      {reversedEpisodesData.map((episodeData, index) => {
        const playerEpisodeData = episodeData.find((data) => data.slug === playerData.slug);
        
        // Check if playerEpisodeData exists (truthy) before rendering the Episode component
        if (playerEpisodeData) {
          return (
            <Episode
              key={index}
              playerEpisodeData={playerEpisodeData}
              epiNumber={reversedEpisodesData.length - index}
            />
          );
        }
      })}
  
      <section className="profile__section profile__section--epis">
        <h3 className={sgfont.className}>🔮 Pre-Season Predictions</h3>
        <p className="profile__p">
          Predictions come from <a href="https://linktr.ee/gameofroses" target="_blank">Game of Roses</a> <strong>Season 20 IG Analysis</strong>, which you can find
          wherever you listen to podcasts.
        </p>
        <ul className="profile__list">
          {playerData?.gor_predictions &&
            playerData.gor_predictions.split(';').map((prediction, index) => (
              <li key={index} className="profile__list__item">{textWithLinks(prediction.trim())}</li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default Sections;
