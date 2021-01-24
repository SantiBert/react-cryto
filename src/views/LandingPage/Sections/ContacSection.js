import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ContacSection() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.textCenter + " " + classes.sharingArea}>
                <GridContainer justify="center" >
                    <h3 className={classes.title}>Contacto</h3>
                </GridContainer>
                <GridContainer justify="center" >
                    <Button color="twitter" size="bg">
                        <i className={classes.socials + " fab fa-telegram"} /> Telegram
            </Button>
                    <Button color="twitter" size="bg">
                        <i className={classes.socials + " fab fa-telegram"} /> Telegram
            </Button>
                    <Button color="twitter" size="bg">
                        <i className={classes.socials + " fab fa-telegram"} />
                Telegram
            </Button>
                    <Button color="twitter" size="bg">
                        <i className={classes.socials + " fab fa-telegram"} /> Telegram
            </Button>
                </GridContainer>
            </div>
        </div>
    );
}