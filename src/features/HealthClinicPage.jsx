import React, { useContext } from "react";
import { Context } from "@context/userContext";
import UserContent from "@components/UserContent";
import HomeClinicPage from "./homeClinicPage/HomeClinicPage";

export const contentsPage = Object.freeze({
  1: UserContent,
  2: HomeClinicPage,
});

const getStepContent = (stepIndex) => {
  const Component = contentsPage[stepIndex];

  return <Component />;
};

const HealthClinicPage = () => {
  const { getActiveStep } = useContext(Context);

  return getStepContent(getActiveStep());
};

export default HealthClinicPage;
