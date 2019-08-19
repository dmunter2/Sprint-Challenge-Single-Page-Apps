import React from "react";
import styled from 'styled-components';

const DIV123 = styled.div`
border: 2px solid lightgrey;
border-radius: 10px;
width: 40%;
margin 5%;
padding: 1% 0% 0 3%;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

`
const NAME1 = styled.h2`
margin: 0;
`

const DIMENSION1 = styled.h3`
margin: 0;
margin-top: 2%;
color: grey;
`
const RESDIV = styled.div`
background-color: lightgrey;
display: flex;
flex-direction: row-reverse;
width: 40%;
margin: 5% 10% 0 60%;
border-radius: 0 0px 11px 0;
height: 20%;
justify-content: center;
`
const RESIDENTS = styled.h4`
color: white;
`

export default function LocationCard( props ) {
  return (
    <DIV123 className='location-list'>
      <NAME1>{props.name}</NAME1>
      <DIMENSION1>{props.dimension}</DIMENSION1>
      <RESDIV>
        <RESIDENTS>{props.residents} residents</RESIDENTS>
      </RESDIV>
    </DIV123>
  )
}