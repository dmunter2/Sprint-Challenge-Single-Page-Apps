import React from "react";
export default function LocationCard(props) {

    return (
        <div className='location-list'>
            <div>{props.name}</div>
            <div>{props.air_date}</div>
            <div>{props.episode}</div>
        </div>
    )
}

