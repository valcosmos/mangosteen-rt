import type { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface Welcome1Props {}

const Welcome4: FC<Welcome1Props> = () => {
  return (
    <div>
      4 <NavLink to={'/welcome/5'}>下一页</NavLink>{' '}
    </div>
  )
}

export default Welcome4
