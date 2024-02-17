import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { HeaderType } from "../../types/global.types";
import SunIcon from "../../assets/sun";
import Line from "../../assets/line";
import { getProjects, urlFor } from "../../client/client";
import { ProjectPropType } from "../../client/api.types";
import { useNavigate } from "react-router-dom";

import { PortfolioCard } from "../../components";

const Portfolio = ({ small }: { small?: boolean }) => {
  const [projectData, setProjectData] = useState<ProjectPropType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProjects().then((response: ProjectPropType[]) => {
      setProjectData(response);
    });
  }, []);

  return (
    <section className="portfolioSection">
      <div className="portfolioSection__header">
        <Header type={HeaderType.BIG}>
          <span className="portfolioSection__header__text">
            My Portfolio
            <Line className="portfolioSection__header__line" />
          </span>
          <SunIcon className="portfolioSection__header__sun" />
        </Header>
      </div>
      <div className="portfolioSection__content">
        {projectData.map((project, index) => {
          return (
            index < (small ? 4 : projectData.length) && (
              <PortfolioCard
                title={project.title}
                description={project.description}
                url={project.url}
                image={urlFor(project.mainImage).url()}
                key={project._id}
              />
            )
          );
        })}
      </div>
      {small && (
        <div className="portfolioSection__viewMore">
          <button
            onClick={() => {
              navigate("/portfolio");
            }}
          >
            View more
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
