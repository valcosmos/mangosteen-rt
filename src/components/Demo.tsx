import type { FC } from 'react'
import { animated, useSpring } from '@react-spring/web'

interface DemoProps {}

const Demo: FC<DemoProps> = () => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
    // to: { x: 100 },
  }))

  const onClick = () => {
    api.start({
      from: { x: 0 },
      to: { x: 100 },
    })
  }
  return (
    <animated.div
      onClick={onClick}
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
    />
  )
}

export default Demo
