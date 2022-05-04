import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { getStatusColor } from "../../modules";

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
    <article className="character-section">
      <img 
        className="character-image"
        src={image} 
        alt=''
        loading="lazy"
        style={{maxWidth: '100%', marginBottom: '16px'}} />
    <section className="character-bio">
        <h2>{name}</h2>
        <p className="character-status"><span>Status:</span> <span className="status" style={{ background: getStatusColor(status) }}>{status}</span></p>
        <p><span>Species:</span> {species}</p>
        <p><span>Gender:</span> {gender}</p>
        <p><span>Location:</span> {location?.name}</p>
        <p><span>Origin:</span> {origin?.name}</p>
        <p><span>Created:</span> {created}</p>
    </section>
    </article>
    )
}