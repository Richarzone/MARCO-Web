import React, { Component } from "react";
import '../App.css';
import Nav from '../Navigation';
import { Lista } from "../Components/Lista";

export class Calendario extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <div className="">
                    <Lista/>
                </div>
                
            </div>
        );
    }
}

export default Calendario;