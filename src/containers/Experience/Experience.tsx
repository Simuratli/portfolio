import React from "react";
import { Header } from "../../components";
import { HeaderType } from "../../types/global.types";
import Smile from "../../assets/images/smile.svg";
import { ExperienceTable } from "../../containers";
const Experience = () => {
  return (
    <section className="experience">
      <div className="experience__header">
        <Header type={HeaderType.MEDIUM}>
          Lets talk about <br />
          my experience and projects
        </Header>
        <img src={Smile} alt="smile" />
      </div>
      <div className="experience__detail">
        <ExperienceTable />
      </div>
    </section>
  );
};

export default Experience;
