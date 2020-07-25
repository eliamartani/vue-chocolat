const { description, homepage } = require('../../package.json')

module.exports = {
  base: '/vue-chocolat/',
  title: 'vue-chocolat',
  description: `${description} 🐴`,
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Examples',
        link: '/examples/'
      }
    ],
    repo: homepage,
    search: false
  }
}
