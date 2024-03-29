'use client';

import React, { useEffect, useState } from 'react';
import playerData from "../../data/data-20-players.json";
import Episode from '../../components/Episode';
import PlayerHero from '../../components/PlayerHero';
import StatsTotals from '../../components/StatsTotals';
import { fetchEpisodesData } from "../../utils/api";
import { generateTags } from "../../utils/textUtils";
import "../../components/player-table.scss";
import "../../components/player-comparison.scss";

export default function Page({ params }) {
  const requestedSlugs = decodeURIComponent(params.slugs).toLowerCase().split(",");

  const players = requestedSlugs.map((requestedSlug) => {
    const player = playerData.find(
      (data) =>
        data.slug.toLowerCase() === requestedSlug ||
        data.name.toLowerCase() === requestedSlug ||
        (data.other_slugs &&
          data.other_slugs
            .split(",")
            .some((slug) => slug.trim().toLowerCase() === requestedSlug))
    );

    if (player) {
      return player;
    } else {
      return null;
    }
  });

  const [episodesData, setEpisodesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEpisodesData();
        setEpisodesData([...data].reverse()); // Reverse the order of episodesData
      } catch (error) {
        console.error('Error in fetchEpisodesData');
      }
    };

    fetchData();
  }, []);

  // Conditional rendering: Show loading or placeholder if episodesData is empty
  if (episodesData.length === 0) {
    return <p>Loading...</p>; 
  }

  if (requestedSlugs.length === 0) {
    return <div>You gotta pick some playas</div>;
  }

  if (players.length === 1) {
    return 'Choose 2 or more players to compare.';
  }

  const generateTableRows = (propertyKey, label, defaultValue = "Player does not exist") => (
    <tr>
      <td>{label}</td>
      {players.map((data, index) => (
        <td key={index}>{data ? data[propertyKey] : defaultValue}</td>
      ))}
    </tr>
  );

  const generateHeaderRows = () => (
    <tr>
      <td className="hero__td"></td>
      {players.map((data, index) => (
        <td key={index} className="hero__td">
          <PlayerHero data={data} />
        </td>
      ))}
    </tr>
  );

  const generateProfileRows = () => (
    <tr>
      <td className="td--info"></td>
      {players.map((data, index) => (
        <td key={index} className="td--info">
          <a href={`/player/${data.slug}`} target="_blank">View {data.name}&apos;s full profile</a>
        </td>
      ))}
    </tr>
  );  

  const generateStatsRows = () => (
    <tr>
      <td className="td--stats">Season Stats</td>
      {players.map((data, index) => (
        <td key={index} className="td--stats">
          <StatsTotals episodesData={episodesData} playerData={data} />
        </td>
      ))}
    </tr>
  );  

  return (
    <>
      <table className="player-table">
        {/* Conditionally render the <thead> based on the number of players
        TODO: This is sloppy hehe */}
        {players.length <= 2 && (
          <thead>
            <tr>
              <th width="10%"></th>
              <th width="45%"></th>
              <th width="45%"></th>
            </tr>
          </thead>
        )}
        {players.length === 3 && (
          <thead>
            <tr>
              <th width="7%"></th>
              <th width="31%"></th>
              <th width="31%"></th>
              <th width="31%"></th>
            </tr>
          </thead>
        )}
        <tbody>
          {generateHeaderRows()} 
          {generateProfileRows()} 
          {generateTableRows("full_name", "Name")}
          {generateTableRows("age", "Age")}
          {generateTableRows("location", "Location")}
          {generateTableRows("job", "Job")}

          <tr>
            <td>Tags</td>
            {players.map((data, index) => (
              <td key={index}>
                {generateTags(data?.tags)}
              </td>
            ))}
          </tr>

          {generateStatsRows()} 

          {/* Generate rows for each episode (1-6) in reverse order */}
          {[...Array(6).keys()].reverse().map((episodeNumber) => (
            <tr key={episodeNumber + 1}>
              <td key={episodeNumber + 1}>
                <h3>Episode {episodeNumber + 1}</h3>
              </td>
              {players.map((player, index) => {
                // Reverse the order of episodesData for each player
                const playerEpisodeData = episodesData[5 - episodeNumber].find((data) => data.slug === player.slug);
                return (
                  <td key={index}>
                    {playerEpisodeData ? (
                      <Episode
                        key={index}
                        playerEpisodeData={playerEpisodeData}
                        epiNumber={episodeNumber + 1}
                      />
                    ) : (
                      <div>Did not play this game.</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
