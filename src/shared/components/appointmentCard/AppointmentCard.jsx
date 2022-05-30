import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import useStyles from "./appointmentCardClasses";
import * as moment from "moment";
import "moment/locale/pt-br";
import { getStatusLabel } from "@helper/appointmentHelper";

const AppointmentCard = ({ appointment }) => {
  const classes = useStyles();
  moment.locale("pt-br");

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            src="https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg"
            alt="logo"
          />
        }
        title={
          <Typography className={classes.title}>
            Dr(a).{appointment.name} - {appointment.speciality}
          </Typography>
        }
      />
      <CardContent>
        <Typography className={classes.userText}>
          {moment.utc(appointment.date).format("DD MMMM YYYY - HH:mm")} -{" "}
          {getStatusLabel(appointment?.status)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
