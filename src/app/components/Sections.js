import React, { useEffect, useState } from 'react';
import Episode from './Episode';
import { textWithLinks } from '../utils/textUtils';
import { Schibsted_Grotesk } from 'next/font/google';
import Stats from './Stats';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Sections({ playerData }) {
  const [episodesData, setEpisodesData] = useState([]);

  useEffect(() => {
    const fetchEpisodesData = async () => {
      try {
        const episodeNumbers = [1, 2];
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

    fetchEpisodesData();
  }, []);

  const reversedEpisodesData = [...episodesData].reverse();

  // Conditional rendering: Show loading or placeholder if episodesData is empty
  if (episodesData.length === 0) {
    return <p>Loading...</p>; // Or any other loading indicator
  }

  return (
    <div>
      <Stats playerData={playerData} episodesData={episodesData} />

      {reversedEpisodesData.map((episodeData, index) => {
        const playerEpisodeData = episodeData.find((data) => data.slug === playerData.slug);
        
        return (
          <Episode
            key={index}
            playerEpisodeData={playerEpisodeData}
            epiNumber={reversedEpisodesData.length - index}
          />
        );
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
