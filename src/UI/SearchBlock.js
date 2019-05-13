import React from 'react'

const SearchBlock = (props) => {
    let onFilterChanged = (e) => {
        props.setFilter(e.currentTarget.value);
    };

    return  <input placeholder={"search"} onChange={onFilterChanged}/>
};

export default SearchBlock;
