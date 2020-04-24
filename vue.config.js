module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/dynamic-marquee-playground/'
  : '/',

  "transpileDependencies": [
    "vuetify"
  ]
}