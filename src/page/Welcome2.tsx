import type { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface Welcome1Props {}

const Welcome2: FC<Welcome1Props> = () => {
  return (
    <div style={{ border: '1px solid red' }}>
      2 <NavLink to={'/welcome/3'}>下一页</NavLink>{' '}
    </div>
  )
}

export default Welcome2
