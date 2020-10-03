import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 0 24px 0",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.boxShadow,
    borderRadius: theme.palette.borderRadius,
  },
  icon: {
    color: theme.palette.primary.light,
  },
  divider: {
    border: "1px solid #CAE7FE",
  },
  text: {
    "& > span": {
      fontFamily: "Open Sans",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "25px",
      color: "#313131",
    },
  },
}));

const Info = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <AlternateEmailIcon className={classes.icon} />
          </ListItemAvatar>
          <ListItemText primary="Ivanova@mail.ru" className={classes.text} />
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem>
          <ListItemAvatar>
            <PhoneIcon className={classes.icon} />
          </ListItemAvatar>
          <ListItemText
            primary="Укажите номер телефона"
            className={classes.text}
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Info;
