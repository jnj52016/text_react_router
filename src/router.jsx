import {createBrowserRouter, redirect} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Root from './routers/Root'
import Home from './routers/Home'
import About,{loader as aboutLoader} from './routers/About'
import ErrorPage from './routers/Error'

// 新增页面导入
import Profile from './routers/Profile'
import UserDetail, { loader as userLoader } from './routers/UserDetail'
import DashboardLayout from './routers/DashboardLayout'
import DashboardOverview from './routers/DashboardOverview'
import DashboardSettings from './routers/DashboardSettings'
import Contact, { action as contactAction } from './routers/Contact'
import Account, { loader as accountLoader } from './routers/Account'
import Login from './routers/Login'
import Search from './routers/Search'

// 懒加载页面
const Reports = lazy(() => import('./routers/Reports'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About />, loader: aboutLoader },

      // 新增：普通页面
      { path: 'profile', element: <Profile /> },

      // 新增：动态参数 + loader
      { path: 'users/:id', element: <UserDetail />, loader: userLoader },

      // 新增：多级嵌套布局
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardOverview /> },
          { path: 'settings', element: <DashboardSettings /> },
        ],
      },

      // 新增：懒加载路由
      {
        path: 'reports',
        element: (
          <Suspense fallback={<div>加载中…</div>}>
            <Reports />
          </Suspense>
        ),
      },

      // 新增：重定向
      { path: 'old-about', loader: () => redirect('/about') },

      // 新增：表单 action
      { path: 'contact', element: <Contact />, action: contactAction },

      // 新增：受保护路由 + 登录页
      { path: 'account', element: <Account />, loader: accountLoader },
      { path: 'login', element: <Login /> },

      // 新增：查询参数示例
      { path: 'search', element: <Search /> },
    ],
  },
])