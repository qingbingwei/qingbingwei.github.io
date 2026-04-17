# qingbingwei.github.io 分支说明

- `pre_release`：放 VuePress 源码（开发分支）
- `main`：只放编译产物（用于 GitHub Pages 展示）

## 开发流程

1. 切到 `pre_release` 分支进行文档开发
2. 提交并推送 `pre_release`
3. GitHub Actions 自动重新编译并把产物发布到 `main`

## 本地开发（在 pre_release）

```bash
npm ci
npm run docs:dev
```

## 本地构建（在 pre_release）

```bash
npm run docs:build
```

默认发布目录约定为：`docs/.vuepress/dist`
