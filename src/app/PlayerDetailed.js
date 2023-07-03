import React from "react";
import Link from 'next/link';
import { Schibsted_Grotesk } from 'next/font/google'

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

export const PlayerDetailed= (props) => {

  const imagePath = `/assets/players/${props.data.slug}.png`;
  const blurImagePath = `/assets/players/${props.data.slug}-blur.png`;

  return (
    <li className={`player player--${props.data.player_status}`}>
      DETAILED

      <Link className="player__link" href={`/player/${props.data.slug}`}></Link>

      <span className={`player__name ${sgfont.className}`}>{props.data.name}</span>

      <div className="player__details">
        {props.data.age}, {props.data.job}
      </div>

      <div className="player__headshot-container">
        <img
          src={imagePath}
          alt={`headshot of ${props.data.name}`}
          className="player__headshot"
        />
      </div>
    </li>
  );
};
