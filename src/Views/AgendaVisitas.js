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
                            <VisitaCard nombre="Ricardo Andres Arriaga Quezada" fecha="20/10/2021" hora="14:30" guia="Mauricio Lmao"/>
                        </div>
                    </div>
            </div>
        );
    }   
}

export default Agenda;