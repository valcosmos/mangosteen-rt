import type { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface Welcome1Props {}

const Welcome1: FC<Welcome1Props> = () => {
  return (
    <div>
      1 <NavLink to={'/welcome/2'}>下一页</NavLink>{' '}
    </div>
  )
}

export default Welcome1
