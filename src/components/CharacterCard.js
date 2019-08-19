import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img alt="description of" src={props.img}></img>
      <h3>{props.name}</h3>
      <h4>{props.species} {props.status}</h4>
    </div>
  )
}