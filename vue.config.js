module.exports = {
  
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
{
  [
    '~plugins/maps.js'
  ]
}