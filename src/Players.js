import React from "react";
import "./App.css";
import { playerData } from "./data";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


export const Players = () => {
  return (
    <>
      <div className="player-container">
        Players of the Game

        {playerData.map((data, key) => {
          return (
            <div key={key}>
              {data.name}
            
              <Link to={`/player/${data.slug}`}>{data.slug}'s Page</Link>

            </div>
          );
        })}
      </div>
    </>
  );
};

