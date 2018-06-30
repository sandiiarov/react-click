const envOptions = {
  modules: false,
  loose: true,
  useBuiltIns: 'usage',
  targets: { browsers: ['defaults'] },
};

const presets = [
  [require.resolve('@babel/preset-env'), envOptions],
  require.resolve('@babel/preset-flow'),
  [require.resolve('@babel/preset-react'), { development: true }],
];

const plugins = [require.resolve('@babel/plugin-proposal-class-properties')];

module.exports = {
  presets,
  plugins,
};
