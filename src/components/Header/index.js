/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";

const Header = () => {
  return (
    <header
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItmes: "center",
        justifyContent: "space-between",
        position: "relative",
        height: ["66px", null, null, "74px", null],
        width: "100%",
        background: "primary",
        color: "background",
        py: 0,
        pl: ["20px", null, null, "30px", null],
        pr: ["20px", null, null, "85px", null],
      }}
    >
      header
    </header>
  );
};

export default Header;
