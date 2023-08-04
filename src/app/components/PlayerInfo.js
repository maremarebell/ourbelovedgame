import React from 'react';
import Image from 'next/image';

import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

export const PlayerInfo = (props) => {

  const tagList = props.data?.tags
    ? props.data.tags.split(';').map((tag) => (
        <span key={tag} className="profile__tag">
          {tag}
        </span>
      ))
    : null;

  return (
    <>
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
    </>
  );
};

export default PlayerInfo;
