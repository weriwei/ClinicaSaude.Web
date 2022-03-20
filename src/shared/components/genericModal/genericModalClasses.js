import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    justifyContent: "center",
    padding: "10px 30px",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    "&:hover": {
      border: `2px solid`,
      borderColor: theme.palette.primary.main,
    },
  },

  iconButtonExit: {
    right: "0",
    position: "fixed",
    margin: "-5px 3px",
    cursor: "pointer",
    color: "red",
    "&:hover": {
      border: `2px solid`,
    },
  },

  imageWrapper: {
    marginTop: "20px",
    marginBottom: "10px",
  },

  buttons: {
    padding: "15px",
  },

  containerButton: {
    paddingBottom: "5px",
  },

  message: {
    marginTop: 10,
    marginBottom: 30,
  },
}));

export default useStyles;
