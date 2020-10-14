import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appTitle: {
    flexGrow: 1
  },
  sectionButtons: {
    display: "flex",
    marginRight: theme.spacing(2)
  }
}));

export default function NavBar(props) {
  const { title, themeChange } = props;
  const theme = useTheme();
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="home"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.root}>
            {title}
          </Typography>
          <div className={classes.sectionButtons}>
            <IconButton
              aria-label="darkMode"
              color="inherit"
              onClick={() => themeChange()}
            >
              {theme.palette.type !== "dark" ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
            <IconButton
              aria-label="github"
              color="inherit"
              target="_blank"
              href="https://github.com/isomorphic-microfrontends"
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
