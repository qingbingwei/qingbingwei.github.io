# qingbingwei.github.io

基于 VuePress 2 的学习笔记项目，有 CPP 与 Agent 两个专题。

## 分支策略

- pre_release：文档源码与 Markdown 内容
- main：GitHub Pages 使用的静态产物

## 开发流程

1. 在 pre_release 分支编写与更新文档。
2. 提交并推送源码。
3. GitHub Actions 自动构建并将 docs/.vuepress/dist 发布到 main。

## 本地开发

```bash
npm ci
npm run docs:dev
```

## 本地构建

```bash
npm run docs:build
```

构建输出目录：docs/.vuepress/dist

## 本地测试脚本

```bash
bash scripts/local-test.sh
```

可选：执行一次清缓存构建测试

```bash
bash scripts/local-test.sh clean-build
```

也可以通过 npm 脚本执行：

```bash
npm run test:local
```
