const path = require("path");
const postCSSPlugins = [
    require("postcss-import"), 
    require('postcss-simple-vars'), 
    require('postcss-nested'), 
    require("autoprefixer"),
    require("postcss-mixins")
];

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    static: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    watchFiles: ["./app/**/*.html"],
    // onBeforeSetupMiddleware: function(app, server) {
    //     server._watch("./app/**/*.html");
    //   },
    host: '0.0.0.0'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", {
          loader: "postcss-loader",
          options: {
            postcssOptions: { plugins: postCSSPlugins },
          },
        }],
      },
    ],
  },
};

// const path = require("path");
// const postCSSPlugins = [require("postcss-import"), require('postcss-simple-vars'), require('postcss-nested'), require("autoprefixer")]

// module.exports = {
//     entry: "./app/assets/scripts/App.js",
//     output: {
//         filename: "bundled.js",
//         path: path.resolve(__dirname, "app")
//     },
//     devServer: {
//         static: {
//             directory: path.join(__dirname, "app"), // Specify the content directory
//         },
//         hot: true,
//         port: 3000,
//         onBeforeSetupMiddleware: function (devServer) {
//             devServer._watch("./app/**/*.html");
//         }
//     },
//     mode: "development",  
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ['style-loader','css-loader', {
//                     loader: 'postcss-loader', options: {
//                         postcssOptions: {plugins: postCSSPlugins}
//                     }
//                 }]
//             }
//         ]
//     }
// }
