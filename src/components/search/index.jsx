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
        axios.get(`https://rickandmortyapi.com/api/character?name=${searchQuery}`)
          .then(data => setCharacterList(data.data.results))
          .catch(error => console.log(error));
    }, [searchQuery]);

    const onSearch = (e) => {
      e.preventDefault()
      axios.get(`https://rickandmortyapi.com/api/character?name=${e.target.character_name.value}`)
        .then(data => setFetchedData(data.data.results))
        .catch(error => console.log(error));
    }
  
    console.log(characterList);
  return (
    <form onSubmit={(e)=>{onSearch(e)}}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={getOptions(characterList)}
            sx={{ width: 300 }}
            renderInput={
                (params) => <TextField {...params} 
                                name="character_name"
                                label="Search characters" 
                                onChange={(e)=>{setSearchQuery(e.target.value)}}/>}
            />
        <Button type="submit">
          Search
        </Button>
    </form>
  )
}

export default Search