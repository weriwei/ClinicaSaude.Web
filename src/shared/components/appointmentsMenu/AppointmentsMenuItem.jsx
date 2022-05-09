import React, { useState } from "react";
import { Button, MenuItem, Popover } from "@material-ui/core";
import { useHistory } from "react-router";
import useStyles from "@constants/MenuItemsClasses";
import { routes } from "@constants/routes";

const AppointmentsMenuItem = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRegister = () => {
    setAnchorEl(null);
    history.push(routes.appointments.schedule);
  };

  const handleView = () => {
    setAnchorEl(null);
    history.push(routes.appointments.view);
  };

  return (
    <>
      <Button
        fullWidth
        size="large"
        className={classes.buttons}
        onClick={handleClick}
      >
        Consultas
      </Button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={handleRegister}
      >
        <MenuItem onClick={handleRegister}>Cadastrar</MenuItem>
        <MenuItem onClick={handleView}>Visualizar</MenuItem>
      </Popover>
    </>
  );
};

export default AppointmentsMenuItem;
