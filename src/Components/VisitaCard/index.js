import React, {Component} from "react"
import "./VisitaCard.css"

export class VisitaCard extends Component {
    render() {
        var date = new Date(this.props.Fecha);
        return (
            <div className="Visita-card-area">
                <div className="Visita-card">
                    <div className="Text-area">
                        <div>
                            Visitante: {this.props.Nombre}
                        </div>
                        <div>
                            Fecha: {((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + date.getFullYear()} &nbsp; Hora: {this.props.Hora}
                        </div>
                        <div>
                            Guia: {this.props.Guia}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default VisitaCard;