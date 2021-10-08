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
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
            hideSimulator: true,
          },
          {
            path: 'quickstart',
            title: '快速上手',
            hideSimulator: true,
          },
        ],
      },
      // {
      //   title: '基础组件',
      //   items: [
      //     {
      //       path: 'demo-button',
      //       title: 'DemoButton 按钮',
      //     },
      //   ],
      // },
    ],
  },
};
