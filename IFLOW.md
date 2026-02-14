# IFLOW.md

本文件为 iFlow CLI 在此代码库中工作时提供指导。

## 项目概述

**jstw** 是一个原生 CSS 运行时库，提供类似 Tailwind 的 API，但生成原生 CSS 输出而非类名。它使用 TypeScript 编写，专为 JavaScript 应用中的动态运行时样式生成而设计。

## 命令

### 构建与开发

- `pnpm run dev` - 开发监听模式（使用 tsdown）
- `pnpm run build` - 构建项目
- `pnpm test` - 使用 vitest 运行测试

## 架构

### 核心设计

阅读基础设计 [`design.md`](design.md)，阅读核心概念 `core-concepts/*`

### 构建工具

使用 **tsdown** 作为构建工具，采用 ES 模块（package.json 中 `"type": "module"`）。主入口导出至 `./dist/index.mjs`。
