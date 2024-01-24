import React from "react";
import { Badge } from "../index";
import { ExperienceTableCardPropTypes } from "./ExperienceTableCard.types";
const ExperienceTableCard = ({
  number,
  experience,
  location,
  content,
  date,
  company,
  badgeType,
}: ExperienceTableCardPropTypes) => {
  return (
    <div className="experienceTableCard">
      <Badge type={badgeType}>{number}</Badge>
      <p className="experienceTableCard__info">
        {company},{" "}
        <span>
          {location} - {date}
        </span>
      </p>
      <h1 className="experienceTableCard__experience">{experience}</h1>
      <p className="experienceTableCard__content">{content}</p>
    </div>
  );
};
export default ExperienceTableCard;
