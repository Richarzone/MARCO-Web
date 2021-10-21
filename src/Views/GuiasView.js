import React, { Component, useState } from "react";
// import  { Redirect } from 'react-router-dom'
import  { useHistory } from 'react-router-dom'
import '../App.css';
import Nav from '../Navigation';
import AgregarGuiaCard from "../Components/Guias/AgregarGuiaCard/AgregarGuiaCard";

function Guias() {

    const [guias, setGuias] = useState([]);
    const [guiasComp, setGuiasComp] = useState([]);
    // const [guiaId, setGuiaId] = useState(null);
    // const [toHorarios, setToHorarios] = useState(false);

    // if(toHorarios) {
    //     return <Redirect to={'/Guias/' + guiaId}/>
    // }

    const history = useHistory();

    let temp = [];
    useState(() => {
        const url = "http://localhost:4000/agendarVisita/getGuias";
        fetch(url).then(res => {
            return res.json();
        }).then(data => {
            setGuias(data);
            data.forEach(guia => {
                temp.push(
                    <button className="guiaBtn" onClick={() => history.push('/Guias/' + guia._id)}>
                        <p key="{guia._id}">{guia.nombre}</p>
                    </button>
                )
            });
            setGuiasComp(temp);
            temp = [];
        });
    }, [guias])

    return (
        <div className="App">
            <Nav/>
            <div className="Columns-35">
                <AgregarGuiaCard/>
            </div>
            <div className="Columns-70">
                <div className="listaGuias">    
                    <div className="cardGuias">
                        {guiasComp}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guias;