import { animated, useTransition } from '@react-spring/web'
import type { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

interface WelcomeLayoutProps {}

const WelcomeLayout: FC<WelcomeLayoutProps> = () => {
  const location = useLocation()
  const transition = useTransition(location.pathname, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: {
      duration: 1000,
    },
  })
  return transition((style, item) => (
    <animated.div style={style} key={item}>
      <Outlet />
    </animated.div>
  ))
}

export default WelcomeLayout
