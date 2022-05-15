/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";

const Card = (props) => {
  return (
    <div
      {...props}
      sx={{
        bg: "background",
        borderRadius: "4px",
        borderColor: "muted",
        borderWidth: "1px",
        borderStyle: "solid",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
