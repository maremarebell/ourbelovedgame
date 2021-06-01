import React from "react";
import "./App.css";
import { playerData } from "./data";
import { Link } from "react-router-dom";


export const Players = () => {
  return (
    <>
      <div className="player-container">
        Players of the Game

        <ol>
        {playerData.map((data, key) => {
          return (
            <li key={key}>
              {key+1}
              <Link to={`/player/${data.slug}`}>{data.name}'s Page</Link>
            </li>
          );
        })}
        </ol>
      </div>
    </>
  );
};

