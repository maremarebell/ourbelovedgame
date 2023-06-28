import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Schibsted_Grotesk } from 'next/font/google'

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

export const PlayerTile = (props) => {

  const imagePath = `/assets/players/${props.data.slug}.png`;
  const blurImagePath = `/assets/players/${props.data.slug}-blur.png`;

  var patterns = [
    "pattern-checks-md",
    "pattern-cross-dots-md",
    "pattern-horizontal-lines-md",
    "pattern-vertical-lines-lg",
    "pattern-horizontal-stripes-lg",
    "pattern-vertical-stripes-sm",
    "pattern-horizontal-stripes-sm",
    "pattern-checks-lg",
    "pattern-diagonal-lines-md",
    "pattern-grid-xl",
    "pattern-zigzag-md",
    "pattern-cross-dots-lg",
    "pattern-diagonal-lines-xl",
    "pattern-diagonal-stripes-sm",
    "pattern-vertical-stripes-md",
    "pattern-vertical-lines-md",
    "pattern-horizontal-lines-sm",
    "pattern-vertical-stripes-lg",
    "pattern-grid-md",
    "pattern-vertical-lines-sm",
    "pattern-checks-sm",
    "pattern-grid-lg",
    "pattern-dots-md",
    "pattern-grid-md",
    "pattern-dots-lg",
    "pattern-diagonal-lines-sm",
    "pattern-horizontal-stripes-xl",
    "pattern-diagonal-stripes-xl",
    "pattern-horizontal-stripes-md",
    "pattern-zigzag-lg",
    "pattern-horizontal-stripes-sm",
    "pattern-zigzag-sm",
    "pattern-dots-xl",
    "pattern-diagonal-stripes-md",
    "pattern-diagonal-stripes-lg",
    "pattern-vertical-stripes-xl",
    "pattern-diagonal-lines-lg",
    "pattern-dots-sm",
    "pattern-vertical-lines-xl",
  ];
  var pattern = patterns[props.index];

  return (
    <li className={`player player--${props.data.player_status} ${pattern}`}>

      <Link className="player__link" href={`/player/${props.data.slug}`}></Link>

      <span className={`player__name ${sgfont.className}`}>{props.data.name}</span>

      <div className="player__headshot-container">
        <Image
          src={imagePath}
          alt={`headshot of ${props.data.name}`}
          className="player__headshot"
          height={128}
          width={200}
          placeholder="blur"
          blurDataURL={blurImagePath}
        />
      </div>
    </li>
  );
};
