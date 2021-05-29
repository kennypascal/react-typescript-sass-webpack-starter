module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        modules: 'auto',
        targets: { node: 'current' }
      }
    ]
  ],
  plugins: ['babel-plugin-syntax-dynamic-import']
};
