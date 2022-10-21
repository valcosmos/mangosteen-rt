import { animated, useTransition } from '@react-spring/web'
import type { FC, ReactNode } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

interface WelcomeLayoutProps {}

const map: Record<string, ReactNode> = {}

const WelcomeLayout: FC<WelcomeLayoutProps> = () => {
  const location = useLocation()
  const outlet = useOutlet()
  // map作为outlet缓存
  map[location.pathname] = outlet
  const transition = useTransition(location.pathname, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: {
      duration: 1000,
    },
  })
  return transition((style, pathname) => (
    <animated.div style={style} key={pathname}>
      {/* <Outlet /> */}
      <div style={{ textAlign: 'center' }}>{map[pathname]}</div>
    </animated.div>
  ))
}

export default WelcomeLayout
