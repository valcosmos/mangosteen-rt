import React from 'react'
import type { FC } from 'react'

interface Welcome1Props {}

const Welcome2: FC<Welcome1Props> = () => {
  return (
    <div text-center>
      <img />
      <h2 text-32px mt-48px>
        每日提醒 <br /> 不会遗漏每一笔账单
      </h2>
    </div>
  )
}

export default Welcome2
