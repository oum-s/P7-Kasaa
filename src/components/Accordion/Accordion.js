import React, { useState } from 'react' ;
import '../../components/Section/Section.scss';
import PropTypes from "prop-types";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Accordion ({title, content}) {
  // state / état 
  const [isActive, setIsActive] = useState(false);
  // affichage
  return (
    <div className="kasa-accordion__item">
      {/* Au click, si isActive est false on la rend true et vice-versa */}
      <div className="kasa-accordion__title" onClick={() => setIsActive(!isActive)}>

        <div>{title}</div>

        {/* si isActive est true on affichee le chevronUp et s'il est false on affiche le chevronDown */}
        <div>{isActive ? <FiChevronUp className='icon'/> : <FiChevronDown className='icon'/> }</div>

      </div>
    
      {/* quaad isActive est true on affiche le contenue */}
      {isActive && <div className="kasa-accordion__content">
        <ul>
          <li>{content}</li>
        </ul>
      </div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired
}

export default Accordion;