import { makeStyles } from "@material-ui/core";
import background from "@assets/background.png";

const useStyles = makeStyles(() => ({
  text: { fontFamily: "Comfortaa", fontSize: "70px", color: "white" },

  Title: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: "200px",
    paddingLeft: "50px",
  },

  container: {
    height: "90vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: "10px",
    alignItems: "center",
  },

  Box: {
    width: "90vw",
    height: "80vh",
    borderRadius: 20,
    backgroundColor: "#5C4DB1",
    backgroundImage: `url(${background})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  BoxTitle: {
    backgroundColor: "#5C4DB1",
    borderRadius: 20,
  },
}));

export default useStyles;
