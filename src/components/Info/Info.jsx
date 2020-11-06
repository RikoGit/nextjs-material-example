import React from "react";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import PhoneIcon from "@material-ui/icons/Phone";

import fields from "../../fields.js";
import useStyles from "./styles.js";

const Info = ({ email, phone }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <List className={classes.list}>
        <ListItem className={classes.item}>
          <ListItemAvatar className={classes.avatar}>
            <AlternateEmailIcon className={classes.icon} fontSize="large" />
          </ListItemAvatar>
          <ListItemText
            primary={
              email ||
              fields.find((field) => field.name === "email").placeholder
            }
            variant="h4"
            className={classes.text}
          />
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem className={classes.item}>
          <ListItemAvatar className={classes.avatar}>
            <PhoneIcon className={classes.icon} fontSize="large" />
          </ListItemAvatar>
          <ListItemText
            primary={
              phone ||
              fields.find((field) => field.name === "phone").placeholder
            }
            className={classes.text}
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Info;
