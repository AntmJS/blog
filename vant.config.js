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
        title: '博客',
        items: [
          {
            path: 'home',
            title: '简介',
            hideSimulator: true,
          },
        ],
      },
      {
        title: '前端工程建设',
        items: [
          {
            path: 'construction-home',
            title: '概览',
            hideSimulator: true,
          },
        ],
      },
    ],
  },
};
