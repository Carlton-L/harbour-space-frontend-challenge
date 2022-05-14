import * as React from "react";
import { Global, css } from "@emotion/react";
import Header from "../../components/Header";

const ApprenticeshipLayout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: sans-serif;
          }
        `}
      />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default ApprenticeshipLayout;
