import React from "react";
import './Section.scss';
import Accordion from '../../components/Accordion/Accordion';
import { accordionData } from '../../Utils/contentAccordion';

function Section () {
  return (
    <div>
      <div className="kasa-accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={[content]} />
        ))}
      </div>
    </div>
  );
};

export default Section;