import React from 'react';
import { Schibsted_Grotesk } from 'next/font/google';
// import AwardCard from './AwardCard';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function Episode({ playerEpisodeData, epiNumber }) {
  const awardsCount = playerEpisodeData.gor_awards ? playerEpisodeData.gor_awards.split(';').length : 0;

  const filteredAwards = playerEpisodeData.gor_awards
    ? playerEpisodeData.gor_awards.split(';').filter((item) => item.trim().length > 0)
    : [];

  const filteredEvents = playerEpisodeData.events
    ? playerEpisodeData.events.split(';').filter((item) => item.trim().length > 0)
    : [];

  const filteredLoveLevels = playerEpisodeData.love_level_details
    ? playerEpisodeData.love_level_details.split(';').filter((item) => item.trim().length > 0)
    : [];

  const filteredPTCs = playerEpisodeData.ptcs
    ? playerEpisodeData.ptcs.split(';').filter((item) => item.trim().length > 0)
    : [];

  const filteredNotes = playerEpisodeData.notes
    ? playerEpisodeData.notes.split(';').filter((item) => item.trim().length > 0)
    : [];

  const renderAwards = filteredAwards.map((item) => {
    const trimmedItem = item.trim();
    let className = '';

    if (trimmedItem.startsWith("Clue's")) {
      className = 'award--clues';
    } else if (trimmedItem.startsWith("Pacecase's")) {
      className = 'award--pacecase';
    }

    const colonIndex = trimmedItem.indexOf(':');

    return (
      trimmedItem.length > 0 && (
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
      )
    );
  });

  const renderItems = (items) => {
    return items.map((item) => (
      <li key={item} className="profile__list__item">
        {item.trim()}
      </li>
    ));
  };

  return (
    <section className="profile__section episode profile__section--epis">
      <h3 className={sgfont.className}>Episode {epiNumber}</h3>

      <div className="epi-stats">
        <div className="epi-stats__metric">
          <span>💋</span>
          <span>{playerEpisodeData.kisses}</span>
        </div>
        <div className="epi-stats__metric">
          <span>🏆</span>
          <span>{awardsCount}</span>
        </div>
      </div>

      {/* <AwardCard /> */}

      {playerEpisodeData && (
        <div>
          {filteredAwards.length > 0 && (
            <div>
              <h4>GoR Awards:</h4>
              <ul>{renderAwards}</ul>
            </div>
          )}

          {playerEpisodeData.limo_exit && playerEpisodeData.limo_exit.trim().length > 0 && (
            <div>
              <h4>Limo Exit:</h4>
              <p className="profile__p">{playerEpisodeData.limo_exit}</p>
            </div>
          )}

          {filteredEvents.length > 0 && (
            <div>
              <h4>Achievements:</h4>
              <ul className="profile__list">{renderItems(filteredEvents)}</ul>
            </div>
          )}

          {filteredLoveLevels.length > 0 && (
            <div>
              <h4>Love Levels:</h4>
              <ul className="profile__list">{renderItems(filteredLoveLevels)}</ul>
            </div>
          )}

          {filteredPTCs.length > 0 && (
            <div>
              <h4>PTCs:</h4>
              <ul className="profile__list">{renderItems(filteredPTCs)}</ul>
            </div>
          )}

          {filteredNotes.length > 0 && (
            <div>
              <h4>Notes:</h4>
              <ul className="profile__list">{renderItems(filteredNotes)}</ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Episode;
