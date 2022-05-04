import { Link } from 'react-router-dom'

export const CharacterCard = ({id, name, image, status}) => {
    let statusColor = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : '';
    return (
        <Link className="slot-link" to={`/${id}`}>
            <img className="character-image" src={image} alt={name}/>
            <h3 className="character-name">{name}</h3>
            <p className="character-status">Status: <span style={{ background: statusColor }} className="status">{status}</span></p>
        </Link>
    )
}