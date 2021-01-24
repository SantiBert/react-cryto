import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import ContacSection from "./Sections/ContacSection.js";
import HeaderSection from "./Sections/HeaderSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  return (
    <div>
      <HeaderSection />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Titulo</h1>
              <h4>
                Nulla urna odio, tempus vel dolor. Mauris sem nisi, mattis suscipit aliquam sit amet, fringilla at arcu. Suspendisse ut lorem purus.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ContacSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
