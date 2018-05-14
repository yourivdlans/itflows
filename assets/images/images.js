const imagesContext = require.context(
  '!!file-loader?name=[name].[ext]!.',
  true,
  /\.(svg|png|jpg)$/
);
imagesContext.keys().forEach(imagesContext);
