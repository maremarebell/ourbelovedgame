import React from "react";
import Link from 'next/link';
import { Schibsted_Grotesk } from 'next/font/google'

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

export const PlayerLine = (props) => {

  const imagePath = `/assets/players/${props.data.slug}.png`;
  const blurImagePath = `/assets/players/${props.data.slug}-blur.png`;

  var patterns = [
    "pattern-vertical-stripes-sm",
    "pattern-horizontal-stripes-sm",
    "pattern-diagonal-stripes-sm",
    "pattern-horizontal-lines-sm",
    "pattern-vertical-lines-sm",
    "pattern-checks-sm",
    "pattern-diagonal-lines-sm",
    "pattern-horizontal-stripes-sm",
    "pattern-zigzag-sm",
    "pattern-dots-sm",
    "pattern-vertical-stripes-sm",
    "pattern-horizontal-stripes-sm",
    "pattern-dots-md",
    "pattern-horizontal-lines-sm",
    "pattern-vertical-lines-sm",
    "pattern-checks-sm",
    "pattern-diagonal-lines-sm",
    "pattern-horizontal-stripes-sm",
    "pattern-zigzag-sm",
    "pattern-dots-sm",
    "pattern-dots-md",
    "pattern-vertical-stripes-sm",
    "pattern-horizontal-stripes-sm",
    "pattern-vertical-stripes-sm",
    "pattern-dots-md"
  ];
  var pattern = patterns[props.index];

  return (
    <li className={`player player--${props.data.player_status} ${pattern} player--line`}>
      <div className="player__headshot-container--line">
        <img
          src={imagePath}
          alt={`headshot of ${props.data.name}`}
          className="player__headshot--line"
        />
      </div>

      <span className={`player__name--line ${sgfont.className}`}>{props.data.name}</span>

      <Link className={`player__link--line ${sgfont.className}`} href={`/player/${props.data.slug}`}>Go to profile</Link>
    </li>
  );
};
