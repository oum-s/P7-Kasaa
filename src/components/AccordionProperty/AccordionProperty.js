import React, { useState } from 'react' ;
import '../../components/SectionProperty/SectionProperty.scss';
// import PropTypes from "prop-types";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Api from '../../Utils/api.json';

function AccordionProperty (item) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
        {Api.map(({ item }) => (
           <div className="kasa-accordion__item" key={item.id}>
            <div className="kasa-accordion__title" onClick={() => setIsActive(!isActive)}>
              <h2>Description</h2>

              <div>{isActive ? <FiChevronDown className='icon'/> : <FiChevronUp className='icon'/> }</div>
            </div>

            {isActive && <div className="kasa-accordion__content">{item.description}</div>}
         </div>
        ))}
    </div>
  );

  
};

// AccordionProperty.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string
// }

export default AccordionProperty;