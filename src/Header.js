import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
    background: "none",
  },
  toolbar: {
    margin: "0 0 29px 0",
    padding: "0",
  },
  title: {
    color: "#fff",
    padding: "77px 20px 8px 0",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
  },
  breadcrumb: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "19px",
    "& a": {
      color: "#fff",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "19px",
    },
    "& p": {
      color: "#fff",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "19px",
    },
  },
  icon: {
    color: "#fff",
    margin: theme.spacing(0, 1),
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(0),
    },
  },
  accountIconButton: {
    "& .MuiButton-startIcon svg": {
      margin: theme.spacing(0, 1),
      fontSize: "40px",
      color: "#fff",
      [theme.breakpoints.only("xs")]: {
        margin: theme.spacing(0),
      },
    },
  },
  divider: {
    background: "#fff",
  },
  buttongroup: {
    color: "#fff",
  },
  buttons: {
    marginTop: "21px",
    display: "flex",
    flexDirection: "row",
    width: "253px",
    height: "39px",
    [theme.breakpoints.only("xs")]: {
      width: "auto",
    },
  },
  buttontext: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    color: "#fff",
    textTransform: "none",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography className={classes.title} variant="h6">
              ЛИЧНЫЙ ПРОФИЛЬ
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
              <Link href="/" onClick={handleClick}>
                Главная
              </Link>
              <Typography>Личный профиль</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item className={classes.buttons}>
            <IconButton aria-label="notification-icon" className={classes.icon}>
              <Badge badgeContent={0}>
                <NotificationsNoneIcon fontSize="large" />
              </Badge>
            </IconButton>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <Button
              variant="text"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              className={classes.accountIconButton}
              startIcon={
                <Avatar
                  alt="avatar-icon"
                  src="/static/images/icon.png"
                  className={classes.small}
                />
              }
            >
              <Hidden only="xs">
                <Typography className={classes.buttontext} variant="h6" noWrap>
                  Иванова А.
                </Typography>
              </Hidden>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withWidth()(Header);
