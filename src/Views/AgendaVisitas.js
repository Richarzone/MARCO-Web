import React, { Component } from "react";
import '../App.css';
import { VisitaCard } from "../Components/VisitaCard/index";
import Nav from '../Navigation';
import "../Components/Calendario/Lista.css"

export class Agenda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visitas: [],
            isLoaded: false
        };
    }
    
    async componentDidMount() {
        const url = "http://localhost:4000/agendarVisita/getVisitas";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({visitas : data, isLoaded : true});
        console.log(data);
    }

    render() {
        return (
            <div className="App">
                <Nav/>
                    <div className="Area-lista">
                        <div className="Lista">
                            {
                                this.state.visitas.map(({id_visitante, fecha, horaInicio, guia}) => {
                                    return(
                                        <VisitaCard Nombre={id_visitante} Fecha={fecha} Hora={horaInicio} Guia={guia}/>
                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
        );
    }   
}

export default Agenda;