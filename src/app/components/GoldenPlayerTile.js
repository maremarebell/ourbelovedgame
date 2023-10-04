import React from "react";
import Link from 'next/link';
import Image from 'next/image';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Schibsted_Grotesk } from 'next/font/google'
import {generateTags} from '../utils/textUtils';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  'backgroundColor': 'transparent',
  'border':'0px solid #fff',
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  padding: 0
}));

export const GoldenPlayerTile = (props) => {

  const imagePath = `/assets/players/1-golden-bachelor/cropped/${props.data.name}.jpg`;

  return (
    <Accordion className={`player-accordion player-accordion--${props.data.player_status}`}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id={`panel1a-header${props.index}`}
        className="player-accordion__summary"
      >
        <div>
          <img
            src={imagePath}
            alt={`headshot of ${props.data.name}`}
            className="player__headshot"
          />
          <span className={`player__name ${sgfont.className}`}>
            {props.data.name}
          </span>
          <p className="player__basics">
            {props.data.age}, {props.data.job} <br/>
            {props.data.location}
          </p>
        </div>
      </AccordionSummary>
      <AccordionDetails
        className="player-accordion__details"
      >
        
        <ul>
          <li class="player-accordion__list-item">
            <Image
              src="/assets/logo-abc-white.svg"
              alt="ABC logo" 
              height={20} width={20} 
            />
            <a href={`${props.data.abc_profile}`} target="_blank" rel="noreferrer" className="player-accordion__link">
              {props.data.name}&apos;s ABC profile
            </a>
          </li>
          <li class="player-accordion__list-item">
            <Image
              src="/assets/logo-instagram-white.svg"
              alt="ABC logo" 
              height={20} width={20} 
            />
            <a href={`${props.data.instagram_url}`} target="_blank" rel="noreferrer" className="player-accordion__link">
              {props.data.name}&apos;s Instagram
            </a>
          </li>
        </ul>
        <div className="player-accordion__tags">
          <span className="player-accordion__tags__blurb">
            Tags from GoR:
            {/* <Tooltip title="Delete">
              <IconButton>
                ?
              </IconButton>
            </Tooltip> */}
          </span>
          {generateTags(props.data?.tags)}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
