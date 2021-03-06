import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header({ token, setToken }) {
    useEffect(() => {
        // Update the document title using the browser API
        console.log("token in header" + token)
        // sessionStorage.setItem('token', JSON.stringify(token))
        localStorage.clear();
    }, [token]);//only run if token changes


    const loginHandle = () => {
        if (token) {
            return (
                <div class="topnav">
                    <Link to='/'>Home</Link>
                    <Link to='/listings'>Listings</Link>
                    <Link to='/login' >Logout</Link>

                </div>
            )
        } else {
            return (
                <div class="topnav">
                    <Link to='/home'>Home</Link>
                    <Link to='/listings'>Listings</Link>
                    <Link to='/login' >Login</Link>
                    <a class="right-active" href="/home">USC housing</a>
                </div>
            )
        }
    }
    return (
        <>
            {loginHandle()}
        </>
    )
}