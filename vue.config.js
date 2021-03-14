module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Serba Untung Shop";
                return args;
            })
    }
}