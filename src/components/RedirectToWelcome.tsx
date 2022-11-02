import { useEffect } from 'react'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
  // const error: any = useRouteError()

  const nav = useNavigate()
  useEffect(() => {
    nav('/welcome/1')
  }, [])

  return null
  // return (
  //   <p>{`status text${error.statusText}` || `message==>${error.message}`}</p>
  // )
}

export default ErrorPage
