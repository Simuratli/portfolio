import React from "react";
import { Badge } from "../../components";
import { BadgeEnumType } from "../../types/global.types";
const ExperienceTable = () => {
  return (
    <div className="experienceTable">
      <div className="experienceTable__head">
        <div className="experienceTableHeadCard">
          <h1>12+</h1>
          <p>Projects</p>
        </div>
        <div className="experienceTableHeadCard">
          <h1>4+ years</h1>
          <p>Experience</p>
        </div>
      </div>
      <div className="experienceTable__content">
        <div className="experienceTableCard">
          <Badge type={BadgeEnumType.YELLOW}>1</Badge>
          <span>UDS Systems, Ukraine, Kiev - (2021 - present)</span>
          <h1>Middle Frontend (React) developer</h1>
          <p>
            As a react developer in UDS Systems company, we develop different
            Tools for MS Dynamics.
          </p>
        </div>
        <div className="experienceTableCard">
          <Badge type={BadgeEnumType.BLUE}>2</Badge>
          <span>Pragmatech, Azerbaijan, Baku</span>
          <h1>Frontend developer</h1>
          <p>
            Here I have mainly developed e-commerce projects and made support
            for available apps. And also teach students how to become a
            front-end developer.
          </p>
        </div>
        <div className="experienceTableCard">
          <Badge type={BadgeEnumType.RED}>3</Badge>
          <span>Freelance , Azerbaijan, Baku - (2018 - 2019)</span>
          <h1>Frontend developer</h1>
          <p>
            When I work freelance in Baku I made different websites for
            different costumers.
          </p>
        </div>
        {/*<div className="experienceTableCard">Card 4</div>*/}
      </div>
    </div>
  );
};

export default ExperienceTable;
