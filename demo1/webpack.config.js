// var path=require("path");
module.exports={
    devtool:"eval-source-map",
    entry: __dirname+"/app/main.js",
    output:{
        path: __dirname+"/public",
        // publicPath:"/assets/",
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.json$/,
                loader:'json-loader'
            }
        ]
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}


