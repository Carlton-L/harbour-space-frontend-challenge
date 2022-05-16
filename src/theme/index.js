// Theme Specification: https://theme-ui.com/theme-spec/
// NOTE: gatsby-config.js does not support ES6 modules, so you should use module.exports
module.exports = {
  colors: {
    background: "#ffffff",
    text: "#535353",
    primary: "#685dc5",
    secondary: "#4fa16c",
    accent: "#fbfbfb",
    muted: "#dadada",
  },
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 160],
  breakpoints: ["48em", "64em", "71.125em"],
  radii: [0, 4, 29],
  fontSizes: [],
  fonts: {
    body: "Apercu Pro",
    heading: "Apercu Pro",
    monospace: "Apercu Pro Mono",
  },
  fontWeights: {
    body: 300,
    heading: 500,
    bold: 500,
  },
  fontSizes: {
    // These font sizes don't work responsively, must be hard-coded in sx prop
    button: ["1em", "1.125em"],
    h1: ["2.188em", "3em"],
    h2: ["2.188em", "3em"],
    h3: ["1.125em", "1.375em"],
    subtitle: ["1.5em", "1.625em"],
    body1: ["1.125em", "1.375em"],
    body2: "1em",
  },
  text: {
    default: {
      color: "text",
      fontFamily: "body",
      lineHeight: "26px",
    },
    heading: {
      color: "primary",
      fontFamily: "heading",
    },
  },
  buttons: {
    primary: {
      fontSize: ["1em", "1.125em"],
      py: 4,
      px: 8,
      bg: "primary",
      width: "auto",
      borderRadius: 2,
      cursor: "pointer",
      transition: "filter 0.3s ease",
      display: "inline-block",
      "&:hover": {
        filter: "brightness(70%)",
      },
    },
    slider: {
      width: "48px",
      height: "48px",
      cursor: "pointer",
      bg: "background",
      borderColor: "muted",
      borderStyle: "solid",
      borderWidth: "1px",
      borderRadius: "48px",
      mx: "8px",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: "paragraph",
    },
  },
};
