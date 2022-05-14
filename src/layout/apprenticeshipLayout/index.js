import * as React from "react";
import { Global, css } from "@emotion/react";

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
      <main>{children}</main>
    </>
  );
};

export default ApprenticeshipLayout;
