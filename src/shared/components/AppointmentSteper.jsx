import { Box, Step, StepLabel, Stepper } from "@material-ui/core";
import React from "react";
import { steps } from "@constants/steps";

const AppointmentSteper = ({ step }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={step}
        alternativeLabel
        sx={{ backgroundColor: "#5C4DB1" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default AppointmentSteper;
