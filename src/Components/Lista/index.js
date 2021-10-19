import React, { Component } from "react"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import "./Acordion.css";
import "./Lista.css"

export class Lista extends Component {
    render() {
        if(this.props.Dia != "Lunes")
        {
            return(
                <Accordion allowZeroExpanded className="accordion">
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="accordion__button">
                                {this.props.Dia}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion__panel">
                        {
                            this.props.Bloques[0].map((bloque) => (
                                <Accordion allowZeroExpanded className="sub_accordion">
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="sub_accordion__button">
                                                Bloque {bloque.numero}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="accordion__panel">
                                                Hora de Inicio: {bloque.horaInicio}
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            ))
                        }
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            )
        }
        else
        {
            return(
                <Accordion allowZeroExpanded className="accordion">
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="accordion__button">
                                {this.props.Dia}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion__panel">
                            Cerrado
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            )
        }
    }
}