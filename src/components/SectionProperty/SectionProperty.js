import PropTypes from "prop-types";
import React from "react";
import './SectionProperty.scss';
import Accordion from '../Accordion/Accordion';

function SectionProperty ({description, equipments}) {
  return (
    <>
      <div className="kasa-SectionProperty" >
        <div className="kasa-accordionProperty"  >
          <Accordion title={"Description"} content={description} />
          <Accordion title={"Équipements"} content={[equipments]} />
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
