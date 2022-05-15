/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";

import ApprenticeshipLayout from "../layout/apprenticeshipLayout";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";

import data from "../api/data.js";

// markup
const IndexPage = () => {
  return (
    <ApprenticeshipLayout>
      <div
        sx={{
          my: ["12.625em", "17.125em"],
          maxWidth: "80em",
          mx: "auto",
        }}
      >
        <IntroSection data={data} />
        <AboutSection data={data} />
      </div>
    </ApprenticeshipLayout>
  );
};

export default IndexPage;
