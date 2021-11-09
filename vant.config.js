module.exports = {
  name: 'blog',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/blog/',
      searchConfig: {},
    },
  },
  site: {
    title: 'blog',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    links: [
      {
        logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
        url: 'https://github.com/antmjs/blog',
      },
    ],
    nav: [
      {
        title: 'AntM组件库',
        items: [
          {
            path: 'home',
            title: '介绍',
            hideSimulator: true,
          },
        ],
      },
    ],
  },
};
