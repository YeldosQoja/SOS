module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.ios.js', '.android.js'],
        root: ['./src'],
        aliases: {
          '@/components': './src/components',
        },
      },
    ],
  ],
};
