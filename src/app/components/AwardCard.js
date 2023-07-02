import React from 'react';
import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

function AwardCard() {
  return (
    <div className="award award--pasecase">
      <div className="award__image-wrapper">
        <div className="award__image">🏆</div>
      </div>
      <div className="award__details">
        <span className={`award__name ${sgfont}`}>Award Name</span>
        <p className="award__p">Some fun award details</p>
      </div>
    </div>
  );
}

export default AwardCard;
