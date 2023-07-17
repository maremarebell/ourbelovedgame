import React from 'react';
import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function AwardCard({ award }) {

  console.log(award);

  let className = '';
  let awardSponsor = '';
  let awardName = '';
  let awardIcon = '';
  let sponsorImagePath = '';
  let awardDetails = '';
  let shortAwardName = '';
  let awardColor= '';

  if (award.startsWith("Clue's")) {
    className = 'award--clues';
    awardSponsor = 'Clue\'s'
    sponsorImagePath= '/clues.png';
  } else if (award.startsWith("Pacecase's")) {
    className = 'award--pacecase';
    awardSponsor = 'Pacecase\'s'
    sponsorImagePath= '/pacecase.png';
  }

  if (award.includes("MVP")) {
    awardName = "MVP";
    awardIcon = "🏆"
    shortAwardName = "MVP";
    awardColor = 'green';
  } else if (award.includes("Play of")) {
    awardName = "Play of the Game"
    awardIcon = "🏅"
    shortAwardName = "POTG";
    awardColor = 'green';
  } else if (award.includes("Wowee")) {
    awardName = "Wowee of the Game"
    awardIcon = "😱"
    shortAwardName = "WOW";
    awardColor = 'green';
  } else if (award.includes("Faceplay")) {
    awardName = "Faceplay of the Game"
    awardIcon = "🤪"
    shortAwardName = "FOTG";
    awardColor = 'green';
  } else if (award.includes("Error")) {
    awardName = "Error of the Game"
    awardIcon = "🚫"
    shortAwardName = "ERROR";
    awardColor = 'red';
  }

  const colonIndex = award.indexOf(":");
  if (colonIndex !== -1 && colonIndex < award.length - 1) {
    awardDetails = award.substring(colonIndex + 1).trim();
  }


  return (
    <div className={`award ${className} award--${awardColor}`}>
      <div className="award__image-wrapper">
        <div className="award__background__wrapper">
          <svg className="award__background " viewBox="0 0 140 124">
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" opacity=".6" className={sgfont.className}>
            {shortAwardName}
            </text>
          </svg>
        </div>
        <img className="award__sponsor-image" src={sponsorImagePath} />
        <div className="award__image">{awardIcon}</div>
      </div>
      
      <div className="award__details" style={{ fontFamily: sgfont }}>
        <h3 className="award__title">{awardSponsor} {awardName}</h3>
        <p className="award__p">{awardDetails}</p>
      </div>
    </div>
  );
}

export default AwardCard;
