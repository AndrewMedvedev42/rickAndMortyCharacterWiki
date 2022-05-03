import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

export const CharacterCard = ({id, name, image, status}) => {
    return (
        <Grid item xs={4} key={id}>
            <Link className='cardLink' to={`/${id}`}>
                <img src={image} alt={name}/>
                <h3>{name}</h3>
                <p>Status: {status}</p>
            </Link>
        </Grid>
    )
}