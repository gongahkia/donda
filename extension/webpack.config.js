const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    background: path.resolve(__dirname, "src/background/background.ts"),
    contentScript: path.resolve(__dirname, "src/content/contentScript.ts"),
    popup: path.resolve(__dirname, "src/popup/PopupApp.tsx"),
    options: path.resolve(__dirname, "src/options/OptionsApp.tsx")
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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "manifest.json", to: "manifest.json" },
        { from: "src/popup/popup.html", to: "popup.html" },
        { from: "src/options/options.html", to: "options.html" }
      ]
    })
  ],
  devtool: "source-map",
  mode: "development"
};
