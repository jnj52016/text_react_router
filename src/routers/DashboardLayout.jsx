import { NavLink, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <section>
      <h1>仪表盘</h1>
      <div style={{ display: 'flex', gap: 10 }}>
        <NavLink to="/dashboard" end>总览</NavLink>
        <NavLink to="/dashboard/settings">设置</NavLink>
      </div>
      <hr />
      <Outlet />
    </section>
  )
}