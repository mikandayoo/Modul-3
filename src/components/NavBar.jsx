import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => (
    <div>
        <h1>{props.navBar}</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
);

export default NavBar;