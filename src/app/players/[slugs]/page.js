'use client';

import React, { useEffect, useState } from 'react';
import playerData from "../../data/data-20-players.json";
import "../../components/player-table.scss";
import { fetchEpisodesData } from "../../utils/api";
import { generateTags } from "../../utils/textUtils";
import Episode from '../../components/Episode';

export default function Page({ params }) {
  const requestedSlugs = decodeURIComponent(params.slugs).toLowerCase().split(",");

  if (requestedSlugs.length === 0) {
    return <div>Ya gotta pick some playas</div>;
  }

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

  // If there is only one player, message to add more
  if (players.length === 1) {
    return 'Choose 2 or more players to compare.';
  }

  const generateTableRows = (propertyKey, label, defaultValue = "Player doesn't exist") => (
    <tr>
      <td>{label}</td>
      {players.map((data, index) => (
        <td key={index}>{data ? data[propertyKey] : defaultValue}</td>
      ))}
    </tr>
  );

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
    return <p>Loading...</p>; // Or any other loading indicator
  }

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
          {generateTableRows("full_name", "Name")}
          {generateTableRows("age", "Age")}
          {generateTableRows("location", "Location")}
          {generateTableRows("job", "Job")}

          <tr>
            <td>Tags</td>
            {players.map((data, index) => (
              <td>
                {generateTags(data?.tags)}
              </td>
            ))}
          </tr>


          {/* Generate rows for each episode (1-6) in reverse order */}
          {[...Array(6).keys()].reverse().map((episodeNumber) => (
            <tr key={episodeNumber + 1}>
              <td>
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
                      <div>Didn't play this game.</div>
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
