import React, { useState } from "react";
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="container">
            <div className="searchbar">
            <SearchIcon />
            <input
                type="text"
                id="search-text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search"
            />
            </div>
        </div>
    );
}

export default SearchBar;