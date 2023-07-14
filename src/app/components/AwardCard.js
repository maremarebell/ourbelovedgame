import React from 'react';
import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function AwardCard({ award }) {

  let className = '';
  let awardSponsor = '';
  let awardName = '';
  let awardIcon = '';

  if (award.startsWith("Clue's")) {
    className = 'award--clues';
    awardSponsor = 'Clue\'s'
  } else if (award.startsWith("Pacecase's")) {
    className = 'award--pacecase';
    awardSponsor = 'Pasecase\'s'
  }

  if (award.includes("MVP")) {
    awardName = "MVP";
    awardIcon = "🏆"
  } else if (award.includes("Play of")) {
    awardName = "Play"
    awardIcon = "🏅"
  } else if (award.includes("Wowee")) {
    awardName = "Wowee"
    awardIcon = "😱"
  } else if (award.includes("Faceplay")) {
    awardName = "Faceplay"
    awardIcon = "🤪"
  } else if (award.includes("Error")) {
    awardName = "Error"
    awardIcon = "🚫"
  }

  return (
    <div className={`award ${className}`}>
      <div className="award__image-wrapper">
        <div className="award__image">{awardIcon}</div>
      </div>
      <span className={`award__sponsor ${sgfont}`}>{awardSponsor}</span>
      <span className={`award__name`} style={{ fontFamily: sgfont }}>
        {awardName}
        <small>of the Game</small>
      </span>
      {/* <div className="award__details">
        <p className="award__p">Some fun award details</p>
      </div> */}
    </div>
  );
}

export default AwardCard;
