import React, { useEffect, useState } from 'react';
import Episode from './Episode';
import { textWithLinks } from '../utils/textUtils';
import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Sections({ data, player }) {
  const [episodesData, setEpisodesData] = useState([]);

  useEffect(() => {
    const fetchEpisodeData = async () => {
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

    fetchEpisodeData();
  }, []);

  const reversedEpisodesData = [...episodesData].reverse();

  return (
    <div>
      {reversedEpisodesData.map((episodeData, index) => (
        <Episode key={index} episodeData={episodeData} player={player} epiNumber={reversedEpisodesData.length - index} />
      ))}

      <section className="profile__section profile__section--epis">
        <h3 className={sgfont.className}>🔮 Pre-Season Predictions</h3>
        <p className="profile__p">
          Predictions come from <a href="https://linktr.ee/gameofroses" target="_blank">Game of Roses</a> <strong>Season 20 IG Analysis</strong>, which you can find
          wherever you listen to podcasts.
        </p>
        <ul className="profile__list">
          {player?.gor_predictions &&
            player.gor_predictions.split(';').map((prediction, index) => (
              <li key={index} className="profile__list__item">{textWithLinks(prediction.trim())}</li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default Sections;
