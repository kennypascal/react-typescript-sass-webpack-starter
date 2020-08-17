const custom = require("../webpack.config.js");

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    "@storybook/addon-knobs/register",
  ],
  webpackFinal: (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      ...custom.resolve.modules,
    ];
    config.resolve.extensions = [
      ...(config.resolve.extensions || []),
      ...custom.resolve.extensions,
    ];
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
