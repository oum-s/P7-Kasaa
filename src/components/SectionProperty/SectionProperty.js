import React from "react";
import './SectionProperty.scss';
import Accordion from '../Accordion/Accordion';
import Api from '../../Utils/api.json';

function SectionProperty () {
  return (
    <>
      {
        Api.map((item) => {
          return(
            <div className="kasa-SectionProperty" key={item.id}>
              <div className="kasa-accordionProperty" key={item.id}>
                <Accordion title={"Description"} content={item.description} />
                <Accordion title={"Équipements"} content={item.equipments} />
            </div>
            </div>
            
          )
      })
      }
    </>
  );
};

export default SectionProperty;
