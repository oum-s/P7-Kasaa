import PropTypes from "prop-types";
import React from "react";
import './SectionProperty.scss';
// import Accordion from '../Accordion/Accordion';
import MultipleAccordion from '../Accordion/MultipleAccordion';

function SectionProperty ({description, equipments}) {
  let data = [
    {
      title: "Description",
      content: description
    },
    {
      title: "Equipements",
      content: 
        equipments.map((element, index) => {
          return(
            <ul key={ index }>
              { <li> {element} </li>}
            </ul>
          )
        })
    },
  ];

  return (
    <>
      <div className="kasa-SectionProperty" >
        <div className="kasa-accordionProperty"  >
          <MultipleAccordion data={data} defaultSection="Description"></MultipleAccordion>
        </div>
      </div>
    </>
  );
};

SectionProperty.protoTypes = {
  description: PropTypes.string.isRequired,
  equipments: PropTypes.array.isRequired,
}

export default SectionProperty;