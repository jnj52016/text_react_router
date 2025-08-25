# React Router v7 + React 19 + Vite 7 示例

本项目基于 Vite 构建，使用 React 19 与 React Router 7，演示基础路由、Loader 数据加载与错误边界。

- 入口挂载在 [`index.html`](index.html) 的根节点中，通过 [`src/main.jsx`](src/main.jsx) 渲染 [`router`](src/router.jsx)：
  - [`src/main.jsx`](src/main.jsx) 使用 `<RouterProvider router={router} />` 提供路由上下文
  - 路由表定义在 [`src/router.jsx`](src/router.jsx)

## 运行

前置条件：
- Node.js ≥ 20.19.0（Vite 7 要求）
- pnpm（已在 [`package.json`](package.json) 中声明）

常用命令：
```sh
pnpm i
pnpm dev        # 启动开发服务
pnpm build      # 生产构建
pnpm preview    # 预览构建产物
pnpm lint       # 代码检查
```

## 目录结构

```text
ReactRouter_test/
  ├─ index.html
  ├─ vite.config.js
  ├─ eslint.config.js
  └─ src/
      ├─ main.jsx
      ├─ router.jsx
      └─ routers/
          ├─ Root.jsx
          ├─ Home.jsx
          ├─ About.jsx
          └─ Error.jsx
```

## 路由说明

路由通过 [`router`](src/router.jsx) 使用 `createBrowserRouter` 创建，结构如下：

- 根路由
  - element: [`Root`](src/routers/Root.jsx)
    - 提供导航 `<NavLink>` 与 `<Outlet>`
  - errorElement: [`ErrorPage`](src/routers/Error.jsx)
    - 使用 `useRouteError` 与 `isRouteErrorResponse` 展示错误信息
- 子路由
  - index: true -> [`Home`](src/routers/Home.jsx)（路径 `/`）
  - path: `about` -> [`About`](src/routers/About.jsx)（路径 `/about`）
    - loader: [`loader`](src/routers/About.jsx)
    - 组件内使用 `useLoaderData` 读取 loader 返回的数据

对应的配置见 [`src/router.jsx`](src/router.jsx)：
```jsx
import {createBrowserRouter} from 'react-router-dom'
import Root from './routers/Root'
import Home from './routers/Home'
import About, { loader as aboutLoader } from './routers/About'
import ErrorPage from './routers/Error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About />, loader: aboutLoader },
    ],
  },
])
```

根布局组件 [`Root`](src/routers/Root.jsx) 提供导航与插槽：
```jsx
<nav>
  <NavLink to="/">首页</NavLink>
  <NavLink to="/about">关于</NavLink>
</nav>
<Outlet />
```

关于页的数据加载在 [`loader`](src/routers/About.jsx) 中模拟服务端时间，并在组件中读取：
```jsx
export async function loader() {
  return { time: new Date().toLocaleString() }
}

export default function About() {
  const data = useLoaderData()
  return <p>当前时间：{data.time}</p>
}
```

错误页 [`ErrorPage`](src/routers/Error.jsx)：
```jsx
const err = useRouteError()
if (isRouteErrorResponse(err)) {
  return <h1>{err.status} {err.statusText}</h1>
}
return <h1>未知错误</h1>
```

## 应用入口

- [`index.html`](index.html)：挂载点 `<div id="root" />`
- [`src/main.jsx`](src/main.jsx)：通过 `<RouterProvider router={router} />` 渲染路由
- Vite 配置见 [`vite.config.js`](vite.config.js)
- ESLint 配置见 [`eslint.config.js`](eslint.config.js)

## 添加新路由

在 [`src/router.jsx`](src/router.jsx) 的 `children` 中添加条目，例如：
```jsx
// ...existing code...
{ path: 'profile', element: <Profile /> }
// ...existing code...
```

## 常见问题

- 启动时报 Node 版本不满足：请升级至 Node ≥ 20.19.0
- `/about` 的时间不更新：loader 在进入路由时执行，刷新或再次导航以触发
