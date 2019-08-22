import React from "react"
import './search-box.styles.css'

const SearchBox = ({onChangeHandler}) => {
    return (
            <input
                className='search-box'
                type='search'
                placeholder='Search Monsters'
                onChange={onChangeHandler}/>
    )
};

export default SearchBox;