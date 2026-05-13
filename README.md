# JLU Cool 2026

`jlu-cool2026.bond` 的单页纪念站项目，使用 Vite + React + Tailwind CSS 构建。

## 本地运行

```bash
npm install
npm run dev
```

开发服务器默认由 Vite 启动，终端会显示本地访问地址。

## 生产构建

```bash
npm run build
```

构建产物会生成在 `dist` 目录。

## Vercel 部署

在 Vercel 新建项目时使用以下配置：

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

部署成功后，在 Vercel 项目的 Domains 设置中绑定：

- `jlu-cool2026.bond`
- `www.jlu-cool2026.bond`（可选）

DNS 记录请以 Vercel 页面实际提示为准，再到 NicNames 的 DNS 管理页面填写。
