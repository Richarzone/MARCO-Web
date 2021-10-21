import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../App.css';
import Nav from '../Navigation';

function Horarios({ match }) {

    const [nombreGuia, setNombreGuia] = useState(null);
    const [formDias, setFormDias] = useState([]);
    const history = useHistory();

    let temp = [];
    useState(() => {
        const url = "http://localhost:4000/agendarVisita/getGuia/" + match.params.id;
        const url2 = "http://localhost:4000/agendarVisita/getDias/";

        fetch(url).then(res => {
            return res.json();
        }).then(dataGuia => {
            fetch(url2).then(res2 => {
                return res2.json();
            }).then(dataDias => {
                setNombreGuia(dataGuia.nombre)
                let numBloque = 0;

                dataDias.forEach(dia => {
                    if(dia.bloques.length === 0) {
                        temp.push(
                            <div className="rowDia">
                                <div className="diaSemana">
                                    <p>{dia.dia}</p>
                                </div>
                                <div className="bloques">
                                    <p>No hay horarios disponibles</p>
                                </div>
                            </div>
                        )
                    } else {
                        let temp2 = []
                        dia.bloques.forEach(bloque => {
                            if(dataGuia.horarios.includes(numBloque)) {
                                temp2.push(
                                    <div className="bloque">
                                        <p>{bloque.horaInicio}</p>
                                        <input defaultChecked="true" type="checkbox"></input>
                                    </div>
                                )
                            } else {
                                temp2.push(
                                    <div className="bloque">
                                        <p>{bloque.horaInicio}</p>
                                        <input type="checkbox"></input>
                                    </div>
                                )
                            }
                            numBloque++;
                        })
                        
                        temp.push(
                            <div className="rowDia">
                                <div className="diaSemana">
                                    <p>{dia.dia}</p>
                                </div>
                                <div className="bloques">
                                    {temp2}
                                </div>
                            </div>
                        )
                    }
                });
                setFormDias(temp);

                temp = [];   
            }) 
        });
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const inputs = e.target;
        const selectedInputs = []
        
        for(let i=0;i<inputs.length;i++) {
            if(inputs[i].checked) {
                selectedInputs.push(i)
            }
        }

        const url = "http://localhost:4000/agendarVisita/setHorariosGuia";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: match.params.id, horarios: selectedInputs})
        });
        await response.json();
        history.go(0);
    }

    return (
        <div className="App">
            <Nav/>
            <div className="horariosContent">
                <div>
                    <h1>Horarios de {nombreGuia}</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        {formDias}
                        <button type="submit" className="btnGuardarHorarios">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Horarios;