import React from "react";
import ReactDOMServer from "react-dom/server.js";
import Root from "./root.component.js";
import { ServerStyleSheets } from "@material-ui/core/styles";

export const getResponseHeaders = props => {
  return {
    "x-navbar": 1
  };
};

export function serverRender(props) {
  const sheets = new ServerStyleSheets();
  const content = sheets.collect(<Root {...props} />);
  const htmlStream = ReactDOMServer.renderToString(content);

  // Grab the CSS from the sheets.
  const css = sheets.toString();

  return { htmlStream, sheets: css };
}
