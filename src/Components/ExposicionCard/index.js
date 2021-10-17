import React, {Component} from "react"
import "./ExposicionCard.css"

export class ExposicionCard extends Component {
    render() {
        return(
            <div className="ExpoCardArea">    
                <div className="ExpoCard">
                    <div className="Title-expo">
                        Agregar exposicion
                    </div>
                    <div className="Expo-data">
                        <form>
                            <label>
                                <div className="Column-30">
                                    Nombre: &nbsp;
                                </div>
                                <div className="Column-70">
                                    <input type="text" className="textfield"/>
                                </div>
                            </label>
                        </form>
                        <form>
                            <label>
                                <div className="Column-30">
                                    Descripcion: &nbsp;
                                </div>
                                <div className="Column-70">
                                    <textarea className="textarea"/>
                                </div>
                            </label>
                        </form>
                        <form>
                            <label>
                                <div className="Column-30">
                                    Video: &nbsp;
                                </div>
                                <div className="Column-70">
                                    <input type="url" className="textfield"/>
                                </div>
                            </label>
                        </form>
                    </div>
                    <button className="Buttons-expo">
                        Agregar
                    </button>
                </div>
            </div>
        )
    }
}