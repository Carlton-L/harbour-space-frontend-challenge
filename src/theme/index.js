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
  space: [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 160],
  breakpoints: ["23.4375em", "48em", "63em", "64em", "71.125em"],
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
  text: {
    default: {
      color: "text",
      fontFamily: "body",
    },
    heading: {
      color: "primary",
      fontFamily: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: "paragraph",
    },
  },
};
