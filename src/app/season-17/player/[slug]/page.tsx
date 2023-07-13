'use client';

import { playerData } from '../../../season-17/data-17';
import { Status } from '../../../components/Status';
import Image from 'next/image';

export default function Page({ params }: { params: { slug: string } }) {

  const player = playerData.find((data) => data.slug === params.slug);

  const tagList = player?.tags.map((tag) => (
    <span className='tags__tag' key={tag}>
      {tag}
    </span>
  ));

  let data = player;

  // Dynamically construct the image path based on the slug
  const imagePath = `/assets/players/season-17/player-${params.slug}.png`;

  return (
    <>
      {data !== undefined && (
        <>
          <section className="player-header">
            <div className="container cols container--header">
            <div className="player-header__pic col col-1">
                <Image
                  src={imagePath}
                  alt={`headshot of ${player?.name}`}
                  className="player-header__headshot"
                  height={320}
                  width={320}
                />
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

                <Image
                  src="/assets/logo-instagram.svg"
                  alt="Instagram logo"
                  className="social-icon__icon"
                  height={40}
                  width={40}
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
                  {data.gor && (
                      <div className="gor-review">
                      <h2 className="gor-review__title">GoR Pre-Game Assessment</h2>
                      <p className="gor-review__callout">
                          Listen to {data.name}&lsquo;s assessment at &nbsp;
                          <span className="gor-review__timestamp">
                          {data.gor.gor_assessment_timestamp}
                          </span>
                          {/*({gor.gor_assessment_timestamp_remaining} remaining)*/}
                      </p>
                      <div className="gor-review__predictions">

                          <h3 className="predictions__title">Pre-Season Predictions</h3>

                          <Image
                            src="/assets/image-ball.png"
                            alt="crystal ball emoji"
                            className="gor-review__ball"
                            height={40}
                            width={40}
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
                          <a href={`${data.social_media.tiktok_url}`} target="_blank" rel="noreferrer">
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
                      <a href={`${data.social_media.abc_profile}`} target="_blank" rel="noreferrer">
                        <Image
                          src="/assets/logo-abc.svg"
                          alt="ABC logo"
                          className="secondary-social__icon"
                          height={40}
                          width={40}
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

                          <Image
                            src="/assets/logo-linkedin.svg"
                            alt="LinkedIn logo"
                            className="secondary-social__icon"
                            height={40}
                            width={40}
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
      )}
    </>
  );
}
