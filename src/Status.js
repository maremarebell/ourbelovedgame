import React from 'react'

export const Status = (props) => {

  const playerStatus = props.playerStatus;
  let newStatus;

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
    case "eliminated":
      newStatus = "Eliminated"
      break;
    case "unannounced":
      newStatus = "Unannounced"
      break;
    default:
      newStatus = "Status Unknown";
  }

 return (
    <div className="player-status">
      <span className={`player-status__dot player-status__dot--${playerStatus}`}></span>
      <span className="player-status__label">
         {newStatus}
      </span>
    </div>
  );
};
