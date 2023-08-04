import React from 'react'

export const Status = (props) => {

  let newStatus;

  switch (props.data.player_status) {
    case "active":
      newStatus = "Still in the game"
      break;
    case "dismissed":
      newStatus = "Sent Home"
      break;
    case "sidelined":
      newStatus = "Sidelined " + props.data.player_status_last_update
      break;
    case "self_eliminated":
      newStatus = "Self-Eliminated"
      break;
    case "eliminated":
      newStatus = "Eliminated Epi " + props.data.player_status_last_update
      break;
    case "unannounced":
      newStatus = "Unannounced"
      break;
    default:
      newStatus = "Status Unknown";
  }

  return (
    <div className="player-status">
      <span className={`player-status__dot player-status__dot--${props.data.player_status}`}></span>
      <span className="player-status__label">
         {newStatus}
      </span>
    </div>
  );
};
