import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { PasswordLength } from "@constants/constants";
import { IconButton, InputAdornment, TextField } from "@mui/material";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      variant="outlined"
      type={showPassword ? "text" : "password"}
      required
      label="Senha"
      margin="dense"
      fullWidth
      inputProps={{
        maxLength: PasswordLength.max,
        minLength: PasswordLength.min,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
