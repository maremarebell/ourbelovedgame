'use client';

import playerData from "../../data/data-20-players.json";
import { Status } from '../../Status';
import {SvgLogoInstagram} from '../../utils/logos';
import {SvgLogoTiktok} from '../../utils/logos';
import Image from 'next/image';
import { Schibsted_Grotesk } from 'next/font/google'

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

export default function Page({ params }: { params: { slug: string } }) {

  const player = playerData.find((data) => data.slug === params.slug);

  const tagList = player?.tags
    ? player.tags.split(';').map((tag) => (
        <span key={tag} className="profile__tag">
          {tag}
        </span>
      ))
    : null;

  let data = player;
  const imagePath = `/assets/players/${params.slug}.png`;

  let tiktokHandle = "";
  let instagramHandle = "";

  if (data?.tiktok_url !== undefined && data?.tiktok_url.length > 0) {
    const tiktokparts = data?.tiktok_url.split('/');

    if (tiktokparts !== undefined) {
      tiktokHandle = tiktokparts[tiktokparts.length - 1];
    }
  }

  const instaparts = data?.instagram_url.split('/');

  if (instaparts !== undefined && instaparts.length > 0) {
    instagramHandle = instaparts[instaparts.length - 2];
  }

  return (
    <>
      {data !== undefined && (
        <>
          <svg className="profile__short-name " viewBox="0 0 94 20">
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" opacity=".6" className={sgfont.className}>
              {data.name}
            </text>
          </svg>

          <div>
            <div className="hero">
              <Image
                src={imagePath}
                alt={`headshot of ${data.name}`}
                height={320}
                width={500}
                className="hero__image"
              />
            </div>

            <div className="profile main-content__wrapper">

              <div className="profile__nameplate">
                
                <Status data={data} />

                <ul className="profile__info">
                  <li>{data.age}, {data.job}</li>
                  <li className="profile__location">{data.location}</li>
                </ul>

                {data.tiktok_url.length > 0 && tiktokHandle !== undefined && (
                  <a 
                    href={`${data.tiktok_url}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`profile__cta ${sgfont.className}`}
                  >

                    <SvgLogoTiktok className="profile__logo" />

                    <span className="profile__cta__text">
                      {tiktokHandle}
                    </span>
                  </a>
                )}

                <a
                  href={`${data.instagram_url}`} 
                  target="_blank"
                  rel="noreferrer"
                  className="profile__cta"
                >
    
                  <SvgLogoInstagram className="profile__logo" />
    
                  <span className="profile__cta__text">
                    @{instagramHandle}
                  </span>
                </a>
              </div>

              <div className="main-content">

                <div className="main-content__inner">
  
                  <h1 className={`profile__headline ${sgfont.className}`}>{data.full_name}</h1>

                  <section className="profile__section">
                    
                    <h3 className={sgfont.className}>🌹 Player Details</h3>

                    <div className="profile__details">
                      <div className="profile__tr">
                        <div className="profile__td profile__label">
                          Age: 
                        </div>
                        <div className="profile__td">
                          {data.age}
                        </div>
                      </div>

                      <div className="profile__tr">
                        <div className="profile__td profile__label">
                          Location: 
                        </div>
                        <div className="profile__td">
                          {data.location}
                        </div>
                      </div>

                      <div className="profile__tr">
                        <div className="profile__td profile__label">
                          <span>&quot;Job&quot;:</span>
                        </div>

                        <div className="profile__td">
                          {data.job}
                        </div>
                      </div>

                      <div className="profile__tr">
                        <div className="profile__td profile__label">
                          <Image className="profile__td__logo" src="/assets/logo-abc.svg" alt="ABC logo" height={20} width={20} />
                          <span>Official ABC Bio:</span>
                        </div>

                        <div className="profile__td">
                          <a href={`${data.abc_profile}`} target="_blank" rel="noreferrer">
                            {data.abc_profile}
                          </a>
                        </div>
                      </div>
                  
                      {data.linkedin_url.length > 0 && (
                        <div className="profile__tr">
                          <div className="profile__td profile__label">
                            <Image className="profile__td__logo" src="/assets/logo-linkedin.svg" alt="LinkedIn logo" height={20} width={20} />
                            <span>LinkedIn Title:</span>
                          </div>
                          <div className="profile__td">
                            {data.linkedin_job}
                          </div>
                        </div>
                      )}

                      {data.linkedin_url.length > 0 && (
                        <div className="profile__tr">
                          <div className="profile__td profile__label">
                            <Image className="profile__td__logo" src="/assets/logo-linkedin.svg" alt="LinkedIn logo" height={20} width={20} />
                            <span>LinkedIn Profile:</span>
                          </div>
                          <div className="profile__td">
                            <a
                              href={`${data.linkedin_url}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {data.linkedin_url}
                            </a>
                          </div>
                        </div>
                      )}

                      <div className="profile__tr">
                        <div className="profile__td profile__label">
                          <span>Tags:</span>
                        </div>
                        <div className="profile__td">
                          {tagList}
                        </div>
                      </div>
                    </div>
                  </section>
                             
                  <section className="profile__section">
                    <h3 className={sgfont.className}>📊 Season Stats</h3>
                    <div className="stats">
                      <div className="stats__row">
                        <div className="stat">
                          <span className="stat__title">Dates</span>
                          <span className="stat__value">0</span>
                          <span className="stat_detail"></span>
                        </div>
                        <div className="stat">
                          <span className="stat__title">Kisses</span>
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
                  </section>

                  <section className="profile__section">
                    <h3 className={sgfont.className}>🔮 Pre-Season Predictions</h3>
                    <p className="profile__p">
                      Predictions come from <a href="https://linktr.ee/gameofroses" target="_blank">Game of Roses</a> <strong>Season 20 IG Analysis</strong>, which you can find
                      wherever you listen to podcasts.
                    </p>
                    <ul className="predictions">
                      {player?.gor_predictions &&
                        player.gor_predictions.split(';').map((prediction, index) => (
                          <li key={index} className="prediction">{prediction.trim()}</li>
                        ))
                      }
                    </ul>    
                  </section>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
