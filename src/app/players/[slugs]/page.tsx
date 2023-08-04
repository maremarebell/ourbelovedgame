'use client';

import React from "react";
import playerData from "../../data/data-20-players.json";
import PlayerProfile from '../../components/PlayerProfile';

export default function Page({ params }: { params: { slugs: string } }) {
  const requestedSlugs = decodeURIComponent(params.slugs).toLowerCase().split(',');

  if (requestedSlugs.length === 0) {
    return <div>Ya gotta pick some playas</div>;
  }

  const players = requestedSlugs.map((requestedSlug) => {
    const player = playerData.find(
      (data) =>
        data.slug.toLowerCase() === requestedSlug ||
        data.name.toLowerCase() === requestedSlug ||
        (data.other_slugs &&
          data.other_slugs.split(',').some((slug) => slug.trim().toLowerCase() === requestedSlug))
    );

    if (player) {
      return player;
    } else {
      return null;
    }
  });

  return (
    <>
      {players.map((player, index) => (
        <React.Fragment key={index}>
          {player ? (
            <PlayerProfile data={player} />
          ) : (
            <div>Player doesn't exist</div>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
