import React from 'react'
import "./App.css";

export const Status = (props) => {

  const playerStatus = props.playerStatus;
  let newStatus;

  console.log(playerStatus);

  switch (playerStatus) {
    case "active":
      newStatus = "In The Game"
      break;
    case "dismissed":
      newStatus = "Sent Home"
      break;
    case "sidelined":
      newStatus = "Sidelined Pre-Season"
      break;
    case "self_eliminated":
      newStatus = "Self-Eliminated"
      break;
    default:
      newStatus = "Status Unknown";
  }

 return (
    <>
      <span className={`player-status__dot player-status__dot--${playerStatus}`}></span>
      <span className="player-status__label">
         {newStatus}
      </span>
    </>
  );
};
