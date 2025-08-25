import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const login = () => {
    localStorage.setItem('token', 'demo')
    navigate('/account', { replace: true })
  }
  const logout = () => {
    localStorage.removeItem('token')
  }
  return (
    <section>
      <h1>登录</h1>
      <button onClick={login}>一键登录</button>
      <button onClick={logout}>清除登录</button>
    </section>
  )
}