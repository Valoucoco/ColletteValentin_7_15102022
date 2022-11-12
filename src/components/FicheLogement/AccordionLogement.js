import './AccordionLogement.css'
import { useState } from "react";
import React from "react";
const chevron = <i className="fa-solid fa-chevron-up"></i>;

function Accordion_Logement({ title, content }) {
    const [active, setActive] = useState(false);

    const handleToggle = (e) => {
    setActive(!active);
    };
    return (
    <div className={`AccordionLogement ${active && "active"}`}>
        <div className="accordionTitle" onClick={handleToggle}>
            {title} <div>{chevron}</div>
        </div>
        <div className="accordionContent">{content}</div>
    </div>
    );
}

export default Accordion_Logement;
