import React from "react";
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

import useStyles from "./styles.js";

const Header = ({ name }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography className={classes.title} variant="h4">
              ЛИЧНЫЙ ПРОФИЛЬ
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
              <Link href="#">Главная</Link>
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
                  {name}
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
