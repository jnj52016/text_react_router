import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {
  const linkStyle = ({ isActive }) => ({
    padding: '6px 10px',
    borderRadius: 6,
    textDecoration: 'none',
    color: isActive ? '#fff' : '#333',
    background: isActive ? '#1677ff' : 'transparent',
  })
  return (
    <div style={{ padding: 16 }}>
      <nav style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <NavLink to="/" end style={linkStyle}>首页</NavLink>
        <NavLink to="/about" style={linkStyle}>关于</NavLink>
        <NavLink to="/profile" style={linkStyle}>个人</NavLink>
        <NavLink to="/users/1" style={linkStyle}>用户1</NavLink>
        <NavLink to="/dashboard" end style={linkStyle}>仪表盘</NavLink>
        <NavLink to="/dashboard/settings" style={linkStyle}>仪表盘设置</NavLink>
        <NavLink to="/reports" style={linkStyle}>报表(懒加载)</NavLink>
        <NavLink to="/contact" style={linkStyle}>联系</NavLink>
        <NavLink to="/account" style={linkStyle}>账户(受保护)</NavLink>
        <NavLink to="/login" style={linkStyle}>登录</NavLink>
        <NavLink to="/search" style={linkStyle}>搜索</NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}