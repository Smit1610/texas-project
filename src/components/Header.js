import React from "react";
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import RedditIcon from '@mui/icons-material/Reddit';
import SearchBar from './SearchBar';

function Header() {
    return (
        <div className="header">
            <RedditIcon />
            <SearchBar />
            <PersonIcon />
        </div>
    );
}

export default Header;