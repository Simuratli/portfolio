import React from "react";
import { ExperienceTableCard } from "../../components";
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
        <ExperienceTableCard
          number={1}
          experience={"Middle Frontend (React) developer"}
          company="UDS Systems"
          content="As a react developer in UDS Systems company, we develop different Tools for MS Dynamics."
          date="(2021 - present)"
          location="Ukraine, Kiev"
          badgeType={BadgeEnumType.RED}
        />
        <ExperienceTableCard
          number={2}
          experience={"Frontend (UI) developer"}
          company="Pragmatech"
          content="Here I have mainly developed e-commerce projects and made support for available apps."
          date="(2019 - 2020)"
          location="Azerbaijan, Baku"
          badgeType={BadgeEnumType.BLUE}
        />
        <ExperienceTableCard
          number={3}
          experience={"Frontend developer"}
          company="Freelance"
          content="When I work freelance in Baku I made different websites for different costumers."
          date="(2018 - 2019)"
          location="Azerbaijan, Baku"
          badgeType={BadgeEnumType.YELLOW}
        />
      </div>
    </div>
  );
};

export default ExperienceTable;
