import React from "react";
import Logo from '../assets/hamburgerlogo.png';
import { Link } from 'react-router-dom'




function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} />
            </div>
            <div className="rigtSide">

                <Link to="/">Home</Link>
                <Link to="./Menu">Menu</Link>
                <Link to="./About">About</Link>
                <Link to="./Contact">Contact</Link>

            </div>

        </div>
    )
}

export default Navbar
