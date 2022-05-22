import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import useStyles from "./specialityCardClasses";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SpecialityCard = ({ title, description, onClick }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar
              src="https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg"
              alt="logo"
              onClick={onClick}
            />
          }
          title={
            <Typography onClick={onClick} className={classes.title}>
              {title}
            </Typography>
          }
          action={
            <IconButton
              expand={expanded}
              onClick={() => setExpanded(!expanded)}
            >
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className={classes.userText}>{description}</Typography>
          </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  );
};

export default SpecialityCard;
