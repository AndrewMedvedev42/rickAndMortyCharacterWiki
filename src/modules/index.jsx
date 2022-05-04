export const getOptions = (character_list) => {
    return character_list.map(({name})=>{
        return name
    }).filter((item, index, a) => a.indexOf(item) === index)
}

export const getStatusColor = (status) => {
    return status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : '';
}