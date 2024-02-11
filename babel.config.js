module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
        ],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@types': './src/types',
          '@navigation': './src/navigation',
          '@slices': './src/slices',
        },
      },
    ],
  ],
};
