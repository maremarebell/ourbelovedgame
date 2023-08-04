'use client';

import React from "react";
import { Schibsted_Grotesk } from 'next/font/google'
import { Status } from './Status';
import {SvgLogoInstagram, SvgLogoTiktok} from '../utils/logos';
import Image from 'next/image';
import Sections from './Sections';
import './player-profile.scss'

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

export const PlayerProfile = (props) => {

  console.log(props)

  const imagePath = `/assets/players/${props.data.slug}.png`;

  let tiktokHandle = "";
  let instagramHandle = "";

  if (props.data?.tiktok_url !== undefined && props.data?.tiktok_url.length > 0) {
    const tiktokparts = props.data?.tiktok_url.split('/');

    if (tiktokparts !== undefined) {
      tiktokHandle = tiktokparts[tiktokparts.length - 1];
    }
  }

  const instaparts = props.data?.instagram_url.split('/');

  if (instaparts !== undefined && instaparts.length > 0) {
    instagramHandle = instaparts[instaparts.length - 2];
  }

  const tagList = props.data?.tags
    ? props.data.tags.split(';').map((tag) => (
        <span key={tag} className="profile__tag">
          {tag}
        </span>
      ))
    : null;

  return (
    <>
      <svg className="profile__short-name " viewBox="0 0 94 20">
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" opacity=".6" className={sgfont.className}>
          {props.data.name}
        </text>
      </svg>

      <div>
        <div className="hero">
          <Image
            src={imagePath}
            alt={`headshot of ${props.data.name}`}
            height={320}
            width={500}
            className="hero__image"
          />
        </div>

        <div className="profile main-content__wrapper">

          <div className="profile__nameplate">
            
            <Status data={props.data} />

            <ul className="profile__info">
              <li>{props.data.age}, {props.data.job}</li>
              <li className="profile__location">{props.data.location}</li>
            </ul>

            {props.data.tiktok_url.length > 0 && tiktokHandle !== undefined && (
              <a 
                href={`${props.data.tiktok_url}`} 
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
              href={`${props.data.instagram_url}`} 
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

              <h1 className={`profile__headline ${sgfont.className}`}>{props.data.full_name}</h1>

              <section className="profile__section">

                <h3 className={`profile__section__title ${sgfont.className}`}>🌹 Player Details</h3>

                <div className="profile__details">
                  <div className="profile__tr">
                    <div className="profile__td profile__label">
                      Age: 
                    </div>
                    <div className="profile__td">
                      {props.data.age}
                    </div>
                  </div>

                  <div className="profile__tr">
                    <div className="profile__td profile__label">
                      Location: 
                    </div>
                    <div className="profile__td">
                      {props.data.location}
                    </div>
                  </div>

                  <div className="profile__tr">
                    <div className="profile__td profile__label">
                      <span>&quot;Job&quot;:</span>
                    </div>

                    <div className="profile__td">
                      {props.data.job}
                    </div>
                  </div>

                  <div className="profile__tr">
                    <div className="profile__td profile__label">
                      <Image className="profile__td__logo" src="/assets/logo-abc.svg" alt="ABC logo" height={20} width={20} />
                      <span>Official ABC Bio:</span>
                    </div>

                    <div className="profile__td">
                      <a href={`${props.data.abc_profile}`} target="_blank" rel="noreferrer">
                        {props.data.abc_profile}
                      </a>
                    </div>
                  </div>
              
                  {props.data.linkedin_url.length > 0 && (
                    <div className="profile__tr">
                      <div className="profile__td profile__label">
                        <Image className="profile__td__logo" src="/assets/logo-linkedin.svg" alt="LinkedIn logo" height={20} width={20} />
                        <span>LinkedIn Title:</span>
                      </div>
                      <div className="profile__td">
                        {props.data.linkedin_job}
                      </div>
                    </div>
                  )}

                  {props.data.linkedin_url.length > 0 && (
                    <div className="profile__tr">
                      <div className="profile__td profile__label">
                        <Image className="profile__td__logo" src="/assets/logo-linkedin.svg" alt="LinkedIn logo" height={20} width={20} />
                        <span>LinkedIn Profile:</span>
                      </div>
                      <div className="profile__td">
                        <a
                          href={`${props.data.linkedin_url}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {props.data.linkedin_url}
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

              <Sections playerData={props.data} key={props.data?.gorder} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerProfile;
