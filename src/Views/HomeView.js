import React, { Component } from "react";
import '../App.css';
import logo from '../logo.png'
import { MenuButton } from "../Components/MenuButton";
import { Link } from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-logo-area">
                        <img src={logo} className="App-logo"/>
                    </div>
                    <div className="Greating-text-area">
                        <div className="Greating-text">
                            Bienvenido Administrador
                        </div>
                    </div>
                    <div className="Menu-button-area">
                        <Link to="/AdminVisitas">
                            <MenuButton btnString={"Administracion del museo"}/>
                        </Link>
                        <Link to="/Exposiciones">
                            <MenuButton btnString={"Exposiciones"}/>
                        </Link>
                        <Link to="/AgendaVisitas">
                            <MenuButton btnString={"Agenda de visitas"}/>
                        </Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;