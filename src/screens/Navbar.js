import React, { useState } from "react";
import { Link } from "react-router-dom";
import RightMenu from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  IconButton,
  ListItem,
  ListItemIcon,
  List,
  Divider,
  Typography,
  Box,
  ListItemText,
} from "@material-ui/core";
import { Home, ContactMail } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import ExploreIcon from "@material-ui/icons/Explore";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  menuContainer: {
    width: 250,
    background: "white",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  listItem: {
    color: "black",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <ExploreIcon />,
    listText: "Map",
    listPath: "/map-tracker",
  },
  {
    listIcon: <ContactMail />,
    listText: "About",
    listPath: "/about",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSideMenu = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuContainer}
      component="div"
      onClick={toggleSideMenu(slider, false)}
    >
      <Divider />
      <List>
        {menuItems.map((IsItem, key) => (
          <ListItem button key={key} component={Link} to={IsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {IsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={IsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="sticky" style={{ background: "#4267b2" }}>
          <Toolbar>
            <IconButton onClick={toggleSideMenu("right", true)}>
              <MenuIcon style={{ color: "#f08113" }} />
            </IconButton>
            <Typography
              button
              component={Link}
              to={"/"}
              variant="h5"
              style={{ color: "white", textDecoration: "none" }}
            >
              COVID-19 LiveStats
            </Typography>
            <RightMenu
              open={state.right}
              onClose={toggleSideMenu("right", false)}
            >
              {sideList("right")}
            </RightMenu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
