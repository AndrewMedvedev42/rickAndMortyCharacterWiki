import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Logo } from "../../components/header";

import { CharacterCard } from "../../components/characterCard";
import Search from "../../components/search";

export const MainPage = () => {
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(res => setFetchedData(res.data.results))
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            <Logo/>
            <header>
                <Search setFetchedData={setFetchedData}/>
            </header>
            <section className="character-list">
                    {
                        fetchedData.length ? (
                            fetchedData.map(({id, name, image, status})=>{
                                return <CharacterCard id={id} name={name} image={image} status={status}/>
                            })
                        ):<h1>Sorry, no characters found.</h1>
                    }
            </section>
        </>
    )
}