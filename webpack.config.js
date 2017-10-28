

module.exports = {

    entry:'./src/index.js',


    output:{
        filename:'./public/bundle.js'
    },


    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                include:/src/,
                loader:'babel-loader',
                query:{
                    presets:['react', 'es2015']
                }
            }
        ]
    }
};