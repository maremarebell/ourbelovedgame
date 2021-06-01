import React from "react";
import "./App.css";
import { Status } from "./Status";


export const Player = (props) => {

  const { name, age, job, location, player_status, slug, name_full, season_stats, social_media, gor, tags } = props.singlePlayerData;

  const tagList = tags.map((tag) =>
    <span className="tags__tag" key={tag}>{tag}</span>
  );

  let epi_embed = "hmm";

  if (gor.gor_assessment_epi == "The Men of Season 17 Volume 1") {
      epi_embed = <iframe src="https://open.spotify.com/embed-podcast/episode/4cmQ4yNufxL4GSdxhSRblC" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>;
  }
  else {
    epi_embed= <span></span>
  }

  return (
    <>
      <section className="player-header">
        <div className="container cols container--header">

          <div className="player-header__pic col col-1">

            <img className="player-header__headshot" src={`../player-${slug}.png`} alt={`headshot of ${name}`}></img>
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

            <a className="social-icon social-icon--instagram" href={`https://www.instagram.com/${social_media.instagram_handle}`} target="_blank" rel="noreferrer">
              <img alt="Instagram logo" className="social-icon__icon" height="0" src="../logo-instagram.svg" />
              <span className="social-icon__text">{social_media.instagram_handle}</span>
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
                    <span className="stat__value">{season_stats.hujus}</span>
                    <span className="stat_detail"></span>
                  </div>
                  <div className="stat">
                    <span className="stat__title">PTCs</span>
                    <span className="stat__value">{season_stats.ptcs}</span>
                    <span className="stat_detail"></span>
                  </div>
                  <div className="stat">
                    <span className="stat__title">Love Level</span>
                    <span className="stat__value">{season_stats.love_level}</span>
                    <span className="stat_detail"></span>
                  </div>
                </div>
              </div>

              <div className="gor-review">
                <h2 className="gor-review__title">GoR Pre-Game Assessment</h2>

                {epi_embed}

                <p className="gor-review__callout">
                  Listen to {name}'s assessment at &nbsp;
                  <span className="gor-review__timestamp">{gor.gor_assessment_timestamp}</span>&nbsp;
                  ({gor.gor_assessment_timestamp_remaining} remaining)
                </p>

                <div className="gor-review__predictions">
                  <h3 className="predictions__title">Pre-Season Predictions</h3>

                  <img alt="crystal ball emoji" className="gor-review__ball" src="../image-ball.png"/>

                  <ul className="predictions">
                    <li className="prediction">
                      <span className="prediction__attribute">Limo exit: </span>
                      {gor.predictions.limo_exit}
                    </li>
                    <li className="prediction">
                      <span className="prediction__attribute">Gameplay: </span>
                      {gor.predictions.gameplay}
                    </li>
                    <li className="prediction">
                      <span className="prediction__attribute">Game length: </span>
                      {gor.predictions.game_length}
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="col col-1 column--secondary-info">

              <ul className="secondary-social__links">

                {social_media.tiktok_handle.length > 0 &&
                <li className="secondary-social__link">
                  <a href={`${social_media.tiktok_url}`} target="_blank" rel="noreferrer">
                    <img alt="TikTok logo" className="secondary-social__icon" src="../logo-tiktok.svg" height="0"/>
                    <span className="secondary-social__label">Tiktok: {social_media.tiktok_handle}</span>
                  </a>
                </li>
                }

                <li className="secondary-social__link">
                  <a href={`${social_media.abc_profile}`} target="_blank" rel="noreferrer">
                    <img alt="ABC logo" className="secondary-social__icon" src="../logo-abc.svg" height="0" />
                    <span className="secondary-social__label">Official ABC Bio</span>
                  </a>
                </li>

                {social_media.linkedin_url.length > 0 &&
                <li className="secondary-social__link">
                  <a href={`${social_media.linkedin_url}`} target="_blank" rel="noreferrer">
                    <img alt="LinkedIn logo" className="secondary-social__icon" src="../logo-linkedin.svg" height="0" />
                    <span className="secondary-social__label">LinkedIn: {social_media.linkedin_job}</span>
                  </a>
                </li>
                }
              </ul>

              <div className="tags">
                <h2 className="tags__header">Tags:</h2>
                {tagList}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

