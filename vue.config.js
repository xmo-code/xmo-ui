const path = require("path");

//开启gzip压缩
const compressionWebpackPlugin = require("compression-webpack-plugin");
//需要压缩的文件类型
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
//打包分析
const bundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const IS_PROD = ["production", "prod"].includes(process.env.MODE_ENV);
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  //公共路径
  publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./",

  //相对于打包路径index.html的路径
  indexPath: "index.html",

  //生产环境构建文件的目录
  outputDir: process.env.outputDir || "dist",

  //相对于outputDir的静态资源（js,css,img,font)目录
  assetsDir: "static",

  //是否在开发环境下通过eslint-loader在每次保存时检测代码
  lintOnSave: true,

  //是否使用包含运行时编译器的vue构建版本
  runtimeCompiler: true,

  //生产环境的source map
  productionSourceMap: !IS_PROD,

  //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
  parallel: require("os").cpus().length > 1,

  // pages: {
  //   index: {
  //     entry: "./src/components/index.js",
  //     template: "public/index.html",
  //     filename: "index.html",
  //     title: "XMO-UI"
  //   }
  // },
  //向pwa插件传递选项
  pwa: {},

  chainWebpack: config => {
    //修复热更新失败
    config.resolve.symlinks(true);
    //如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin("html").tap(args => {
      //修复 lazy loading routes 错误
      args[0].chunksSortMode = "none";
      return args;
    });
    //添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@router", resolve("src/router"))
      .set("@style", resolve("src/styles"))
      .set("@store", resolve("src/store"));

    //压缩图片
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: [0.65, 0.9], speed: 4 },
        gifsicle: { interlaced: false },
        webp: { quality: 75 }
      });
    //打包分析
    if (IS_PROD) {
      config.plugin("webpack-report").use(bundleAnalyzerPlugin, [
        {
          analyzerMode: "static"
        }
      ]);
    }
  },

  configureWebpack: config => {
    //开启gzip压缩
    const plugins = [];
    if (IS_PROD) {
      plugins.push(
        new compressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    config.plugins = [...config.plugins, ...plugins];
  },

  devServer: {
    //显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    host: "localhost",
    port: 8080,
    https: false,
    open: false,
    hotOnly: true,
    // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
    proxy: {
      //配置多个跨域
      "/api": {
        target: "http://172.11.11.11:7071",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/api": "/"
        }
      },
      "/api2": {
        target: "http://172.12.12.12:2018",
        changeOrigin: true,
        //ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/api2": "/"
        }
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "@style/index.scss")]
    }
  }
};
