import React, { Component } from "react"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import "./Acordion.css";
import "./Lista.css"

export class Lista extends Component {

    render() {
    console.log(this.props.numDias[0])

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
                        this.props.numDias[0].map((bloque) => (
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
}