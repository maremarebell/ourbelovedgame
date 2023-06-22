import React from "react";
import { Status } from "./Status";
import Link from 'next/link';
import Image from 'next/image';


export const PlayerTile = (props) => {

  const imagePath = `/assets/players/${props.data.slug}.png`;

  var patterns = [
    "pattern-checks-sm",
    "pattern-checks-md",
    "pattern-grid-md",
    "pattern-grid-lg",
    "pattern-grid-xl",
    "pattern-dots-sm",
    "pattern-dots-md",
    "pattern-dots-lg",
    "pattern-dots-xl",
    "pattern-cross-dots-md",
    "pattern-cross-dots-lg",
    "pattern-cross-dots-xl",
    "pattern-diagonal-lines-sm",
    "pattern-diagonal-lines-md",
    "pattern-diagonal-lines-lg",
    "pattern-diagonal-lines-xl",
    "pattern-horizontal-lines-sm",
    "pattern-horizontal-lines-md",
    "pattern-horizontal-lines-lg",
    "pattern-horizontal-lines-xl",
    "pattern-vertical-lines-sm",
    "pattern-vertical-lines-md",
    "pattern-vertical-lines-lg",
    "pattern-diagonal-stripes-sm",
    "pattern-diagonal-stripes-md",
    "pattern-diagonal-stripes-lg",
    "pattern-diagonal-stripes-xl",
    "pattern-horizontal-stripes-sm",
    "pattern-horizontal-stripes-md",
    "pattern-horizontal-stripes-lg",
    "pattern-horizontal-stripes-xl",
    "pattern-vertical-stripes-sm",
    "pattern-vertical-stripes-md",
    "pattern-vertical-stripes-lg",
    "pattern-vertical-stripes-xl",
    "pattern-zigzag-sm",
    "pattern-zigzag-md",
    "pattern-zigzag-lg",
  ];
  
  var pattern = patterns[Math.floor(Math.random() * patterns.length)];

  return (
    <li className={`player player--${props.data.player_status} ${pattern}`}>

      <Link className="player__link" href={`/player/${props.data.slug}`}></Link>

      <span className="player__name">{props.data.name}</span>

      {/* <div className="player__info">
        <Status data={props.data} />
      </div> */}

      <div className="player__headshot-container">
        <Image
          src={imagePath}
          alt={`headshot of ${props.data.name}`}
          className="player__headshot"
          height={128}
          width={200}
        />
      </div>
    </li>
  );
};
