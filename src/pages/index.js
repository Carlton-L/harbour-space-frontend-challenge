/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";

import ApprenticeshipLayout from "../layout/apprenticeshipLayout";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import QuotesSection from "../components/QuotesSection";

import data from "../api/data.js";

// markup
const IndexPage = () => {
  return (
    <ApprenticeshipLayout data={data}>
      <div
        sx={{
          my: ["12.625em", "17.125em"],
          maxWidth: "80em",
          mx: "auto",
        }}
      >
        <IntroSection data={data} />
        <AboutSection data={data} />
        <StatsSection data={data} />
        <QuotesSection data={data} />
      </div>
    </ApprenticeshipLayout>
  );
};

export default IndexPage;
