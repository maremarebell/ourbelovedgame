import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Schibsted_Grotesk } from 'next/font/google'

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

export const GoldenPlayerTile = (props) => {

  const imagePath = `/assets/players/1-golden-bachelor/originals/${props.data.name}.jpg`;

  return (
    <li className={`player player--${props.data.player_status}`}>

      <Link className="player__link" href={`/player/${props.data.slug}`}>
        <div className="player__headshot-container">
          <img
            src={imagePath}
            alt={`headshot of ${props.data.name}`}
            className="player__headshot"
          />
        </div>
        <span className={`player__name ${sgfont.className}`}>{props.data.name}</span>
        <div className="player__details">
          {props.data.age}, {props.data.job}
        </div>
      </Link>
    </li>
  );
};
