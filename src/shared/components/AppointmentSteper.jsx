import { Box, Step, StepButton, Stepper } from "@material-ui/core";
import React from "react";
import { steps } from "@constants/steps";

const AppointmentSteper = ({ step, onClick }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={onClick}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default AppointmentSteper;
