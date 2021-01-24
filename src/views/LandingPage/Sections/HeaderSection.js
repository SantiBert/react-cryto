import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Icon from "@material-ui/core/Icon";

import AccountCircle from "@material-ui/icons/AccountCircle";

// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HeaderSection(props) {
    const classes = useStyles();
    return (
        <Header
            color="transparent"
            fixed
            changeColorOnScroll={{
                height: 400,
                color: "white"
            }}
            rightLinks={
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <Button href="#pablo" className={classes.navLink + " " + classes.navLinkActive} onClick={e => e.preventDefault()} color="transparent">
                            <Icon className={classes.icons}>home</Icon> Home
              </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button href="#pablo" className={classes.navLink} onClick={e => e.preventDefault()} color="transparent"  >
                            <Icon className={classes.icons}>monetization_on</Icon> Exchange
              </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button href="#pablo" className={classes.navLink} onClick={e => e.preventDefault()} color="transparent" >
                            <AccountCircle className={classes.icons} /> Contacto
              </Button>
                    </ListItem>
                </List>
            }
        />
    );
}
