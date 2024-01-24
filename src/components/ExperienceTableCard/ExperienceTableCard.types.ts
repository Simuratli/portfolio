import { BadgeEnumType } from "../../types/global.types";
export interface ExperienceTableCardPropTypes {
  number: number;
  company: string;
  content: string;
  experience: string;
  location: string;
  date: string;
  badgeType: BadgeEnumType;
}
