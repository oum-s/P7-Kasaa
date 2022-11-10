import React, { useState } from 'react' ;
import '../../components/Section/Section.scss';
import '../../Pages/About/About.scss';
// import PropTypes from "prop-types";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function MultipleAccordion ({data, defaultSection}) {
  // state / état
  const [activeEntry, setActiveEntry] = useState(defaultSection)
  const clickAccordion = entry => {
    setActiveEntry(entry)
  };
  // affichage
  return (
    <div className="kasa-accordion__container">
        {
        data.map((item) => {
            return(
                <div className='kasa-accordion__item'>
                    <div className="kasa-accordion__title" onClick={() => clickAccordion(item.title)} key={item.title}>
                        <div>{item.title}</div>
                        <div>{activeEntry === item.title ? <FiChevronUp className='icon'/> : <FiChevronDown className='icon'/> }</div>
                    </div>

                    { activeEntry === item.title &&
                    <div className="kasa-accordion__content" key={item.content} >
                      {item.content}
                    </div>
                    }
                </div>
            )
        }) }
    </div>
  )

};



export default MultipleAccordion;