import React, { Component } from "react";
import '../App.css';
import { VisitaCard } from "../Components/VisitaCard/index";
import Nav from '../Navigation';
import "../Components/Calendario/Lista.css"

export class Agenda extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                    <div className="Area-lista">
                        <div className="Lista">
                            <VisitaCard/>
                        </div>
                    </div>
            </div>
        );
    }   
}

export default Agenda;