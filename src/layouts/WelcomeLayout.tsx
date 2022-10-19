import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface WelcomeLayoutProps {

}

const WelcomeLayout: FC<WelcomeLayoutProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default WelcomeLayout
