import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
    background: "none",
  },
  grow: {
    flexGrow: 1,
  },
  title: {},
  buttons: {
    marginLeft: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography
          className={classes.title}
          variant="h6"
          color="textPrimary"
          noWrap
        >
          Личный профиль
        </Typography>
        <Typography
          className={classes.title}
          variant="h6"
          color="textPrimary"
          noWrap
        >
          Главная/Личный профиль
        </Typography>
        <div className={classes.buttons}>
          <IconButton aria-label="notification-icon" color="inherit">
            <Badge badgeContent={0}>
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <Button
            variant="text"
            className={classes.button}
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            startIcon={<AccountCircle />}
          >
            <Typography color="textPrimary" variant="h6" noWrap>
              Иванова А.
            </Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
