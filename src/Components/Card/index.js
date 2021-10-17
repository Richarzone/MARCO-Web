import React, {Component} from "react"
import "./Card.css"

export class Card extends Component {
    render() {
        return(
            <div className="EventCardArea">    
                <div className="EventCard">
                    <div className="Title">
                        Agregar guia
                    </div>
                    <form>
                        <label>
                            Nombre: &nbsp;
                            <input type="text"/>
                        </label>
                    </form>
                    <button className="buttons">
                        Agregar
                    </button>
                </div>
            </div>
        )
    }
}