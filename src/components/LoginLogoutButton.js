import React from 'react';
import './LoginLogoutButton.css';
import { useNavigate } from 'react-router-dom'
import { useUser, logout } from '../contexts/UserContext';

const LoginLogoutButton = () => {
    const navigate = useNavigate();
    const user = useUser();

    const handleLoginClick = () => {
        // login logic
        navigate('/login');
    }

    const handleLogoutClick = () => {
        // logout logic
        logout();
    }

    return (
        <div>
            {user ? (
                <button onClick={handleLogoutClick}>Logout</button>
            ) : (
                <button onClick={handleLoginClick}>Login</button>
            )}
        </div>
    )
}

export default LoginLogoutButton;