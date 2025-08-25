import { useLoaderData } from 'react-router-dom'

export async function loader({ params }) {
  const { id } = params
  // 模拟请求
  return { id, name: `User ${id}` }
}

export default function UserDetail() {
  const user = useLoaderData()
  return (
    <section>
      <h1>用户详情</h1>
      <p>ID：{user.id}</p>
      <p>名字：{user.name}</p>
    </section>
  )
}