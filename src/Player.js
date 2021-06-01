import React from "react";
import "./App.css";
import { Status } from "./Status";


export const Player = (props) => {

  const { name, age, job, location, player_status, slug, name_full, season_stats } = props.singlePlayerData;

  return (
    <>
      <section className="player-header">
        <div className="container cols container--header">

          <div className="player-header__pic col col-1">

            <img className="player-header__headshot" src={`../${slug}.png`}></img>
          </div>

          <div className="player-header__info col col-2">

            <h1 className="player-header__name">{name}</h1>

            <div className="player-status">
              <Status playerStatus={player_status} />
            </div>

            <ul className="player-header__details">
              <li>{age}</li>
              <li>{job}</li>
              <li>{location}</li>
            </ul>

            <a className="social-icon social-icon--instagram" href="https://www.instagram.com/aaronrclancy/" target="_blank">
              <img className="social-icon__icon" height="0" src="logo-instagram.svg" />
              <span className="social-icon__text">aaronrclancy</span>
              <div className="tooltip">instagram</div>
            </a>
          </div>
        </div>
      </section>

      <section className="player-content">
        <div className="container">

          <div className="cols cols--backwards">

            <div className="profile col col-2">

              <h1 className="profile__title">{name_full}</h1>

              <div className="stats">
                <h2 className="stats__title">Player Season Stats</h2>
                <div className="stats__row">
                  <div className="stat">
                    <span className="stat__title">Roses🌹</span>
                    <span className="stat__value">{season_stats.roses}</span>
                    <span className="stat_detail"></span>
                  </div>
                  <div className="stat">
                    <span className="stat__title">Hujus</span>
                    <span className="stat__value">0</span>
                    <span className="stat_detail"></span>
                  </div>
                  <div className="stat">
                    <span className="stat__title">PTCs</span>
                    <span className="stat__value">0</span>
                    <span className="stat_detail"></span>
                  </div>
                  <div className="stat">
                    <span className="stat__title">Love Level</span>
                    <span className="stat__value">0</span>
                    <span className="stat_detail"></span>
                  </div>
                </div>
              </div>

              <div className="gor-review">
                <h2 className="gor-review__title">GoR Pre-Game Assessment</h2>

               
                <p className="gor-review__callout">Listen to Aaron's assessment at <span className="gor-review__timestamp">5:49</span> (1:25:23 remaining)</p>

                <div className="gor-review__predictions">
                  <h3 className="predictions__title">Pre-Season Predictions</h3>

                  <img className="gor-review__ball" src="image-ball.png"/>

                  <ul className="predictions">
                    <li className="prediction">
                      <span className="prediction__attribute">Limo exit:</span>
                      Shirtless
                    </li>
                    <li className="prediction">
                      <span className="prediction__attribute">Gameplay:</span>
                      Will take shirt off
                    </li>
                    <li className="prediction">
                      <span className="prediction__attribute">Game length:</span>
                      Mid-season floater
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="col col-1 column--secondary-info">

              <ul className="secondary-social__links">
                <li className="secondary-social__link">
                  <a className="" href="#" target="_blank">
                    <img className="secondary-social__icon" src="logo-tiktok.svg" height="0"/>
                    <span className="secondary-social__label">Tiktok: N/A</span>
                  </a>
                </li>
                <li className="secondary-social__link">
                  <a className="" href="https://abc.com/shows/the-bachelorette/cast/aaron-summer-2021" target="_blank">
                    <img className="secondary-social__icon" src="logo-abc.svg" height="0" />
                    <span className="secondary-social__label">Official ABC Bio</span>
                  </a>
                </li>
                <li className="secondary-social__link">
                  <a className="" href="https://www.linkedin.com/in/aaron-clancy-217bb111a/" target="_blank">
                    <img className="secondary-social__icon" src="logo-linkedin.svg" height="0" />
                    <span className="secondary-social__label">LinkedIn: Account Executive at Health IQ</span>
                  </a>
                </li>
              </ul>

              <div className="tags">
                <h2 className="tags__header">Tags:</h2>
                <span className="tags__tag">Ripped</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

