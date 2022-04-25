import React, { useState } from "react";
import { Button, MenuItem, Popover } from "@material-ui/core";
import { useHistory } from "react-router";
import useStyles from "./dependentsMenuClasses";
import { routes } from "@constants/routes";

const DependentsMenuItem = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRegister = () => {
    setAnchorEl(null);
    history.push(routes.dependents.register);
  };

  const handleView = () => {
    setAnchorEl(null);
    history.push(routes.dependents.view);
  };

  return (
    <>
      <Button
        fullWidth
        size="large"
        className={classes.buttons}
        onClick={handleClick}
      >
        Dependentes
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

export default DependentsMenuItem;
