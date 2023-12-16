import React from 'react'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import p1 from '../assets/images/welcome1.svg'

interface Welcome1Props {}

const Welcome1: FC<Welcome1Props> = () => {
  return (
    <div text-center>
      <img w-128px h-130px src={p1} />
      <h2 text-32px mt-48px>
        会挣钱
        <br />
        也要会省钱
      </h2>
      <div mt-64px>
        <Link text-32px color="#6035BF" font-bold to="/welcome/2">下一页</Link>
      </div>
    </div>
  )
}

export default Welcome1
