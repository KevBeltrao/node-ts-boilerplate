module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@customTypes': './src/customTypes',
      },
    }],
  ],
  ignore: [
    '**/*.test.js',
  ],
};
