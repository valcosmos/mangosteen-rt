import type { FC } from 'react'
import { Link } from 'react-router-dom'

interface Welcome1Props {}

const Welcome2: FC<Welcome1Props> = () => {
  return (
    <div>
      <Link to="/welcome/3">下一页</Link>
    </div>
  )
}

export default Welcome2
