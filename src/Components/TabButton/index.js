import React, {Component} from "react"
import "./tabButton.css"

export class TabButton extends Component {
    render() {
        return (
            <button className="Tab-button">{this.props.btnString}</button>
        )
    }
}