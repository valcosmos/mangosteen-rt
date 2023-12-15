import React from 'react'
import type { FC } from 'react'

interface Welcome1Props {}

const Welcome1: FC<Welcome1Props> = () => {
  return (
    <div text-center>
      <img />
      <h2 text-32px mt-48px>
        会挣钱
        {' '}
        <br />
        {' '}
        还要会省钱
      </h2>
    </div>
  )
}

export default Welcome1
