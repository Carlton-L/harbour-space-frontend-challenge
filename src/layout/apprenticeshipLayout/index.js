import * as React from "react";
import { Global, css } from "@emotion/react";

import "../../fonts/typography.css";

import Header from "../../components/Header";
import BottomStickyBar from "../../components/BottomStickyBar";

const ApprenticeshipLayout = ({ children, data }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html {
            overflow-x: hidden;
          }
          body {
            margin: 0;
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <BottomStickyBar data={data} />
    </>
  );
};

export default ApprenticeshipLayout;
