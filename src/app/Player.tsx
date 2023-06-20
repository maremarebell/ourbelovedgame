import React from "react";
import { Status } from "./Status";
import { Plays } from "./Plays";
import { playerPlaysData } from "./data-plays";

interface PlayerProps {
  data: {
    slug: any;
    tags: string[];
    gor?: {
      gor_assessment_epi?: string;
      gor_assessment_timestamp?: string;
      predictions: {
        limo_exit: string;
        gameplay: string;
        game_length: string;
      };
    };
    name: string;
    name_full: string;
    age: string;
    job: string;
    location: string;
    season_stats: {
      roses: number;
      hujus: number;
      ptcs: number;
    };
    social_media: {
      instagram_handle: string;
      tiktok_handle: string;
      tiktok_url: string;
      abc_profile: string;
      linkedin_url: string;
      linkedin_job: string;
    };
  };
}

export const Player = ({ data }: PlayerProps) => {
  const tagList = data.tags.map((tag) => (
    <span className="tags__tag" key={tag}>
      {tag}
    </span>
  ));

  let epi_embed: JSX.Element | null = null;

  if (data.gor && data.gor.gor_assessment_epi) {
    if (data.gor.gor_assessment_epi === "The Men of Season 17 Volume 1") {
      epi_embed = (
        <iframe
          title="Spotify Embed 1"
          src="https://open.spotify.com/embed-podcast/episode/4cmQ4yNufxL4GSdxhSRblC"
          width="100%"
          height="232"
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      );
    } else if (data.gor.gor_assessment_epi === "The Men of Season 17 Volume 2") {
      epi_embed = (
        <iframe
          title="Spotify Embed 2"
          src="https://open.spotify.com/embed-podcast/episode/0v3piWITd8CM2I8YVESVV9"
          width="100%"
          height="232"
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      );
    }
  }

  const dataPlays = playerPlaysData.find((player) => player.name === data.name);

  return (
    <>
      <section className="player-header">
        <div className="container cols container--header">
          <div className="player-header__pic col col-1">
            <img
              className="player-header__headshot"
              src={`../player-${data.slug}.png`}
              alt={`headshot of ${data.name}`}
            ></img>
          </div>

          <div className="player-header__info col col-2">
            <h1 className="player-header__name">{data.name}</h1>
            <div className="player-status">
              <Status data={data} />
            </div>
            <ul className="player-header__details">
              <li>{data.age}</li>
              <li>{data.job}</li>
              <li>{data.location}</li>
            </ul>
            <a
              className="social-icon social-icon--instagram"
              href={`https://www.instagram.com/${data.social_media.instagram_handle}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Instagram logo"
                className="social-icon__icon"
                height="0"
                src="../logo-instagram.svg"
              />
              <span className="social-icon__text">
                {data.social_media.instagram_handle}
              </span>
              <div className="tooltip">instagram</div>
            </a>
          </div>
        </div>
      </section>

      <section className="player-content">
        <div className="container">
          <div className="cols cols--backwards">
            <div className="profile col col-2">
              <h1 className="profile__title">{data.name_full}</h1>
              <div className="stats">
                <h2 className="stats__title">Player Season Stats</h2>
                <div className="stats__row">
                  <div className="stat">
                    <span className="stat__title">Roses🌹</span>
                    <span className="stat__value">{data.season_stats.roses}</span>
                    <span className="stat_detail"></span>
                  </div>
                  <div className="stat">
                    <span className="stat__title">Hujus</span>
                    <span className="stat__value">{data.season_stats.hujus}</span>
                    <span className="stat_detail"></span>
                  </div>
                  <div className="stat">
                    <span className="stat__title">PTCs</span>
                    <span className="stat__value">{data.season_stats.ptcs}</span>
                    <span className="stat_detail"></span>
                  </div>
                  <div className="stat">
                    <span className="stat__title">Love Level</span>
                    <span className="stat__value"></span>
                    <span className="stat_detail"></span>
                  </div>
                </div>
              </div>
              {dataPlays && (
                <div className="plays">
                  <h2>Regular Season Play</h2>
                  <Plays playerPlays={dataPlays} />
                </div>
              )}
              {data.gor && (
                <div className="gor-review">
                  <h2 className="gor-review__title">GoR Pre-Game Assessment</h2>
                  {epi_embed}
                  <p className="gor-review__callout">
                    Listen to {data.name}&lsquo;s assessment at &nbsp;
                    <span className="gor-review__timestamp">
                      {data.gor.gor_assessment_timestamp}
                    </span>
                    {/*({gor.gor_assessment_timestamp_remaining} remaining)*/}
                  </p>
                  <div className="gor-review__predictions">
                    <h3 className="predictions__title">Pre-Season Predictions</h3>
                    <img
                      alt="crystal ball emoji"
                      className="gor-review__ball"
                      src="../image-ball.png"
                    />
                    <ul className="predictions">
                      {data.gor.predictions.limo_exit.length > 0 && (
                        <li className="prediction">
                          <span className="prediction__attribute">Limo exit: </span>
                          {data.gor.predictions.limo_exit}
                        </li>
                      )}
                      {data.gor.predictions.gameplay.length > 0 && (
                        <li className="prediction">
                          <span className="prediction__attribute">Gameplay: </span>
                          {data.gor.predictions.gameplay}
                        </li>
                      )}
                      {data.gor.predictions.game_length.length > 0 && (
                        <li className="prediction">
                          <span className="prediction__attribute">Game length: </span>
                          {data.gor.predictions.game_length}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="col col-1 column--secondary-info">
              <ul className="secondary-social__links">
                {data.social_media.tiktok_handle.length > 0 && (
                  <li className="secondary-social__link">
                    <a
                      href={`${data.social_media.tiktok_url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="TikTok logo"
                        className="secondary-social__icon"
                        src="../logo-tiktok.svg"
                        height="0"
                      />
                      <span className="secondary-social__label">
                        Tiktok: {data.social_media.tiktok_handle}
                      </span>
                    </a>
                  </li>
                )}
                <li className="secondary-social__link">
                  <a
                    href={`${data.social_media.abc_profile}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="ABC logo"
                      className="secondary-social__icon"
                      src="../logo-abc.svg"
                      height="0"
                    />
                    <span className="secondary-social__label">Official ABC Bio</span>
                  </a>
                </li>
                {data.social_media.linkedin_url.length > 0 && (
                  <li className="secondary-social__link">
                    <a
                      href={`${data.social_media.linkedin_url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="LinkedIn logo"
                        className="secondary-social__icon"
                        src="../logo-linkedin.svg"
                        height="0"
                      />
                      <span className="secondary-social__label">
                        LinkedIn: {data.social_media.linkedin_job}
                      </span>
                    </a>
                  </li>
                )}
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
