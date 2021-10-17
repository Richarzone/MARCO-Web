import React, { Component } from "react";
import '../App.css';
import Nav from '../Navigation';
import { Card } from "../Components/Card";
import { Lista } from "../Components/Lista";

function Guias() {
    return (
        <div className="App">
            <Nav/>
            <div className="Columns-35">
                <Card/>
            </div>
            <div className="Columns-70">
                <Lista/>
            </div>
        </div>
    );
}

export default Guias;