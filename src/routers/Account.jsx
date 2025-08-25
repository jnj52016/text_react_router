import { redirect } from 'react-router-dom'

export async function loader() {
  const authed = Boolean(localStorage.getItem('token'))
  if (!authed) return redirect('/login')
  return null
}

export default function Account() {
  return <h1>账户中心（已登录可见）</h1>
}