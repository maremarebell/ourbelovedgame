import React from 'react'

export const Plays = (props) => {

  const playerPlays = props.playerPlays;
  let portionIcon;

  return (
    <ul className="plays">

      {playerPlays.plays.map(function(play, index) {

        if (play.portion === "nighttime") {
          portionIcon = "🍸";
        } else if (play.portion === "day portion") {
          portionIcon = "☀️";
        } else if (play.portion === "") {
          portionIcon = "☀️";
        }

        switch (play.title) {
          case "FIMP":
            play.title = "🌹FIMP"
            break;
          case "First 1:1 of Season":
            play.title = "1️⃣First 1:1 Date of Season"
            break;
          case "Matching Outfits":
            play.title = "👯‍♂️Matching Outfits"
            break;
          default:
        }

        switch (play.event) {
          case "Cocktail Party":
            play.event = "CP"
            break;
          case "Group Date #1":
            play.event = "GD #1"
            break;
          case "Group Date #2":
            play.event = "GD #2"
            break;
          default:
        }

        return (
          <li key={`play-${index}`} className={`play play--${play.sentiment}`} >
            <span className={`play__icon play__icon--${play.type}`}>
              <img className={`play__image`} src={`../icon-${play.type}-dark.png`} alt={`${play.type}`} />
              {/*{play.type}*/}
            </span>
            <div class="play__title">
              <strong>{play.title}</strong>
               <div class="play__details">
                {play.details}
              </div>
            </div>
            <div class="play__metadata">
              <div>EPI {play.episode}</div>
              <span class="divider"></span>
              <div>{play.event}{portionIcon}</div>
            </div>
          </li>
        );
      })}

      {playerPlays.plays.length === 0 &&
        <ul className="plays">
         <li className="play">
            <div class="play__title">
              <strong>No notable plays.</strong>
            </div>
            <div class="play__metadata">
            </div>
          </li>
        </ul>
      }
    </ul>
  );
};

