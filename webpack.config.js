var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Timer: 'app/components/Timer.jsx',
            Countdown: 'app/components/Countdown.jsx',
            CountdownES6: 'app/components/CountdownES6.jsx',
            CountdownForm: 'app/components/CountdownForm.jsx',
            Clock: 'app/components/Clock.jsx',
            Controls: 'app/components/Controls.jsx',
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['.js', '.jsx'],
        modules: [
            __dirname,
            'node_modules'
        ]
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                include: [
                    path.join(__dirname, 'app', 'styles')
                ],
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, 'app', 'styles')
                ],
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}

