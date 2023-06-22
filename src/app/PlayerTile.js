import React from "react";
import { Status } from "./Status";
import Link from 'next/link';
import Image from 'next/image';


export const PlayerTile = (props) => {

  const imagePath = `/assets/players/${props.data.slug}.png`;

  return (
    <li className={`player player--${props.data.player_status}`}>

      <Link className="player__name" href={`/player/${props.data.slug}`}>
        {props.data.name}
      </Link>

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
