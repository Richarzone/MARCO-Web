import React from "react";
import '../App.css';
import Nav from '../Navigation';
import { Lista } from "../Components/Lista";

function Calendario() {
    return (
        <div className="App">
            <Nav/>
            <div className="">
                <Lista/>
            </div>
            
        </div>
    );
}

export default Calendario;