import React, { useState } from 'react' ;
import '../../components/Section/Section.scss';
import PropTypes from "prop-types";

function Accordion (title, content) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

Accordion.protoTypes = {
  title: PropTypes.string,
  content: PropTypes.content
}

export default Accordion;