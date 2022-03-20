import React from "react";
import useStyles from "./genericModalClasses";
import PropTypes from "prop-types";
import { Modal, Grid, Box, Typography, Paper, Button } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import Error from "@mui/icons-material/Warning";
import Success from "@mui/icons-material/CheckCircle";

const GenericModal = ({ open, onClose, title, buttons, type }) => {
  const classes = useStyles();

  const closeModal = () => {
    onClose(false);
  };

  return (
    <Modal open={open}>
      <Paper className={classes.paper} elevation={12}>
        <CloseIcon className={classes.iconButtonExit} onClick={closeModal} />
        <Grid item id="modal-title">
          <Grid
            item
            container
            className={classes.imageWrapper}
            justifyContent="center"
            alignItems="center"
          >
            {type === "error" ? (
              <Error fontSize="large" />
            ) : (
              <Success fontSize="large" />
            )}
          </Grid>
          <Typography
            id="modal-description"
            className={classes.message}
            align="center"
            variant="h5"
          >
            {title}
          </Typography>
          <Box display="flex" justifyContent="center" gridGap={20}>
            {buttons.map((button) => (
              <Button
                key={button.id.toString()}
                onClick={button.onClick}
                color={button.color}
                variant={button.variant}
                className={classes.buttons}
              >
                {button.text}
              </Button>
            ))}
          </Box>
        </Grid>
      </Paper>
    </Modal>
  );
};

GenericModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "success"]).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      oncClick: PropTypes.func.isRequired,
      color: PropTypes.string.isRequired,
      variant: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

export default GenericModal;
