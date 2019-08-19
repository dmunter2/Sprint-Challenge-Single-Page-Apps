import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((data) => {
        setCharacters(data.data.results)
      })
      .catch((err) => {
        console.log('this is the error', err)
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map((data) => {
        return (
          <CharacterCard 
            img={data.image} 
            name={data.name} 
            species={data.species}
            status={data.status}
            origin={data.origin.name}
            location={data.location.name}
            />
        )
      })}
    </section>
  );
}
