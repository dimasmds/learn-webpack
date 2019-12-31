const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/page/index/index.html",
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/page/detail/detail.html",
            filename: "./detail.html"
        })
    ]
};