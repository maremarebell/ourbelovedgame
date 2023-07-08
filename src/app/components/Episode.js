import React from 'react';
import { Schibsted_Grotesk } from 'next/font/google';
// import AwardCard from './AwardCard';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Episode({ playerEpisodeData, epiNumber }) {

  const awardsCount = playerEpisodeData.gor_awards ? playerEpisodeData.gor_awards.split(';').length : 0;

  return (
    <section className="profile__section episode profile__section--epis">
      <h3 className={sgfont.className}>Episode {epiNumber}</h3>

      <div className="epi-stats">
        <div className="epi-stats__metric"><span>💋</span><span>{playerEpisodeData.kisses}</span></div>
        <div className="epi-stats__metric"><span>🏆</span><span>{awardsCount}</span></div>
      </div>

      {/* <AwardCard /> */}

      {playerEpisodeData && (
        <div>

          {playerEpisodeData.gor_awards && (
            <div>
              <h4>GoR Awards:</h4>
              <ul>
                {playerEpisodeData.gor_awards.split(';').map((item) => {
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

          {playerEpisodeData.events && (
            <div>
              <h4>Other Achievements:</h4>
              <ul className="profile__list">
                {playerEpisodeData.events.split(';').map((item) => (
                  <li key={item} className="profile__list__item">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {playerEpisodeData.limo_exit && (
            <div>
              <h4>Limo Exit:</h4>
              <p className="profile__p">{playerEpisodeData.limo_exit}</p>
            </div>
          )}

          {playerEpisodeData.love_levels && (
            <div>
              <h4>Love Levels:</h4>
              <ul className="profile__list">
                {playerEpisodeData.love_levels.split(';').map((item) => (
                  <li key={item} className="profile__list__item">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {playerEpisodeData.ptcs && (
            <div>
              <h4>PTCs:</h4>
              <ul className="profile__list">
                {playerEpisodeData.ptcs.split(';').map((item) => (
                  <li key={item} className="profile__list__item">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {playerEpisodeData.notes && (
            <div>
              <h4>Notes:</h4>
              <ul className="profile__list">
                {playerEpisodeData.notes.split(';').map((item) => (
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
