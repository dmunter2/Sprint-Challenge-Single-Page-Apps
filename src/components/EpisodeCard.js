import React from "react";
import styled from 'styled-components';


const DIV1234 = styled.div`
border: 2px solid lightgrey;
border-radius: 10px;
width: 40%;
margin 5%;
padding: 1% 0% 0 3%;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

`
const NAME2 = styled.h2`
margin: 0;
`

const AIR_DATE = styled.h3`
margin: 0;
margin-top: 2%;
color: grey;
`
const EPISODE = styled.div`
display: flex;
`

export default function LocationCard(props) {


    return (
        <DIV1234 className='location-list '>
            <NAME2>{props.name}</NAME2>
            <AIR_DATE>{props.air_date}</AIR_DATE>
            <EPISODE>{props.episode}</EPISODE>
        </DIV1234>
    )
}

