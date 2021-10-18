import React, { Component } from "react";
import '../App.css';
import Nav from '../Navigation';
import { Lista } from "../Components/Lista";

export class Calendario extends Component {

    async componentDidMount()
    {
        const url = "http://localhost:4000/agendarVisita/getDias";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render() {
        return (
            <div className="App">
                <Nav/>
                <div>
                    <Lista>
                        
                    </Lista>
                    <Lista/>
                </div>
            </div>
        );
    }
}

export default Calendario;