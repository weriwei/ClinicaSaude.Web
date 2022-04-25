import React, { useContext } from "react";
import { Context } from "@context/userContext";
import UserContent from "@components/UserContent";
import Router from "@src/Router";

export const contentsPage = Object.freeze({
  1: UserContent,
  2: Router,
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
