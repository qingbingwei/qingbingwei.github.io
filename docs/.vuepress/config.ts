import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'CPP 与 Agent 学习笔记',
  description: '仅保留 CPP 和 Agent 两个学习专题。',
  base: '/',
  theme: defaultTheme({
    repo: 'qingbingwei/qingbingwei.github.io',
    docsDir: 'docs',
    navbar: [
      { text: '首页', link: '/' },
      { text: 'CPP', link: '/cpp/' },
      { text: 'Agent', link: '/agent/' },
    ],
    sidebar: {
      '/cpp/': [
        {
          text: 'CPP',
          children: [''],
        },
      ],
      '/agent/': [
        {
          text: 'Agent',
          children: [''],
        },
      ],
    },
    editLink: false,
    lastUpdated: false,
  }),
  bundler: viteBundler(),
})
