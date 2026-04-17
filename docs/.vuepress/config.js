import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'C++ 学习文档',
  description: '面向初学者与进阶开发者的 C++ 学习指南',

  theme: defaultTheme({
    repo: 'qingbingwei/qingbingwei.github.io',
    docsDir: 'docs',
    logo: '/images/cpp-logo.svg',
    navbar: [
      { text: '首页', link: '/' },
      { text: '学习路径', link: '/guide/introduction.html' },
      { text: '基础语法', link: '/basics/variables.html' },
      { text: 'STL', link: '/stl/overview.html' },
      { text: '进阶专题', link: '/advanced/memory-management.html' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '学习路径',
          collapsible: false,
          children: ['/guide/introduction.md'],
        },
      ],
      '/basics/': [
        {
          text: '基础语法',
          collapsible: false,
          children: [
            '/basics/variables.md',
            '/basics/control-flow.md',
            '/basics/functions-and-classes.md',
          ],
        },
      ],
      '/stl/': [
        {
          text: 'STL',
          collapsible: false,
          children: ['/stl/overview.md', '/stl/common-containers.md', '/stl/algorithms.md'],
        },
      ],
      '/advanced/': [
        {
          text: '进阶专题',
          collapsible: false,
          children: ['/advanced/memory-management.md', '/advanced/concurrency.md'],
        },
      ],
    },
    lastUpdated: true,
  }),

  bundler: viteBundler(),
})
