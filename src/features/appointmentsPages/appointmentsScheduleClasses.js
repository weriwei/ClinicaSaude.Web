import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    height: "90vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "0px",
  },

  box: {
    width: "90vw",
    height: "75vh",
    borderRadius: 30,
    backgroundColor: "#5c4db1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
