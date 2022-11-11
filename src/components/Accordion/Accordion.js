import React, { useState } from 'react' ;
import '../Sections/Section.scss';
import '../../Pages/About/About.scss';
import PropTypes from "prop-types";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Accordion ({data, defaultSection}) {
  // state / état
  const [activeEntry, setActiveEntry] = useState(defaultSection);

  const clickAccordion = entry => {
    setActiveEntry(entry)
  };
  // affichage
  return (
    <div className="kasa-accordion__container">
        {
        data.map((item, index) => {
            return(
                <div className='kasa-accordion__item'>
                    <div className="kasa-accordion__title" onClick={() => clickAccordion(item.title)} key={item.title}>

                        <div key={index.title}>
                          {item.title}
                        </div>
                        {/* si c'est l'élément par défaut qui est ouvert afficher le FiChevronUp sinon afficher l'autre */}
                        <div key={`chevron-${index.id}`}>
                          {activeEntry === item.title ? <FiChevronUp className='icon'/> : <FiChevronDown className='icon'/> }
                        </div>

                    </div>
                    {/* si le titre du contenant est actif, afficher le contenant */}
                    { activeEntry === item.title &&
                      <div className="kasa-accordion__content" key={index.content} >
                        {item.content}
                      </div>
                    }
                </div>
            )
        }) }
    </div>
  )
  
};


Accordion.protoTypes = {
  data: PropTypes.array.isRequired,
  defaultSection: PropTypes.string.isRequired
  
}

export default Accordion;