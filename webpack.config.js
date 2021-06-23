const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    optimization: {
        minimize: false,
    },
    

    // bundling mode
    mode: 'production',

    // entry files
    entry: './src/index.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            chunks: ['index'],
            minify: {
                collapseWhitespace: true, 
                removeComments: true 
            },
        }),
    ]
};