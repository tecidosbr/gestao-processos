const { throws } = require('assert');
const { webpackConfig } = require('direflow-scripts');
const DotenvFlow = require('dotenv-flow-webpack');

module.exports = (config, env) => {
  const direFlowConfig = webpackConfig({ 
    ...config,
    devServer: {
      port: 1234,
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          pathRewrite: { '^/api': '' }
        }
      }
    }
  },
    env);

  const { plugins = [], devServer = {} } = direFlowConfig;

  const mergedConfig = {
    ...direFlowConfig,
    plugins: [
      ...plugins,
      new DotenvFlow(),
    ],
  }

  return mergedConfig;
};
