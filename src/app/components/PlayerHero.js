import React from 'react';
import Image from 'next/image';
import './player-hero.scss'

import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

export const PlayerHero = (props) => {
  const imagePath = `/assets/players/${props.data.slug}.png`;

  return (
    <div className="hero">
      <svg className="profile__short-name " viewBox="0 0 94 20">
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" opacity=".6" className={sgfont.className}>
          {props.data.name}
        </text>
      </svg>

      <Image
        src={imagePath}
        alt={`headshot of ${props.data.name}`}
        height={320}
        width={500}
        className="hero__image"
      />
    </div>
  );
};

export default PlayerHero;
