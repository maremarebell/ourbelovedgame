'use client';

import React from "react";
import { Schibsted_Grotesk } from 'next/font/google'
import Image from 'next/image';
import Sections from './Sections';
import PlayerHero from './PlayerHero';
import PlayerNameplate from './PlayerNameplate';
import PlayerInfo from './PlayerInfo';
import './player-profile.scss'

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

export const PlayerProfile = (props) => {

  return (
    <>
      <PlayerHero data={props.data} />

      <div className="profile main-content__wrapper">

        <PlayerNameplate data={props.data} />

        <div className="main-content">

          <div className="main-content__inner">

            <PlayerInfo data={props.data} />

            <Sections playerData={props.data} key={props.data?.gorder} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerProfile;
