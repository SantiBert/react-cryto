import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardSection from "components/Card/CardSection.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Criptomonedas</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection key='btc' name="Bitcoin (BTC)" />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection key='btc' name="Ethereum (ETH)" />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection key='btc' name="Litecoin" />
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection key='btc' name="Tether (USDT)" />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection key='btc' name="DAI" />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection key='btc' name="Bitcoin Cash" />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
