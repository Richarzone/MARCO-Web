import React, { Component } from "react";
import '../App.css';
import Nav from '../Navigation';
import { MenuButton } from "../Components/MenuButton";
import { Link } from "react-router-dom";

function AdminVisitas() {
    return (
        <div className="App">
            <Nav/>
            <div className="Center-screen">
                <div>
                    <Link to="/CalendarioVisitas">
                        <MenuButton btnString={"Administar horarios"}/>
                    </Link>
                </div>
                <div>
                    <Link to="/Guias">
                        <MenuButton btnString={"Administar guias"}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AdminVisitas;