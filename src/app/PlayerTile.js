import React from "react";
import { Status } from "./Status";
import Link from 'next/link';


export const PlayerTile = (props) => {

  console.log(props);

  return (
    <li className={`tile all-players__player--${props.data.player_status}`}>
      <img className="tile__headshot" src={`../player-${props.data.slug}.png`} alt={`headshot of ${props.data.name}`}></img>

      <div className="tile__info">
        <Link className="tile__name" href={`/player/${props.data.slug}`}>
          {props.data.name}
        </Link>

        <Status data={props.data} />
      </div>
    </li>
  );
};
