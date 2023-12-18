import type { FC } from 'react'
import useSwr from 'swr'
import p from '../assets/icons/pig.svg'
import add from '../assets/icons/add.svg'

export const Home: FC = () => {
  const { data, error } = useSwr('/api/')
  return (
    <div>
      <div flex justify-center items-center>
        <img src={p} alt="" my-20vh w="128px" h="130px" />
      </div>
      <div px-16px>
        <button h-48px w="100%" bg="#5f34bf" b-none rounded-8px text-white>开始记账</button>
      </div>
      <button w-56px h-56px bg="#5f34bf" rounded="50%" b-none text-6xl p-4px fixed bottom-16px right-16px>
        <img src={add} max-w="100%" max-h="100%" />
      </button>
    </div>
  )
}
