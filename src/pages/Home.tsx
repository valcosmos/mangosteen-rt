import { type FC, useEffect } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import p from '../assets/icons/pig.svg'

import { useTitle } from '../hooks/useTitle'
import { ajax } from '../lib/ajax'
import Loading from '../components/Loading'
import AddItemFloatButton from '../components/AddItemFloatButton'

interface Props {
  title?: string
}

export const Home: FC<Props> = (props) => {
  useTitle(props.title)
  const { data: meData, error: meError } = useSWR('/api/v1/me', async path =>
    (await ajax.get<Resource<User>>(path)).data.resource)
  const { data: itemsData, error: itemsError } = useSWR(meData ? '/api/v1/items' : null, async path =>
    (await ajax.get<Resources<Item>>(path)).data)

  const isLoadingMe = !meData && !meError
  const isLoadingItems = meData && !itemsData && !itemsError

  if (isLoadingMe || isLoadingItems) {
    return <Loading />
  }

  if (itemsData?.resources[0]) {
    return <Navigate to="/items" />
  }

  return (
    <div>
      <div flex justify-center items-center>
        <img src={p} alt="" my-20vh w="128px" h="130px" />
      </div>
      <div px-16px>
        <button h-48px w="100%" bg="#5f34bf" b-none rounded-8px text-white>开始记账</button>
      </div>
      <AddItemFloatButton />
    </div>
  )
}
