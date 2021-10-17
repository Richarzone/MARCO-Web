import React, { Component } from "react";
import '../App.css';
import Nav from '../Navigation';
import { Lista } from "../Components/Lista";

export class Calendario extends Component {

    async componentDidMount()
    {
        const url = "localhost:4000/agendarVisita/getDias";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

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