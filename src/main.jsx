import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
//RouterProvider的作用是提供路由功能
//它会将路由信息传递给子组件, 使得子组件可以通过useRoute来获取路由信息
//useRoute是一个hook, 它可以获取当前路由的信息
//useRoute的使用方法, 直接在函数组件中调用useRoute()即可