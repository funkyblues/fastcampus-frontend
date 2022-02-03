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

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        // 순서 중요.
      },
      {
        // .js로 끝나는 모듈/파일들을 찾고 test속성으로 내용 매칭
        test: /\.js$/,
        // 매칭한 부분들에 패키지를 사용할 것임 : babel-loader

        // @babel로 시작하는 여러 패키지들을 설치해서 babel동작환경을 만들었는데,
        // 그것을 webpack이 해석하려면 매개체로 babel-loader가 필요함.
        // 결국 main.js와 같이 .js로 끝나는 파일들을 webpack에서 babel-loader로 읽어들여서
        // babel이 적용되도록 함.

        // npm i -D babel-loader
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
      favicon: "./static/images/logo.jpg",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
