import type { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface Welcome1Props {}

const Welcome3: FC<Welcome1Props> = () => {
  return (
    <div style={{ border: '1px solid red' }}>
      3 <NavLink to={'/welcome/4'}>下一页</NavLink>{' '}
    </div>
  )
}

export default Welcome3
