import { Link } from 'react-router-dom'
import { getStatusColor } from "../../modules";

export const CharacterCard = ({id, name, image, status}) => {
    return (
        <Link className="slot-link" to={`/${id}`}>
            <img className="character-image" loading='lazy' src={image} alt={name}/>
            <h3 className="character-name">{name}</h3>
            <p className="character-status">Status: <span style={{ background: getStatusColor(status) }} className="status">{status}</span></p>
        </Link>
    )
}