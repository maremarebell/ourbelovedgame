import React from "react";
import { Status } from "./Status";
import { playerData } from "./data";
import { Link } from "react-router-dom";


export const Players = () => {

  return (
    <>
      <div className="player-container">

        <h2 className="update-notice">Website last updated: 6/21 9:30AM ET right before Episode 3</h2>

        <h1 className="all-player__title">Players of the Game</h1>

        <ul className="all-players__list">
        {playerData.map((data, key) => {
          return (
            <li className={`tile all-players__player--${data.player_status}`} key={key}>
              <img className="tile__headshot" src={`../player-${data.slug}.png`} alt={`headshot of ${data.name}`}></img>

              <div className="tile__info">
                <Link className="tile__name" to={`/player/${data.slug}`}>
                  {data.name}
                </Link>

                <Status playerStatus={data.player_status} />

                {/*<a className="social-icon social-icon--instagram tile__social-button" href={`https://www.instagram.com/${data.social_media.instagram_handle}`} target="_blank" rel="noreferrer">
                  <img alt="Instagram logo" className="social-icon__icon" height="0" src="../logo-instagram.svg" />
                  <span className="social-icon__text">{data.social_media.instagram_handle}</span>
                </a>*/}
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    </>
  );
};

