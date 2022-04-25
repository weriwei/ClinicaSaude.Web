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
    backgroundColor: "#FBFBFB",
    "&:hover": {
      border: `2px solid`,
      borderColor: "#5C4DB1",
    },
  },

  iconButtonExit: {
    right: "0",
    position: "fixed",
    margin: "-5px 3px",
    cursor: "pointer",
    color: "#d60718",
    "&:hover": {
      border: `1px solid`,
    },
  },

  imageWrapper: {
    marginTop: "20px",
    marginBottom: "10px",
  },

  button0: {
    padding: "15px",
    fontSize: "14px",
    fontFamily: "Comfortaa",
    textTransform: "none",
    borderRadius: "20px",
    backgroundColor: "#d60718",
    "&:hover": {
      backgroundColor: "#d60718",
    },
  },

  button1: {
    padding: "15px",
    fontSize: "14px",
    fontFamily: "Comfortaa",
    textTransform: "none",
    borderRadius: "20px",
    backgroundColor: "#5C4DB1",
    "&:hover": {
      backgroundColor: "5C4DB1",
    },
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
