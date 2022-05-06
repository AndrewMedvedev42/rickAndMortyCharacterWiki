import React, { useState , useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import axios from 'axios'

import { getOptions } from "../../modules";

const Search = ({setFetchedData}) => {
    const [characterList, setCharacterList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        //fetch all characters data
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`)
          .then(res => setCharacterList(res.data.results))
          .catch(error => console.log(error));
    }, [searchQuery]);

    const onSearch = (e) => {
      //fetch data for auto complete
      e.preventDefault()
      axios.get(`https://rickandmortyapi.com/api/character?name=${e.target.character_name.value}`)
        .then(res => setFetchedData(res.data.results)) //sets state in main/index.jsx
        .catch(error => console.log(error));
    }
  return (
    <form className="search-form" onSubmit={(e)=>{onSearch(e)}}>
        <Autocomplete
            className="autocomplete-field"
            disablePortal
            id="combo-box-demo"
            options={getOptions(characterList)}
            sx={{ width: 300 }}
            renderInput={
                (params) => <TextField {...params} 
                                className="text-field"
                                name="character_name"
                                onChange={(e)=>{setSearchQuery(e.target.value)}}/>}
            />
        <Button className="search-button" type="submit" variant="contained">Search</Button>
    </form>
  )
}

export default Search