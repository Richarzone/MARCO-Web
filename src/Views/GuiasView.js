import React, { Component } from "react";
import '../App.css';
import Nav from '../Navigation';
import { Card } from "../Components/Card";

function Guias() {
    return (
        <div className="App">
            <Nav/>
            <div className="Columns-35">
                <Card/>
            </div>
            <div className="Columns-70">
                
            </div>
        </div>
    );
}

export default Guias;