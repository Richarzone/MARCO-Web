import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Card.css"

const AgregarGuiaCard =  () => {

    const history = useHistory();
    
    const [nombreGuia, setNombreGuia] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(nombreGuia)
        const url = "http://localhost:4000/agendarVisita/addGuia";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre: nombreGuia})
        });
        const data = await response.json();
        console.log(data);
        history.go(0);
    }

    return(
        <div className="EventCardArea">    
            <div className="EventCard">
                <div className="Title">
                    Agregar guia
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre: &nbsp;
                        <input type="text" value={nombreGuia} onChange={(e) => setNombreGuia(e.target.value)}/>
                    </label>
                    <button type="submit"className="buttons">
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AgregarGuiaCard