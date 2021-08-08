module.exports = {
    // publicPath: '/gitogram/dist'
    publicPath: process.env.NODE_ENV === 'production' ? '/gitogram/dist' : '/'
}