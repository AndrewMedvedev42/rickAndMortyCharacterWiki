import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import axios from 'axios'

import { CharacterCard } from "../../components/characterCard";
import Search from "../../components/search";

export const MainPage = () => {
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        //fetch all characters data
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(data => setFetchedData(data.data.results))
            .catch(e => alert(e));
    }, []);
    return (
        <>
            <header>
                <Search setFetchedData={setFetchedData}/>
            </header>
            <section>
                <Grid container spacing={2}>
                    {
                        fetchedData.map(({id, name, image, status})=>{
                            return <CharacterCard id={id} name={name} image={image} status={status}/>
                        })
                    }
                </Grid>
            </section>
        </>
    )
}