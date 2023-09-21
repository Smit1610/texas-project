import React from "react";
import './Header.css';
import RedditIcon from '@mui/icons-material/Reddit';
import SearchBar from './SearchBar';
import LoginLogoutButton from "./LoginLogoutButton";

function Header() {
    return (
        <div className="header">
            <RedditIcon />
            <SearchBar />
            <LoginLogoutButton />
        </div>
    );
}

export default Header;