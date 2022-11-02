import React, { useState } from 'react' ;
import '../../components/Section/Section.scss';
import PropTypes from "prop-types";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Accordion ({title, content}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="kasa-accordion__item">
      <div className="kasa-accordion__title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <FiChevronDown className='icon'/> : <FiChevronUp className='icon'/> }</div>
      </div>
      {isActive && <div className="kasa-accordion__content">{content}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Accordion;