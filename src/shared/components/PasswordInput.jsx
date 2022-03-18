import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { PasswordLength } from "@constants/constants";
import { IconButton, InputAdornment, TextField } from "@mui/material";

const PasswordInput = ({ userLoginData, setUserPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      variant="standard"
      type={showPassword ? "text" : "password"}
      required
      label="Senha"
      margin="dense"
      fullWidth
      value={userLoginData.password}
      onChange={(e) => {
        setUserPassword({ ...userLoginData, password: e.target.value });
      }}
      inputProps={{
        minLength: PasswordLength.min,
        maxLength: PasswordLength.max,
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
