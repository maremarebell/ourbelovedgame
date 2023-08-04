import React from 'react';
import { Status } from './Status';
import { SvgLogoInstagram, SvgLogoTiktok } from '../utils/logos';
import { Schibsted_Grotesk } from 'next/font/google';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] });

export const PlayerNameplate = (props) => {

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
  
  return (
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
  );
};

export default PlayerNameplate;
