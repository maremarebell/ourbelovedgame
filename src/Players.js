import React from "react";
import "./App.css";
import { playerData } from "./data";
import { Link } from "react-router-dom";


export const Players = () => {
  return (
    <>
      <div className="player-container">
        <h1 class="all-player__title">Players of the Game</h1>

        <ul class="all-players__list">
        {playerData.map((data, key) => {
          return (
            <li className={`all-players__player all-players__player--${data.player_status}`} key={key}>
              <Link to={`/player/${data.slug}`}>{data.name}</Link>
            </li>
          );
        })}
        </ul>
      </div>
    </>
  );
};

