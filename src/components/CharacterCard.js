import React from "react";
import styled from 'styled-components';

const CARDDIV = styled.div`
border: 3px solid lightgrey;
border-radius: 10px;
margin: 2% 0 3% 0;
padding-bottom: 10px;
`
const IMG = styled.img`
border-radius: 9px 9px 0px 0px
`
const NAME = styled.h3`
margin: 0;
margin-left: 4%;
`

const HUMAN = styled.h4`
margin: 0;
margin-left: 4%;
color: grey;

`

const PLANET = styled.h5`
margin: 0;
margin-left: 4%;
padding-top: 5px;

border-top: 1px solid black;

margin-top: 3%;


`

const LOCATION = styled.h5`
margin: 0;
margin-left: 4%;
margin-bottom: 5%;


`



export default function CharacterCard(props) {
  return (
    <CARDDIV>
      <IMG alt="description of" src={props.img}></IMG>
      <NAME>{props.name}</NAME>
      <HUMAN>{props.species} {props.status}</HUMAN>
      <PLANET>Location: {props.origin}</PLANET>
      <LOCATION>Origin: {props.location}</LOCATION>
    </CARDDIV>
  )
}