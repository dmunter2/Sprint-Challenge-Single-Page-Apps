import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";
export default function CharacterList() {
    const [episode, setEpisodes] = useState([]);
    // TODO: Add useState to track data from useEffect

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then((data) => {
                setEpisodes(data.data.results)
            })
            .catch((err) => {
                console.log('this is the error', err)
            })
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);

    return (
        <section className="episode-list grid-view">
            {episode.map((data) => {
                return (
                    <EpisodeCard
                        name={data.name}
                        air_date={data.air_date}
                        episode={data.episode}
                    />
                )
            })}
        </section>
    );
}