import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { getStatusColor } from "../../modules";

export const CharacterPage = () => {
    const [characterData, setCharacterData] = useState([]);
    let { id } = useParams();
    let { name, species, gender, location, origin, status, created, image } = characterData;

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setCharacterData(res.data))
            .catch(error => console.log(error));
    }, [id]);

    return (
    <article className="character-section">
      <img 
        className="character-image"
        src={image} 
        alt={name}
        loading="lazy"
        style={{maxWidth: '100%', marginBottom: '16px'}} />
    <section className="character-bio">
        <h2>{name}</h2>
        <p className="character-status">Status: <span className="status" style={{ background: getStatusColor(status) }}>{status}</span></p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Location: {location?.name}</p>
        <p>Origin: {origin?.name}</p>
        <p>Created: {created}</p>
    </section>
    </article>
    )
}