import "../styles/Accordion.css";
import { useState } from "react";
import React from "react";
const chevron = <i class="fa-solid fa-chevron-up"></i>;

function Accordion({ title, content }) {
  const [active, setActive] = useState(false);

  /*
const handleToggle = (e) => {
    setActive(!active);
};

   <div className="accordion__title" onClick={handleToggle}>
*/

  /*
    <div className="accordion__title" onClick={(e) => { setActive(!active);}}>
*/

  const handleToggle = (e) => {
    setActive(!active);
  };
  return (
    <div className={`accordion ${active && "active"}`}>
      <div className="accordion__title" onClick={handleToggle}>
        {title} <div>{chevron}</div>
      </div>
      <div className="accordion__content">{content}</div>
    </div>
  );
}

export default Accordion;
