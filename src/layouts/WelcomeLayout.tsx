import * as React from 'react'
import { useEffect, useRef, useState } from 'react'

import { animated, useTransition } from '@react-spring/web'
import type { FC, ReactNode, TouchEvent } from 'react'
import { Link, useLocation, useOutlet } from 'react-router-dom'

interface WelcomeLayoutProps {}

const linkMap = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
}

const WelcomeLayout: FC<WelcomeLayoutProps> = () => {
  const map = useRef<Record<string, ReactNode>>({})

  const location = useLocation()

  const outlet = useOutlet()
  // map作为outlet缓存
  map.current[location.pathname] = outlet

  const [x, setX] = useState({ position: 'relative' })

  const transition = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: {
      duration: 300,
    },
    onStart: () => {
      setX({ position: 'absolute' })
    },
    onRest: () => {
      setX({ position: 'relative' })
    },
  })

  const refMain = useRef<HTMLElement>()

  useEffect(() => {
    if (!refMain.current) {

    }
  }, [])

  const [position, setPosition] = useState({ x: -1, y: -1 })

  const onTouchStart = (e: TouchEvent) => {
    const newPosition = { x: parseInt(e.clientX), y: parseInt(e.clientY) }
    setPosition(newPosition)
  }
  const onTouchMove = (e: TouchEvent) => {
    const newPosition = { x: e.clientX, y: e.clientY }
    const move = { x: newPosition.x - position.x, y: newPosition.y - position.y }
  }
  const onTouchEnd = (e: TouchEvent) => {
    console.log(e)
  }

  return (
    <div className="bg-#5f34bf" h-screen flex flex-col items-stretch pb-16px>
      <header shrink-0 text-center pt-64px>
        <img w-64px />
        <h1 text="#d4d4ee" text-32px>
          山竹记账
        </h1>
      </header>
      <main
        shrink-1
        grow-1
        relative
        ref={refMain}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {transition((style, pathname) => (
          <animated.div style={{ ...style, ...x }} key={pathname} flex h="100%" w="100%" p-16px>
            {/* <Outlet /> */}
            <div grow-1 bg-white rounded-8px flex justify-center items-center>
              {map.current[pathname]}
            </div>
          </animated.div>
        ))}
      </main>
      <footer shrink-0 text-center text-32px text-white grid grid-cols-3 grid-rows-1>
        <Link style={{ gridArea: '1/2/2/3' }} to={linkMap[location.pathname]}>
          下一页
        </Link>
        <Link style={{ gridArea: '1/3/2/4' }} to={'/welcome/start'}>
          跳过
        </Link>
      </footer>
    </div>
  )
}

export default WelcomeLayout
