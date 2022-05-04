import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import axios from 'axios'

export const CharacterPage = () => {
    const [characterData, setCharacterData] = useState([]);
    let { id } = useParams();
    let { name, species, gender, location, origin, episode, status, created, image } = characterData;

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setCharacterData(res.data))
            .catch(e => alert(e));
    }, [id]);

    return (
    <article>
      <img 
        src={image} 
        alt=''
        loading="lazy"
        style={{maxWidth: '100%', marginBottom: '16px'}} />
        <section>x
            <h2>{name}</h2>
            <p><span>Status:</span> <span>{status}</span></p>
            <p><span>Species:</span> {species}</p>
            <p><span>Gender:</span> {gender}</p>
            <p><span>Location:</span> {location?.name}</p>
            <p><span>Origin:</span> {origin?.name}</p>
            <p><span>Episodes with:</span> {episode?.length}</p>
            <p><span>Created:</span> {created}</p>
        </section>
    </article>
    )
}