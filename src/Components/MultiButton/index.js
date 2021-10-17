import React, {Component} from "react"
import "./multiButton.css"

export class MultiButton extends Component {
    render() {
        return (
            <div className="Multi-button">{this.props.btnString}</div>
        )
    }
}