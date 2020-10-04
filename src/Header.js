import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
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
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
  },
  breadcrumb: {
    color: "#fff",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "19px",
  },
  icon: {
    color: "#fff",
  },
  divider: {
    margin: "0 21px",
  },
  buttons: {
    marginLeft: "auto",
    marginTop: "21px",
    display: "flex",
    flexDirection: "row",
    width: "253px",
    height: "39px",
  },
  buttontext: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    color: "#fff",
    textTransform: "none",
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
        <Grid container>
          <Grid item>
            <Typography className={classes.title} variant="h6">
              ЛИЧНЫЙ ПРОФИЛЬ
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                className={classes.breadcrumb}
                href="/"
                onClick={handleClick}
              >
                Главная
              </Link>
              <Typography className={classes.breadcrumb}>
                Личный профиль
              </Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item className={classes.buttons}>
            <IconButton aria-label="notification-icon">
              <Badge badgeContent={0}>
                <NotificationsNoneIcon
                  fontSize="large"
                  className={classes.icon}
                />
              </Badge>
            </IconButton>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <Button
              variant="text"
              className={classes.button}
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              startIcon={<AccountCircle fontSize="large" />}
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
