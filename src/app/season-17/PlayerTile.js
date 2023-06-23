import React from "react";
import { Status } from "../Status";
import Link from 'next/link';
import Image from 'next/image';


export const PlayerTile = (props) => {

  const imagePath = `/assets/players/player-${props.data.slug}.png`;

  return (
    <li className={`tile all-players__player--${props.data.player_status}`}>
      <Image
        src={imagePath}
        alt={`headshot of ${props.data.name}`}
        className="tile__headshot"
        height={120}
        width={120}
      />
      <div className="tile__info">
        <Link className="tile__name" href={`season-17/player/${props.data.slug}`}>
          {props.data.name}
        </Link>

        <Status data={props.data} />
      </div>
    </li>
  );
};
