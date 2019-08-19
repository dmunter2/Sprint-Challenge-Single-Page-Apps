import React from "react";
export default function LocationCard( props ) {

  return (
    <div className='location-list'>
      <div>{props.name}</div>
      <div>{props.type}</div>
      <div>{props.dimension}</div>
    </div>
  )
}