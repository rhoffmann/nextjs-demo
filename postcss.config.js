const purgeCss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production' ? [purgeCss] : []),
    'postcss-preset-env',
  ],
};
