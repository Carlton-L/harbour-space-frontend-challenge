/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import logo from "../../images/hs_logo.svg";

const Header = () => {
  return (
    <div
      sx={{
        position: "fixed",
        top: 0,
        height: ["66px", null, null, "74px", null],
        width: "100%",
        zIndex: "999",
      }}
    >
      <header
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItmes: "center",
          justifyContent: "space-between",
          position: "relative",
          height: "100%",
          width: "100vw",
          background: "primary",
          color: "background",
          py: 0,
          pl: ["20px", null, null, "30px", null],
          paddingRight: ["20px", null, null, "85px", null],
        }}
      >
        <div
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a href="https://harbour.space">
            {/* display: block removes the unwanted height added to the <a> tag from the text baseline */}
            <img
              src={logo}
              alt="Harbour.Space logo"
              sx={{ display: "block" }}
            />
          </a>
        </div>
        <div
          sx={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            sx={{
              position: "absolute",
              top: "10px",
              background: "secondary",
              color: "background",
              width: ["60px", "80px", null, "100px", null],
              height: ["60px", "80px", null, "100px", null],
              borderRadius: "100px",
              transition: "transform 0.5s ease",
              textAlign: "center",
              "&:hover": {
                transform: "scale(1.1)",
              },
              "&:not(:hover)": {
                transform: "scale(1)",
              },
            }}
          >
            <div
              sx={{
                display: "flex",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Apply <br /> Now
            </div>
          </div>
          <div sx={{ my: "auto", alignSelf: "flex-end" }}>Menu</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
