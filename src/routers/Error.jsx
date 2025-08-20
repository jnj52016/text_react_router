import { use } from "react";
import { isRouteErrorResponse,useRouteError } from "react-router-dom";

export default function ErrorPage() {
    //useRouterError的作用是获取路由错误信息
    //为什么可以获取，useRouterError是一个hook，它会在组件渲染时获取到对应的路由错误信息
    //useRouterError是自动的，React Router会在路由加载时自动调用对应的错误处理函数
    const err = useRouteError()
    if (isRouteErrorResponse(err)) {
        return <h1>{err.status} {err.statusText}</h1>
    }
    return <h1>未知错误</h1>
}