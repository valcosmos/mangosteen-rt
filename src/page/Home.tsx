import axios from 'axios'
import type { FC } from 'react'
import useSWR from 'swr'

interface HomeProps {}

function fetcher(path: string) {
  return axios.get<{ message: string }>(path)
}

const Home: FC<HomeProps> = () => {
  const { data, error, isValidating } = useSWR('http://121.196.236.94:3000', fetcher)

  if (error)
    return <div>failed</div>
  if (!data)
    return <div>loading...</div>

  // 如果正在刷新数据
  if (isValidating)
    return <div>正在获取最新值</div>

  return <div text-6xl>{data?.data.message}</div>
}

export default Home
