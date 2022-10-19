import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import RedirectToWelcome from './components/RedirectToWelcome'
// import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        root <Outlet />
      </div>
    ),
    errorElement: <RedirectToWelcome />,
    children: [
      { index: true, element: <div>null</div> },
      {
        path: 'welcome',
        element: <Outlet />,
        children: [
          { index: true, element: <div>null</div> },
          { path: '1', element: <div>1  <NavLink to={'/welcome/2'}>下一页</NavLink> </div> },
          { path: '2', element: <div>2  <NavLink to={'/welcome/3'}>下一页</NavLink> </div> },
          { path: '3', element: <div>3  <NavLink to={'/welcome/4'}>下一页</NavLink> </div> },
          { path: '4', element: <div>4  <NavLink to={'/welcome/5'}>下一页</NavLink> </div> },
        ],
      },
    ],
    // children: [
    //   { index: true, element: <div>请选择1 2 3</div> }, // 路径为 /
    //   { path: '1', element: <div>1</div> }, // 路径为 /1
    //   { path: '2', element: <div>2</div> },
    //   { path: '3', element: <div>3</div> },
    // ],
  },
  // {
  //   path: '/4',
  //   element: <div>root/4</div>,
  // },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
