'use client';

import React, { useEffect, useState } from 'react';
import playerData from "../../data/data-20-players.json";
import "../../components/player-table.scss";
import { fetchEpisodesData } from "../../utils/api";
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

  const generateTableRows = (propertyKey, label, defaultValue = "Player doesn't exist") => (
    <tr>
      <td>{label}</td>
      {players.map((data, index) => (
        <td key={index}>{data ? data[propertyKey] : defaultValue}</td>
      ))}
    </tr>
  );

  const generateTagsCell = (tags) => (
    <td>
      {tags ? (
        tags.split(";").map((tag, index) => (
          <span key={index} className="profile__tag">
            {tag}
          </span>
        ))
      ) : (
        <span className="profile__tag">No tags</span>
      )}
    </td>
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
        <tbody>
          {generateTableRows("full_name", "Name")}
          {generateTableRows("age", "Age")}
          {generateTableRows("location", "Location")}
          {generateTableRows("job", "Job")}

          <tr>
            <td>Tags</td>
            {players.map((data, index) => (
              <React.Fragment key={index}>{generateTagsCell(data?.tags)}</React.Fragment>
            ))}
          </tr>

          {/* Generate rows for each episode (1-6) in reverse order */}
          {[...Array(6).keys()].reverse().map((episodeNumber) => (
            <tr key={episodeNumber + 1}>
              <td>Episode {episodeNumber + 1}</td>
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
