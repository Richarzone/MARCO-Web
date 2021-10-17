import React from "react";
import './Navigation.css';
import logo from './logo.png'
import { Link } from "react-router-dom";
import { TabButton } from "./Components/TabButton";

function Nav() {
    return (
        <nav className="Nav">
            <img src={logo} className="Logo"/>
            <ul>
                <Link to="/">
                    <TabButton btnString="Home"/>
                </Link>
                <Link to="/AdminVisitas">
                    <TabButton btnString="Visitas al museo"/>
                </Link>
                <Link to="/Exposiciones">
                    <TabButton btnString="Exposiciones"/>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;