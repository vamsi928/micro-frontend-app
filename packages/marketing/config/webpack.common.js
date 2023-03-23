module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], //take jsx and convert to js
            plugins: ["@babel/plugin-transform-runtime"], //to provide additional features like async/await
          },
        },
      },
    ],
  },
};
