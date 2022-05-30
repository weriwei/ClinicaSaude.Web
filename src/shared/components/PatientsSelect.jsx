import React from "react";
import { MenuItem, TextField } from "@material-ui/core";

const PatientsSelect = ({ patientes, setSelectedPatient }) => {
  return (
    <TextField
      select
      fullWidth
      required
      variant="filled"
      margin="dense"
      style={{ backgroundColor: "#ffff" }}
      value={patientes.nome}
      onChange={(event) => setSelectedPatient(event.target.value)}
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
      {patientes.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          {option.nome}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default PatientsSelect;
