import type { FC } from 'react'
import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

interface Welcome1Props {}

const Welcome3: FC<Welcome1Props> = () => {
  return (
    <div>
      <Link to="/welcome/4">下一页</Link>
    </div>
  )
}

export default Welcome3
