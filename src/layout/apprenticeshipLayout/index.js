/** @jsx jsx */
import * as React from "react";
import { Global, css, jsx } from "@emotion/react";

import "../../fonts/typography.css";

import Header from "../../components/Header";

const ApprenticeshipLayout = ({ children }) => {
  return (
    <div css={{ overflow: "hidden", position: "relative", height: "auto" }}>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
          }
        `}
      />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default ApprenticeshipLayout;
