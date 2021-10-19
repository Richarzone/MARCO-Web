import React, { Component } from "react";
import '../App.css';
import Nav from '../Navigation';
import { Lista } from "../Components/Lista";
import "../Components/Lista/Lista.css"

export class Calendario extends Component {

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
        console.log(data);
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
                                        <Lista Dia={dia} Bloques={[bloques]}/>
                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
            
        );
    }
}

export default Calendario;