const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "isomorphic-mf",
    projectName: "navbar",
    webpackConfigEnv
  });

  const serverConfig = singleSpaDefaults({
    orgName: "isomorphic-mf",
    projectName: "navbar",
    webpackConfigEnv
  });

  defaultConfig.plugins = defaultConfig.plugins.filter(
    p => p.constructor.name !== "CleanWebpackPlugin"
  );
  serverConfig.plugins = serverConfig.plugins.filter(
    p => p.constructor.name !== "CleanWebpackPlugin"
  );

  return [
    webpackMerge.smart(defaultConfig, {}),
    webpackMerge.smart(serverConfig, {
      // modify the webpack config however you'd like to by adding to this object
      target: "node",
      mode: "development",
      entry: path.resolve(process.cwd(), "src/node-entry.js"),
      output: {
        library: "mf",
        libraryTarget: "var",
        filename: "server.mjs"
      },
      externals: defaultConfig.externals.concat(/react-dom\/.+/),
      plugins: [
        new EsmWebpackPlugin({
          moduleExternals: true
        })
      ]
    })
  ];
};
