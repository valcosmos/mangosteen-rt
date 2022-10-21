import { animated, useTransition } from '@react-spring/web'
import type { FC, ReactNode } from 'react'
import { useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

interface WelcomeLayoutProps {}

const WelcomeLayout: FC<WelcomeLayoutProps> = () => {
  const map = useRef<Record<string, ReactNode>>({})

  const location = useLocation()

  const outlet = useOutlet()
  // map作为outlet缓存
  map.current[location.pathname] = outlet
  const transition = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: {
      duration: 300,
    },
  })
  return transition((style, pathname) => (
    <animated.div style={style} key={pathname}>
      {/* <Outlet /> */}
      <div style={{ textAlign: 'center' }}>{map.current[pathname]}</div>
    </animated.div>
  ))
}

export default WelcomeLayout
