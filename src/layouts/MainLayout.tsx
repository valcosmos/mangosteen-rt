import React from 'react'
import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = () => {
  const hasRead = localStorage.getItem('hasReadWelcomes')

  if (hasRead === 'yes') {
    return <Navigate to="/home" />
  }
  else {
    return (
      <div>
        <Outlet />
      </div>
    )
  }
}

export default MainLayout
