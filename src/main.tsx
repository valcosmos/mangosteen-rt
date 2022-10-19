import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
// import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>root</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/1',
    element: <div>123</div>,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
