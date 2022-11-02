import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import RedirectToWelcome from '../components/RedirectToWelcome'
import MainLayout from '../layouts/MainLayout'

import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RedirectToWelcome />,
    children: [welcomeRoutes],
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
