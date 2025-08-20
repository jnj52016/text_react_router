import {useLoaderData} from 'react-router-dom'

export async function loader() {
    // 模拟从服务端获取数据
    return { time:new Date().toLocaleString() }
}

export default function About() {
    //data和上面的loader的关系是：data是loader返回的数据，loader在路由加载时被调用
    //为什么可以这么做，loader在路由加载时被调用，useLoaderData会在组件渲染时获取到对应的loader返回的数据
    const data = useLoaderData()
    return (
        <section>
            <h1>关于</h1>
            <p>当前时间：{data.time}</p>
        </section>
    )
}
