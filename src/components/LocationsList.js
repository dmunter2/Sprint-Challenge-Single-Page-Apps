import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from './LocationCard';

export default function LocationList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        Axios
            .get('https://rickandmortyapi.com/api/location/')
            .then((data) => {
                setLocations(data.data.results)
            })
            .catch((err) => {
                console.log('this is the error', err)
            })
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);

    return (
        <section className='grid-view'>
            {locations.map((data) => {
                return (
                    <LocationCard
                        name={data.name}
                        type={data.type}
                        dimension={data.dimension}
                    />
                )
            })}
        </section>
    );
}
