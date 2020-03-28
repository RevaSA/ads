const publicPath = process.env.NODE_ENV === 'production' ? '/ads/' : '/'

console.log(publicPath);

module.exports = {
    publicPath,
    transpileDependencies: [
        'vuetify',
    ],
}
