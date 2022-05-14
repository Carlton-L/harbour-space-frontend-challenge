import * as React from "react";
import { Global, css } from "@emotion/react";
import Header from "../../components/Header";

const ApprenticeshipLayout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default ApprenticeshipLayout;
