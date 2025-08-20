import {NavLink,Outlet} from 'react-router-dom'

export default function Root() {
  return (
    <div style={{padding:16}}>
        <nav style={{display:'flex',gap:12}}>
            <NavLink to="/">首页</NavLink>
            <NavLink to="/about">关于</NavLink>
        </nav>
        <hr />
        <Outlet />
    </div>
  )
}
