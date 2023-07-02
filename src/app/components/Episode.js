import React from 'react';
import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Episode({ episodeData, player, epiNumber }) {
  // Find the data corresponding to player.slug
  const dataForPlayer = episodeData.find((data) => data.slug === player.slug);

  const awardsCount = dataForPlayer.awards ? dataForPlayer.awards.split(';').length : 0;

  return (
    <section className="profile__section episode profile__section--epis">
      <h3 className={sgfont.className}>Episode {epiNumber}</h3>

      <div className="epi-stats">
        <div className="epi-stats__metric"><span>💋</span><span>{dataForPlayer.kisses}</span></div>
        <div className="epi-stats__metric"><span>🏆</span><span>{awardsCount}</span></div>
      </div>

      {dataForPlayer && (
        <div>

          {dataForPlayer.awards && (
            <div>
              <h4>Awards:</h4>
              <ul>
                {dataForPlayer.awards.split(';').map((item) => {
                  const trimmedItem = item.trim();
                  let className = '';

                  if (trimmedItem.startsWith("Clue's")) {
                    className = 'award--clues';
                  } else if (trimmedItem.startsWith("Pacecase's")) {
                    className = 'award--pacecase';
                  }

                  const colonIndex = trimmedItem.indexOf(':');

                  return (
                    <li key={item} className={`award ${className}`}>
                      {colonIndex !== -1 ? (
                        <p>
                          <strong>{trimmedItem.slice(0, colonIndex + 1)}</strong>
                          {trimmedItem.slice(colonIndex + 1)}
                        </p>
                      ) : (
                        <strong>{trimmedItem}</strong>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {dataForPlayer.events && (
            <div>
              <h4>Other Achievements:</h4>
              <ul className="profile__list">
                {dataForPlayer.events.split(';').map((item) => (
                  <li key={item} className="profile__list__item">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h4>Limo Exit:</h4>
          <p className="profile__p">{dataForPlayer.limo_exit}</p>

          {dataForPlayer.love_levels && (
            <div>
              <h4>Love Levels:</h4>
              <ul className="profile__list">
                {dataForPlayer.love_levels.split(';').map((item) => (
                  <li key={item} className="profile__list__item">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {dataForPlayer.ptcs && (
            <div>
              <h4>PTCs:</h4>
              <ul className="profile__list">
                {dataForPlayer.ptcs.split(';').map((item) => (
                  <li key={item} className="profile__list__item">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {dataForPlayer.notes && (
            <div>
              <h4>Notes:</h4>
              <ul className="profile__list">
                {dataForPlayer.notes.split(';').map((item) => (
                  <li key={item} className="profile__list__item">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Episode;
