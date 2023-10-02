import React from "react";
import Link from 'next/link';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Schibsted_Grotesk } from 'next/font/google'

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

  const imagePath = `/assets/players/1-golden-bachelor/originals/${props.data.name}.jpg`;

  return (
    <Accordion className="player-accordion">
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
          <span className={`player__name ${sgfont.className}`}>{props.data.name}</span>
          <p>{props.data.age}, {props.data.job}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <p>More details to come.</p>
      </AccordionDetails>
    </Accordion>
  );
};
