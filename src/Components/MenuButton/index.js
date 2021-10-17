import React, {Component} from "react"
import "./menuButton.css"

export class MenuButton extends Component {
    render() {
        return (
            <button className="Menu-button">{this.props.btnString}</button>
        )
    }
}