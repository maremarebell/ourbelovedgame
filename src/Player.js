import React from "react";
import "./App.css";
import { playerData } from "./data";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

export const Player = (props) => {

  const { name } = props.singlePlayerData;

  return (
    <>
      Player<br/>

      name: {name}

    </>
  );
};

