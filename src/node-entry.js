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
  const addFont = `<link  rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                  />`;
  const assets = `${addFont}<style id="jss-server-side">${css}</style>`;
  return { content: htmlStream, assets };
}
