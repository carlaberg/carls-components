module.exports = function(api) {
  api.cache(false);
  const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1"
        },
        useBuiltIns: "usage"
      }
    ],
    ["@babel/preset-react"]
  ];

  const plugins = [
    ["babel-plugin-styled-components"],
    ["@babel/plugin-proposal-class-properties"]
  ];

  const ignore = ["src/components/Playground"];

  return {
    presets,
    plugins,
    ignore
  };
};
