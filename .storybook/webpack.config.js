// Ref: https://www.bookstack.cn/read/Storybook-v5.1/cb9be3a33cbe8ff9.md
// awesome-typescript-loader config
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      // {
      //   loader: require.resolve('react-docgen-typescript-loader'),
      // },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
  };

// ref: https://github.com/johot/storybook4-cra2-typescript-react-docgen-typescript-demo/blob/master/.storybook/webpack.config.js
// babel-loader setup
// TODO: Get the babel-loader config working
  // module.exports = (_baseConfig, _env, config) => {
  //   config.module.rules.push({
  //     test: /\.tsx?$/,
  //     use: [
  //       {
  //         loader: require.resolve("babel-loader"),
  //         options: {
  //         //  presets: [require.resolve("babel-preset-react-app")]
  //         }
  //       },
  //       // require.resolve("react-docgen-typescript-loader")
  //     ]
  //   });
  
  //   config.resolve.extensions.push(".ts", ".tsx");
  
  //   return config;
  // };