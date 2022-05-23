import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import useStyles from "./patientCardClasses";

const PatientCard = ({ patient, onClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onClick}>
        <CardHeader
          avatar={
            <Avatar
              src="https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg"
              alt="logo"
            />
          }
          title={<Typography className={classes.title}>{patient}</Typography>}
        />
      </CardActionArea>
    </Card>
  );
};

export default PatientCard;
