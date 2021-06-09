import React from "react";
import "./App.css";
import { playerData } from "./data";
import { Link } from "react-router-dom";


export const Players = () => {
  return (
    <>
      <div className="player-container">

        <h2 className="update-notice">Website last updated: 6/9 after Episode 1</h2>

        <h1 className="all-player__title">Players of the Game</h1>

        <ul className="all-players__list">
        {playerData.map((data, key) => {
          return (
            <li className={`all-players__player all-players__player--${data.player_status}`} key={key}>
              <Link to={`/player/${data.slug}`}>
                {data.name}
              </Link>

              {data.player_status !== "active" &&
                <span className="pill">
                  {data.player_status}
                </span>
              }
            </li>
          );
        })}
        </ul>
      </div>
    </>
  );
};

