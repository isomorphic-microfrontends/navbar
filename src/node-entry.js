import React from "react";
import ReactDOMServer from "react-dom/server.js";
import Root from "./root.component.js";

export const serverRender = props => {
  return ReactDOMServer.renderToNodeStream(<Root {...props} />);
};

export const getResponseHeaders = props => {
  return {
    "x-navbar": 1
  };
};
