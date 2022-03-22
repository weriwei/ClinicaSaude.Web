import React from "react";
import { TextField } from "@material-ui/core";
import baseStyles from "@constants/baseStyles";

const EmailInput = ({ userLoginData, setUserLogin }) => {
  return (
    <TextField
      label="E-mail"
      variant="standard"
      type="email"
      required
      fullWidth
      value={userLoginData.email}
      onChange={(e) =>
        setUserLogin({ ...userLoginData, email: e.target.value })
      }
      InputLabelProps={{
        style: baseStyles.style,
      }}
    />
  );
};

export default EmailInput;
