import React, { Component } from "react";
import '../App.css';
import Nav from '../Navigation';
import { Calendario } from "../Components/Calendario";
import "../Components/Calendario/Lista.css"

export class CalendarioView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dias: [],
            isLoaded: false
        };
    }
    
    async componentDidMount() {
        const url = "http://localhost:4000/agendarVisita/getDias";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({dias : data, isLoaded : true});
    }

    render() {
        return (
            <div className="App">
                <Nav/>
                    <div className="Area-lista">
                        <div className="Lista">
                            {
                                this.state.dias.map(({dia, bloques}) => {
                                    return(
                                        <Calendario Dia={dia} Bloques={[bloques]}/>
                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
        );
    }
}

export default CalendarioView;