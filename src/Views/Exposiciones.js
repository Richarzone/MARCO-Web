import React, { Component } from "react";
import '../App.css';
import { ExposicionCard } from "../Components/ExposicionCard/index";
import Nav from '../Navigation';
import "../Components/Calendario/Lista.css"

function Exposiciones() {
    return (
        <div className="App">
            <Nav/>
            <div className="Columns-35">
                <ExposicionCard/>
            </div>
            <div className="Columns-70">
                <div className="Area-lista">
                    <div className="Lista">
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exposiciones;