const path = require("path");

module.exports = {
  entry: {
    background: path.resolve(__dirname, "src/background/background.ts"),
    contentScript: path.resolve(__dirname, "src/content/contentScript.ts"),
    popup: path.resolve(__dirname, "src/popup/popup.tsx"),
    options: path.resolve(__dirname, "src/options/options.tsx")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  },
  devtool: "source-map",
  mode: "development"
};
