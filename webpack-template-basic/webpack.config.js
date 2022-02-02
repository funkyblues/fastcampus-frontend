const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./js/main.js",
  output: {
    // path: path.resolve(__dirname, "public"),
    // filename: "app.js",
    clean: true,
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
      favicon: "./static/images/logo.jpg",
    }),
    new CopyPlugin({
      patterns: [
        // 우리가 만든 폴더 static
        // 어디에서 부터 복사해서 dist라는 폴더로 복사할 것인지에 대해 명시
        { from: "static" },
      ],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
