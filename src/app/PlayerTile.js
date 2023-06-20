import React from "react";
import { Status } from "./Status";
import { Link } from "react-router-dom";


export const PlayerTile = (props) => {

  return (
    <li className={`tile all-players__player--${props.data.player_status}`}>
      <img className="tile__headshot" src={`../player-${props.data.slug}.png`} alt={`headshot of ${props.data.name}`}></img>

      <div className="tile__info">
        <Link className="tile__name" to={`/player/${props.data.slug}`}>
          {props.data.name}
        </Link>

        <Status data={props.data} />

        {/*<a className="social-icon social-icon--instagram tile__social-button" href={`https://www.instagram.com/${data.social_media.instagram_handle}`} target="_blank" rel="noreferrer">
          <img alt="Instagram logo" className="social-icon__icon" height="0" src="../logo-instagram.svg" />
          <span className="social-icon__text">{data.social_media.instagram_handle}</span>
        </a>*/}
      </div>
    </li>
  );
};
