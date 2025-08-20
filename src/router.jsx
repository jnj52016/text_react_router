import {createBrowserRouter} from 'react-router-dom'
import Root from './routers/Root'
import Home from './routers/Home'
import About,{loader as aboutLoader} from './routers/About'
import ErrorPage from './routers/Error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About />, loader: aboutLoader },
    ],
  },
])