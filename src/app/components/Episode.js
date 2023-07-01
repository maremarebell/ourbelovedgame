import React from 'react';
import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Episode({ episodeData, player, epiNumber }) {
  // Find the data corresponding to player.slug
  const dataForPlayer = episodeData.find((data) => data.slug === player.slug);

  return (
    <section className="profile__section episode profile__section--epis">
      <h3 className={sgfont.className}>Episode {epiNumber}</h3>

      {/* Display data from episodeData using player.slug */}
      {dataForPlayer && (
        <div>
          {Object.entries(dataForPlayer).map(([key, value]) => {
            const formattedKey = key.replace('_', ' '); // Remove underscores from the key

            if (formattedKey !== 'slug' && value) { // Exclude the 'slug' key
              if (typeof value === 'string' && value.includes(';')) {

                // Convert semicolon-separated text into a list
                const listItems = value.split(';').map((item) => (
                  <li key={item} className="profile__list__item">{item.trim()}</li>
                ));

                return (
                  <div className="profile__p" key={formattedKey}>
                    <strong className="episode__key">{formattedKey}:</strong>
                    <ul className="profile__list">{listItems}</ul>
                  </div>
                );
              }

              return (
                <p className="episode__key profile__p" key={formattedKey}>
                  <strong>{formattedKey}:</strong> {value}
                </p>
              );
            }
            return null; // Skip empty values or the 'slug' key
          })}
        </div>
      )}
    </section>
  );
}

export default Episode;
