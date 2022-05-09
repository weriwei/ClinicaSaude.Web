import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  buttons: {
    textTransform: "none",
    margin: "5px",
    color: "#ffff",
    "&:hover": {
      border: `1px solid`,
    },
  },
}));

export default useStyles;
