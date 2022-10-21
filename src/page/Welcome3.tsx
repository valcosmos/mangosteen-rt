import type { FC } from 'react'
// import { NavLink } from 'react-router-dom'

interface Welcome1Props {}

const Welcome3: FC<Welcome1Props> = () => {
  return (
    <div flex justify-center items-center after="content-[123] b-1 b-red" before="content-[before] b-1 b-blue">
      <header hover:bg-red w-100px b-1 b-red h-40px></header>

      <main grow-1 b-1 b-blue h-100px></main>

      <footer w-200px b-1 b-black h-55px></footer>
    </div>
  )
}

export default Welcome3
