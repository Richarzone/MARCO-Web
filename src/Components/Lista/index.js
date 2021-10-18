import React, { Component } from "react"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import "./Acordion.css";
import "./Lista.css"

export class Lista extends Component {
    render() {
        return(
            <div className="Area-lista">
                <div className="Lista">
                    <Accordion allowZeroExpanded className="accordion">
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordion__button">
                                    Lunes
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="accordion__panel">
                                <p>
                                    Info
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        )
    }
}