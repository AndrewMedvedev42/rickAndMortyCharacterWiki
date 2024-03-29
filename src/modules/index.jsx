//get and filters options for autocomplete
export const getOptions = (character_list) => {
    return character_list.map(({name})=>{
        return name
    }).filter((item, index, a) => a.indexOf(item) === index)
}

//returns color for status text
export const getStatusColor = (status) => {
    return status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : '';
}