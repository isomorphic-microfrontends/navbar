import React from "react";
import ReactDOMServer from "react-dom/server.js";
import Root from "./root.component.js";
import theme from "./theme";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";

export const getResponseHeaders = props => {
  return {
    "x-navbar": 1
  };
};

export function serverRender(props) {
  const sheets = new ServerStyleSheets();
  const htmlStream = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <Root {...props} />
      </ThemeProvider>
    )
  );

  // Grab the CSS from the sheets.
  const css = sheets.toString();

  return { htmlStream, sheets: css };
}
