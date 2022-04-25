import React from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { genders } from "@constants/constants";

const GenderSelectInput = ({ setUserData, userData }) => {
  return (
    <TextField
      select
      fullWidth
      required
      variant="standard"
      label="Gênero"
      value={userData.gender}
      onChange={(event) =>
        setUserData({ ...userData, gender: event.target.value })
      }
      SelectProps={{
        MenuProps: {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        },
      }}
    >
      {genders.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default GenderSelectInput;
