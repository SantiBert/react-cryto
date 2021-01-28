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
            <CardSection code="btc" keyC="btc-c" keyV="btc-v" name="Bitcoin (BTC)" icon="fab fa-btc" />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection code="eth" keyC="eth-c" keyV="eth-v" name="Ethereum (ETH)" icon="fab fa-ethereum" />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection code="ltc" keyC="ltc-c" keyV="ltc-v" name="Litecoin" icon="fab fa-btc" />
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection code="ustd" keyC="ustd-c" keyV="ustd-v" name="Tether (USDT)" icon="fab fa-btc" />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection code="dai" keyC="dai-c" keyV="dai-v" name="DAI" icon="fab fa-btc" />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardSection code="bch" keyC="bcash-c" keyV="bcash-v" name="Bitcoin Cash" icon="fa fa-btc" />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
