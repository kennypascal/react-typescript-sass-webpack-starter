const path = require('path');

// your app's webpack.config.js
const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};

// module.exports = {
//   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
//   core: {
//     builder: 'webpack5'
//   },
//   webpackFinal: async (config, { configType }) => {
//     // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//     // You can change the configuration based on that.
//     // 'PRODUCTION' is used when building the static version of storybook.

//     // Make whatever fine-grained changes you need
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: ['style-loader', 'css-loader', 'sass-loader'],
//       include: path.resolve(__dirname, '../'),
//     });

//     console.log('KP: Test', config);
//     // Return the altered config
//     return config;
//   }
// };
