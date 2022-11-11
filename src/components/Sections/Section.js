import React from "react";
import '../../Pages/About/About.scss';
import { accordionData } from '../../Utils/contentAccordion';
import Accordion from '../Accordion/Accordion';

function Section () {
  return (
    <div className="kasa-Section__about" >
        <div className="kasa-Section__accordion"  >
          <Accordion data={accordionData} defaultSection="Fiabilité"></Accordion>
        </div>
      </div>
  );
};

export default Section;