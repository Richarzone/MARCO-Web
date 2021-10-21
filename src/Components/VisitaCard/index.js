import React, {Component} from "react"
import "./VisitaCard.css"

export class VisitaCard extends Component {
    render() {
        return (
            <div className="Visita-card-area">
                <div className="Visita-card">
                    <div className="Text-area">
                        <div>
                            Visitante: {this.props.nombre}
                        </div>
                        <div>
                            Fecha: {this.props.fecha} &nbsp; Hora: {this.props.hora}
                        </div>
                        <div>
                            Guia: {this.props.guia}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default VisitaCard;