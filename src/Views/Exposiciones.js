import React, { Component } from "react";
import '../App.css';
import { ExposicionCard } from "../Components/ExposicionCard/index";
import { Lista } from "../Components/Lista/index";
import Nav from '../Navigation';

function Exposiciones() {
    return (
        <div className="App">
            <Nav/>
            <div className="Columns-35">
                <ExposicionCard/>
            </div>
            <div className="Columns-70">
                <Lista/>
            </div>
        </div>
    );
}

export default Exposiciones;