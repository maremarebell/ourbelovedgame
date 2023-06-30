import React from 'react';

function Episode({ episodeData, player, epiNumber }) {

  // Find the data corresponding to player.slug
  const dataForPlayer = episodeData.find((data) => data.slug === player.slug);

  return (
    <section className="episode">
      <h2>Episode {epiNumber}</h2>

      {/* Display data from episodeData using player.slug */}
      {dataForPlayer && (
        <div>
          {Object.entries(dataForPlayer).map(([key, value]) => {
            if (value) {
              return (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              );
            }
            return null; // Skip empty values
          })}
        </div>
      )}

    </section>
  );
}

export default Episode;
