import React from 'react';
import { Schibsted_Grotesk } from 'next/font/google';
import AwardCard from './AwardCard';
import { Tooltip } from 'react-tooltip';
import './tooltip.scss';

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

    const colonIndex = trimmedItem.indexOf(':');

    return (
      trimmedItem.length > 0 && (
        <AwardCard key={colonIndex} award={trimmedItem} /> 
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
          <span>{playerEpisodeData.kisses !== '' ? playerEpisodeData.kisses : 0}</span>
        </div>
        <div className="epi-stats__metric">
          <span>🏆</span>
          <span>{awardsCount}</span>
        </div>
      </div>

      {playerEpisodeData && (
        <div>
          {filteredAwards.length > 0 && (
            <div className="awards">
              {renderAwards}
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
              <h4>
                Love Levels:
                <a data-tooltip-id="ll-tooltip" 
                data-tooltip-html="Love Levels: <br/>LL1 - I like you<br>
                LL2 - I’m starting to fall for you<br>
                LL3 - I’m falling in love with you<br>
                LL4 - I’m in love with you <br>
                “Loaded” means mentioned in an ITM"
                className="toolytip__trigger"
                >?</a>
                <Tooltip id="ll-tooltip" className="toolytip" />
              </h4>
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
