/** @jsx jsx */
import * as React from "react";
import { jsx, Divider as ThemeUIDivider } from "theme-ui";

const Divider = (props) => {
  const width = props.variant === "short" ? "30px" : "auto";

  return <ThemeUIDivider {...props} sx={{ color: "muted", width: width }} />;
};

export default Divider;
