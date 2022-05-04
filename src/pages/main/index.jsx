import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from "../../components/header";

import { CharacterCard } from "../../components/characterCard";
import Search from "../../components/search";

export const MainPage = () => {
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(data => setFetchedData(data.data.results))
            .catch(e => alert(e));
    }, []);
    return (
        <>
            <Header/>
            <header>
                <Search setFetchedData={setFetchedData}/>
            </header>
            <section className="character-list">
                    {
                        fetchedData.map(({id, name, image, status})=>{
                            return <CharacterCard id={id} name={name} image={image} status={status}/>
                        })
                    }
            </section>
        </>
    )
}