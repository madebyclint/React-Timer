var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                sassLoader: {
                    includePaths: [
                        path.resolve(__dirname, './node_modules/foundation-sites/scss')
                    ]
                }
            }
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
            __dirname
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
            {test: /\.css$/, loader: 'style!css!'},
            {test: /\.scss$/, loader: 'style!css!sass!'}
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}
