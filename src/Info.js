import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Info = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <AlternateEmailIcon color="primary" />
        </ListItemAvatar>
        <ListItemText primary="Ivanova@mail.ru" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <PhoneIcon color="primary.light" />
        </ListItemAvatar>
        <ListItemText primary="Укажите номер телефона" />
      </ListItem>
    </List>
  );
};

export default Info;
