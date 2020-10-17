const path=require('path');
const webpack=require('webpack');

module.exports={
  entry:{
    'xmo-ui':'./src/components/index.js'
  },
  output:{
    path:path.resolve(__dirname,'../package'),
    publicPath:'/package/',
    library:'xmo-ui',
    libraryTarget:'umd',
    umdNamedDefine:true
  }
}
