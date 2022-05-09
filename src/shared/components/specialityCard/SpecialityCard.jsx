import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useStyles from "./specialityCardClasses";

const SpecialityCard = ({ tittle, description }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Paper className={classes.Box} elevation={12}>
        <Grid
          container
          direction="row"
          alignContent="center"
          alignItems="center"
        >
          <Grid item xs={2}>
            <img
              src={
                "https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg"
              }
              alt="img-perfil"
              style={{ height: 80, borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs={10}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.userText}>{tittle}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.userText}>
                  {description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SpecialityCard;
