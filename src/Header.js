import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Личный профиль
        </Typography>
        <Typography className={classes.title} variant="h6" noWrap>
          Главная/Личный профиль
        </Typography>
        <div className={classes.sectionDesktop}>
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
            Иванова А.
          </Button>
        </div>
      </Toolbar>
    </>
  );
};

export default Header;
