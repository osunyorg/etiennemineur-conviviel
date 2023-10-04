/* eslint-disable no-undef */
var devPlugins = {},
    productionPlugins = {
        autoprefixer: {}
    };

module.exports = {
    plugins: process.env.HUGO_ENVIRONMENT === 'production' ? productionPlugins : devPlugins
};
