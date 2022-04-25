import { genders } from "@constants/constants";

export const getGenderLabel = (gender) =>
  genders.find((g) => g.value === gender.toLowerCase()).label;
