import React, {Component} from "react"
import "./VisitaCard.css"

export class VisitaCard extends Component {
    render() {
        return (
            <div className="Visita-card">{this.props.btnString}</div>
        )
    }
}
export default VisitaCard;